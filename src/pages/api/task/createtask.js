import { taskModel } from "@/Schema/taskmodel";
import {
  catchAsyncError,
  errorHandler,
  successTaskHandler,
} from "@/middleware/handlers";
import Databaseconnect from "@/util/databaseconnect";
import { checkauth } from "@/util/impFunc";

const createtask = catchAsyncError(async (req, res) => {
  if (req.method !== "POST") {
    return errorHandler(
      res,
      400,
      `${req.method} request - Invalid request! please use POST request Only`
    );
  }

  await Databaseconnect();
  const user = await checkauth(req);
  if (!user) return errorHandler(res, 401, "Login first");
  const { title, description } = req.body;
  if (!title || !description) {
    return errorHandler(res, 401, "please provide all required fields");
  }

  const newtask = await taskModel.create({
    title,
    description,
    user: user._id,
  });
  return successTaskHandler(res, 201, "task created successfully", newtask);
});
export default createtask;
