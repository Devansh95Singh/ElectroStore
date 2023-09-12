import {
  loginUser,
  getUserProfile,
  logout,
  register,
  updateUserProfile,
} from "../controllers/userController.js";
import express from "express";
import {
  allowedForAdmin,
  tokenVerifier,
} from "../middleware/authMiddleware.js";

const router = express.Router();
router.post("/login", loginUser);
router.route("/profile").get(tokenVerifier, allowedForAdmin, getUserProfile);
router.route("/logout").get(tokenVerifier, logout);
router.route("/register").post(register);
router
  .route("/updateProfile")
  .put(tokenVerifier, allowedForAdmin, updateUserProfile);

export default router;
