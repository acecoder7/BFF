import express from "express";
import { 
    register,
    login,
    whoami,
    logout,
    resetPassword,
    forgotPassword,
    updatePassword,
    updateProfile,
    getallUser
} from '../controller/auth.js';
import { isAuthenticated } from "../utils/Auth.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/whoami", whoami);

router.get("/logout", logout);

router.put("/change/password", isAuthenticated, updatePassword);

router.post("/forgot/password", forgotPassword);

router.put("/password/reset/:token", resetPassword);

router.get("/users", getallUser);

router.put("/update/profile", isAuthenticated, updateProfile);



export default router;