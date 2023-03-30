import express from "express";
import {
  createField,
  deleteField,
  getallField,
  getField,
  addSubfield

} from "../controller/field.js";
import { isAuthenticated } from "../utils/Auth.js";

const router = express.Router();

router.post("/create", createField);

router.delete("/delete/:fieldId", deleteField);

router.get("/all", getallField);

router.get("/:fieldId", getField);

router.put("/add/subfield/:fieldId", addSubfield);

export default router;