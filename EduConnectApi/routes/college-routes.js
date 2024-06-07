import express from "express";
import {getCollege, getCollgesByPage} from "../controllers/college.js";

const router = express.Router()

router.get("/find/:collegeId" , getCollege);
router.get("/getallbypage/:pageNumber/:pageSize" , getCollgesByPage);

export default router