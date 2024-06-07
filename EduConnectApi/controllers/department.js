import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getDepartmentsForCollege = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");
  
    jwt.verify(token, "secretkey", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");
  
      const collegeId = req.params.collegeId;
      const q = "SELECT * FROM Department WHERE CollegeId=?";
  
      db.query(q, [collegeId], (err, data) => {
        if (err) 
        {
          return res.status(500).json(err);
        }
        return res.json(data);
      });
    })
};

export const addDepartment = (req,res) =>{
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");
  
    jwt.verify(token, "secretkey", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");
  
    const q =
      "INSERT INTO Department (`name`,`description`,`collegeId`) VALUE (?)";

    const values = [
      req.body.name,
      req.body.description,
      req.body.collegeId
    ];
  
      db.query(q, [values], (err, data) => {
        if (err) 
        {
          return res.status(500).json(err);
        }
        return res.status(200).json("Department added successfully!");
      });
    })
};