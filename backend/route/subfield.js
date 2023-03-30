import express from "express";
import {
  createSubField,
  deleteSubField,
  getallSubField,
  getSubField

} from "../controller/subfield.js";
import { isAuthenticated } from "../utils/Auth.js";

const router = express.Router();

router.post("/create", createSubField);

router.delete("/delete/:subfieldId", deleteSubField);

router.get("/all", getallSubField);

router.get("/:subfieldId", getSubField);

export default router;