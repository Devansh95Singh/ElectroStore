import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.json({
      _id: user._id,
      email: user.email,
      name: user.name,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user email or password");
  }
});

const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    res.status(400);
    throw new Error("User with this email already exists");
  } else {
    const newUser = await User.create({ email, name, password });
    if (newUser) {
      generateToken(res, newUser._id);
      res.status(200).json({
        name: newUser.name,
        email: newUser.email,
        isAdmin: newUser.isAdmin,
        _id: newUser._id,
      });
    }
  }
});

const getUserProfile = asyncHandler((req, res) => {
  res.send("profile route");
});

const logout = asyncHandler((req, res) => {
  res.cookie("jwt", {}, { httpOnly: true, expires: new Date(0) });
  res.status(200).json({ message: "Logged out successfully" });
});

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "30d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: false,
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
};

export { loginUser, getUserProfile, logout, register };
