import express from "express";
import {getCollege, getCollgesByPage} from "../controllers/college.js";
import {tokenMiddleware} from "../middleware/authMiddleware.js";

const router = express.Router()

router.get("/find/:collegeId" , tokenMiddleware , getCollege);
router.get("/getallbypage/:pageNumber/:pageSize" , tokenMiddleware , getCollgesByPage);

export default router