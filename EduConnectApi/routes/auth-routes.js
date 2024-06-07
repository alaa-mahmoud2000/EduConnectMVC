import express from "express";
import {registerStudent, login} from "../controllers/authentication.js";

const router = express.Router()

router.post("/register" , registerStudent);
router.post("/login" , login);


export default router