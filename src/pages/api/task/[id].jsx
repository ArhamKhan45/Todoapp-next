import { taskModel } from "@/Schema/taskmodel";
import {
  catchAsyncError,
  errorHandler,
  successTaskHandler,
} from "@/middleware/handlers";
import Databaseconnect from "@/util/databaseconnect";
import { checkauth } from "@/util/impFunc";

const taskupdatedeleteApi = catchAsyncError(async (req, res) => {
  await Databaseconnect();
  const user = await checkauth(req);
  if (!user) return errorHandler(res, 401, "Login first");
  const taskid = req.query.id;

  const task = await taskModel.findById(taskid);
  if (!task) return errorHandler(res, 404, "task not found");
  // console.log(task);

  if (req.method === "PUT") {
    task.iscompleted = !task.iscompleted;
    await task.save();
    return successTaskHandler(res, 200, "task updated successfully", task);
  } else if (req.method === "DELETE") {
    await task.deleteOne();
    return successTaskHandler(res, 200, "task deleted successfully", "");
  } else {
    return errorHandler(
      res,
      400,
      `${req.method} request - Invalid request! please use PUT and DELETE request Only`
    );
  }
});

export default taskupdatedeleteApi;
