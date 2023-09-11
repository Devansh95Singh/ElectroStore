import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const tokenVerifier = asyncHandler(async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    const { userId } = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await User.findById(userId).select("-password");
    if (user) {
      req.user = user;
    } else {
      res.status(401);
      throw new Error("Invalid token or no user found");
    }
    next();
  } catch (error) {
    res.status(401);
    throw new Error("Invalid token");
  }
});

const allowedForAdmin = asyncHandler((req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Restricted area");
  }
});

export { tokenVerifier, allowedForAdmin };
