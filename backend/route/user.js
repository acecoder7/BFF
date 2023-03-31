import express from "express";
import {
  addCourseToPlan,
  addSubcourseToCourse,
  ConnectBuddyRequest,
  ConnectionDesicion,
  PerformanceComparision

} from "../controller/user.js";
import { isAuthenticated } from "../utils/Auth.js";

const router = express.Router();

router.put("/add/course", isAuthenticated, addCourseToPlan);

router.put("/add/subcourse", isAuthenticated, addSubcourseToCourse);

router.get("/connect/request/:userId",isAuthenticated, ConnectBuddyRequest);

router.put("/connection/:userId",isAuthenticated, ConnectionDesicion);

router.get("/performance/:userId",isAuthenticated, PerformanceComparision);


export default router;