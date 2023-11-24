export const successTaskHandler = (res, statuscode, message, task) => {
  return res.status(statuscode).json({ success: true, message: message, task });
};
export const successUserHandler = (res, statuscode, message, user) => {
  return res.status(statuscode).json({ success: true, message: message, user });
};

export const errorHandler = (res, statuscode, message) => {
  return res.status(statuscode).json({ success: false, message: message });
};

export const catchAsyncError = (passedfunc) => (req, res) => {
  return Promise.resolve(passedfunc(req, res)).catch((err) => {
    return errorHandler(res, 500, err.message);
  });
};
