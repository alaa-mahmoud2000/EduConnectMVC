import { db } from "../connect.js";

export const getCollege = (req, res) => {
  const collegeId = req.params.collegeId;
    const q = "SELECT * FROM college WHERE Id=?";

    db.query(q, [collegeId], (err, data) => {
      if (err) 
      {
        return res.status(500).json(err);
      }
      return res.json(data[0]);
    });
};

export const getCollgesByPage = (req , res) => {
  const pageNumber = parseInt(req.params.pageNumber);
    const pageSize = parseInt(req.params.pageSize);
    const offset = (pageNumber-1)*pageSize;
  
    const q = "SELECT * FROM college Order by Id "
    //q += " Limit " + pageSize.toString() + " Offset " + offset.toString(); 
    db.query(q, (err, data) => {
      if (err){ 
        return res.status(500).json(err);
      }
      return res.json(data);
    });
};