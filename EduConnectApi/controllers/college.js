import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getCollege = (req, res) => {

  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");
  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const collegeId = req.params.collegeId;
    const q = "SELECT * FROM college WHERE Id=?";

    db.query(q, [collegeId], (err, data) => {
      if (err) 
      {
        return res.status(500).json(err);
      }
      return res.json(data[0]);
    });
    
  });
  
};

export const getCollgesByPage = (req , res) => {

  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const pageNumber = parseInt(req.params.pageNumber);
    const pageSize = parseInt(req.params.pageSize);
    const offset = (pageNumber-1)*pageSize;
  
    const q = "SELECT * FROM college Order by Id Limit " + pageSize.toString() + " Offset " + offset.toString(); 
    db.query(q, (err, data) => {
      if (err){ 
        return res.status(500).json(err);
      }
      return res.json(data);
    });
  });
  
};