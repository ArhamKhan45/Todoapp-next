import { usermodel } from "@/Schema/usermodel";
import Databaseconnect from "@/util/databaseconnect";
import {
  catchAsyncError,
  errorHandler,
  successUserHandler,
} from "@/middleware/handlers";
import {
  Userwithoutpassword,
  comparepassword,
  generatetoken,
  setCookie,
  setemail,
} from "@/util/impFunc";

const loginapi = catchAsyncError(async (req, res) => {
  await Databaseconnect();
  if (req.method !== "POST") {
    return errorHandler(
      res,
      400,
      `${req.method} request - Invalid request! please use POST request Only`
    );
  }
  let { email, password } = req.body;

  if (!email || !password) {
    return errorHandler(res, 401, "please provide all required fields");
  }

  email = setemail(email);

  let user = await usermodel.findOne({ email }).select("+password");

  if (!user) {
    return errorHandler(
      res,
      401,
      "Invalid email and password, please provide valid email and password to login"
    );
  }

  const match = await comparepassword(password, user.password);

  if (!match) {
    return errorHandler(
      res,
      401,
      "Invalid email and password, please provide valid email and password to login"
    );
  } else {
    const token = generatetoken(user._id);

    setCookie(res, token, true);

    user = Userwithoutpassword(user);
    // console.log(user);
    return successUserHandler(
      res,
      200,
      `Login successful! Welcome Back ${user.name}`,
      user
    );
  }
});

export default loginapi;
