import { usermodel } from "@/Schema/usermodel";
import {
  catchAsyncError,
  errorHandler,
  successTaskHandler,
} from "@/middleware/handlers";
import Databaseconnect from "@/util/databaseconnect";
import { checkauth, comparepassword, setpassword } from "@/util/impFunc";

const editprofile = catchAsyncError(async (req, res) => {
  if (req.method !== "PUT") {
    errorHandler(
      res,
      401,
      `${req.method} request - Invalid request! please use GET request Only`
    );
  }
  await Databaseconnect();
  const user = await checkauth(req);

  if (!user) return errorHandler(res, 401, "Login first");

  var { name, password, newPassword, confirmPassword } = req.body;
  var updatedcategory = {},
    successpassword,
    successname,
    mainUser,
    hashedpassword;
  const { email } = user;
  mainUser = await usermodel.findOne({ email }).select("+password");

  if (name) {
    if (mainUser.name === name) {
      successname = false;
      updatedcategory.NameError = "old name and new name are not be equal";
    } else {
      mainUser.name = name;
      updatedcategory.name = "Name is updated successfully";
      successname = true;
      // console.log("working 1");
    }
  } else {
    updatedcategory.NameError = "please provide the Name to update it";
    successname = false;
  }

  if (!newPassword || !password || !confirmPassword) {
    successpassword = false;
    updatedcategory.passError =
      "please provide all required fields of the passwords";
  } else {
    successpassword = true;
  }

  if (successpassword) {
    const match = await comparepassword(password, mainUser.password);
    if (match) {
      if (password === newPassword) {
        updatedcategory.passError =
          "old password and new password are not be equal";
        successpassword = false;
      } else {
        if (newPassword === confirmPassword) {
          hashedpassword = await setpassword(newPassword);
          // console.log(hashedpassword);
          mainUser.password = hashedpassword;
          // console.log(mainUser.password);
          // console.log("working 2");
          updatedcategory.password = "Password is updated successfully";
        } else {
          updatedcategory.passError =
            "new password do not matched with confirm password";
          successpassword = false;
        }
      }
    } else {
      updatedcategory.passError = "Old password do not matched";
      successpassword = false;
    }
  }

  //   await user.save();
  await mainUser.save();
  return res.status(200).json({
    successName: successname,
    successPassword: successpassword,
    successNameMessage: updatedcategory.name,
    successPasswordMessage: updatedcategory.password,
    nameErrorMessage: updatedcategory.NameError,
    passwordErrorMessage: updatedcategory.passError,
    user,
  });
});

export default editprofile;

// `${updatedcategory.name} ${updatedcategory.password} updated successfully and ${updatedcategory.passError}`,
