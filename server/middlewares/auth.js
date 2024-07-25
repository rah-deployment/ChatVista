import jwt from "jsonwebtoken";
import { ErrorHandler } from "../utils/utility.js";
import { adminSecretKey } from "../app.js";
import { TryCatch } from "./error.js";

const isAuthenticated = TryCatch((req, res, next) => {
  const token = req.cookies["chatvista-token"];

  if (!token) return next(new ErrorHandler("User not authenticated", 401));

  const decodedData = jwt.verify(token, process.env.JWT_SECRET);

  req.userId = decodedData._id;
  next();
});

const isAdmin = (req, res, next) => {
  const token = req.cookies["chatvista-admin-token"];

  if (!token)
    return next(new ErrorHandler("Only Admin can access this route", 401));

  const secretKey = jwt.verify(token, process.env.JWT_SECRET);

  const isMatched = secretKey === adminSecretKey;

  if (!isMatched)
    return next(new ErrorHandler("Only Admin can access this route", 401));

  next();
};

export { isAuthenticated, isAdmin };
