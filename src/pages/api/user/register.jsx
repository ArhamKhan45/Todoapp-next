import { usermodel } from "@/Schema/usermodel";
import {
  catchAsyncError,
  errorHandler,
  successUserHandler,
} from "@/middleware/handlers";
import Databaseconnect from "@/util/databaseconnect";
import { Userwithoutpassword, setemail, setpassword } from "@/util/impFunc";

const registerapi = catchAsyncError(async (req, res) => {
  await Databaseconnect();
  if (req.method !== "POST") {
    return errorHandler(
      res,
      400,
      `${req.method} request - Invalid request! please use POST request Only`
    );
  }

  let { name, email, password } = req.body;

  if (!name || !email || !password) {
    return errorHandler(res, 401, "please provide all required fields");
  }

  email = setemail(email);

  let newuser = await usermodel.find({ email: email });

  if (newuser.length) {
    return errorHandler(
      res,
      401,
      "User already exists, please create a new user Or login the existing user"
    );
  } else {
    password = await setpassword(password);

    newuser = await usermodel.create({ name, email, password });

    return successUserHandler(res, 201, "User registered successfully", "");
  }
});

export default registerapi;
