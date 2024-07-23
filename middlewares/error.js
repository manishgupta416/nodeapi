// class ErrorHandler extends Error {
//     constructor(message ,statusCode)
//     this.statusCode=statusCode
// }
// ErrorHandler(msg,statusCode)

export const errMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal server error";
  res.status(200).json({
    success: true,
    message: err.message,
  });
};
export default ErrorHandler;
//note while deploying keep in mind it will not work  because of cors ,
//backed wrl and frontend url will different thats why
