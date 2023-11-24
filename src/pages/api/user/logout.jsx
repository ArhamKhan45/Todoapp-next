import Databaseconnect from "@/util/databaseconnect";
import {
  catchAsyncError,
  errorHandler,
  successUserHandler,
} from "@/middleware/handlers";
import { getCookieName, setCookie } from "@/util/impFunc";

const logoutapi = catchAsyncError(async (req, res) => {
  await Databaseconnect();
  if (req.method !== "GET") {
    return errorHandler(
      res,
      400,
      `${req.method} request - Invalid request! please use GET request Only`
    );
  }

  const mycookiename = getCookieName(req);

  setCookie(res, null, false);
  return successUserHandler(
    res,
    200,
    `Logout successful! See you soon ${mycookiename}`,
    ""
  );
});

export default logoutapi;

// logout User name
