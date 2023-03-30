import express from "express";
import {
  addCourseToPlan,
  addSubcourseToCourse

} from "../controller/user.js";
import { isAuthenticated } from "../utils/Auth.js";

const router = express.Router();

router.put("/add/course/", addCourseToPlan);

router.put("/add/subcourse", addSubcourseToCourse);


export default router;