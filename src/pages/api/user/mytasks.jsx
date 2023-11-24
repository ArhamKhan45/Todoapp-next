import Databaseconnect from "@/util/databaseconnect";
import {
  catchAsyncError,
  errorHandler,
  successTaskHandler,
} from "@/middleware/handlers";
import { checkauth } from "@/util/impFunc";
import { taskModel } from "@/Schema/taskmodel";

const mytasksapi = catchAsyncError(async (req, res) => {
  await Databaseconnect();
  if (req.method !== "GET") {
    return errorHandler(
      res,
      400,
      `${req.method} request - Invalid request! please use GET request Only`
    );
  }

  const user = await checkauth(req);
  if (!user) return errorHandler(res, 401, "Login first");
  // console.log(user);

  const tasks = await taskModel.find({ user: user._id });

  return successTaskHandler(res, 200, `my tasks`, tasks);
});

export default mytasksapi;
