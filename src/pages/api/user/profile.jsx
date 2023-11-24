import Databaseconnect from "@/util/databaseconnect";
import {
  catchAsyncError,
  errorHandler,
  successUserHandler,
} from "@/middleware/handlers";
import { checkauth } from "@/util/impFunc";

const profileapi = catchAsyncError(async (req, res) => {
  await Databaseconnect();
  if (req.method !== "GET") {
    return errorHandler(
      res,
      400,
      `${req.method} request - Invalid request! please use GET request Only`
    );
  }

  let user = await checkauth(req);
  if (!user) return errorHandler(res, 401, "Login first");

  // console.log(user);
  return successUserHandler(res, 200, `User Profile`, user);
});

export default profileapi;
