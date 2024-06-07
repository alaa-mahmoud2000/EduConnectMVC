import express from "express";
import { getStudent } from "../controllers/student.js";

const router = express.Router()

router.get("/find/:studentId" , getStudent);

export default router