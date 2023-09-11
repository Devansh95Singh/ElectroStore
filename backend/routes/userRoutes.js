import { loginUser, getUserProfile } from "../controllers/userController.js";
import express from 'express';
import { allowedForAdmin, tokenVerifier } from "../middleware/authMiddleware.js";

const router = express.Router();
router.post('/login', loginUser);
router.route('/profile').get(tokenVerifier, allowedForAdmin, getUserProfile);

export default router;