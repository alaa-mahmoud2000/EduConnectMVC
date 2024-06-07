import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getStudent = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const studentId = req.params.studentId;
    const q = "SELECT * FROM student WHERE Id=?";

    db.query(q, [studentId], (err, data) => {
      if (err) 
      {
        return res.status(500).json(err);
      }
      return res.json(data[0]);
    });
  })
};
