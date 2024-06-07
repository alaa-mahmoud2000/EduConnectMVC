import express from "express";
import {getDepartmentsForCollege , addDepartment} from "../controllers/department.js";

const router = express.Router()

router.get("/getCollegeDepartments/:collegeId" , getDepartmentsForCollege);
router.post("/addDepartment" , addDepartment);

export default router