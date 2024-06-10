import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerStudent = (req, res) => {
  
    const q = "SELECT * FROM student WHERE Email = ?";
    //console.log(req.body)
    db.query(q, [req.body.email], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length) return res.status(409).json("Student already exists!");
      //CREATE A NEW USER
      //Hash the password
  
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(req.body.password, salt);
  
      const q =
        "INSERT INTO student (`name`,`phonenumber`,`email`,`address` ,`password`,`edutype`,`score` ,`dob`,`school`,`budget`) VALUE (?)";
  
      const values = [
        req.body.name,
        req.body.phoneNumber,
        req.body.email,
        req.body.address,
        hashedPassword,
        req.body.eduType,
        req.body.score,
        req.body.dob,
        req.body.school,
        req.body.budget
      ];
  
      db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Student has been created.");
      });
    });
};
  

export const login = (req, res) => {
    const q = "SELECT * FROM student WHERE email = ?";
    //console.log(req.body)
    db.query(q, [req.body.email], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length === 0) return res.status(404).json("student not found!");
      //console.log(data)
      const checkPassword = bcrypt.compareSync(
        req.body.password,
        data[0].Password
      );
  
      if (!checkPassword)
        return res.status(400).json("Wrong password or email!");
  
      const token = jwt.sign({ id: data[0].id }, "secretkey");
  
      const studentInfo = {
        "Name" : data[0].Name,
        "PhoneNumber" : data[0].PhoneNumber,
        "School" : data[0].School,
        "Budget" : data[0].Score,
        "Address" : data[0].Address,
        "EduType" : data[0].EduType,
        "tkn": token
      };
  
      res.cookie("accessToken", token, {
          httpOnly: true,
        })
        .status(200)
        .json(studentInfo);
    });
  };