import { db } from "../connect.js";

export const search = (req, res) => {
  const { fees, score, city, areaOfStudy } = req.query;
  let q = "SELECT * FROM college WHERE Id >= 1";
  const queryParams = [];

  if (fees) {
    q += " AND fees <= ?";
    queryParams.push(Number(fees));
  }

  if (score) {
    q += " AND Score <= ?";
    queryParams.push(Number(score));
  }

  if (city) {
    q += " AND City = ?";
    queryParams.push(city);
  }

  if (areaOfStudy) {
    q += " AND AreaOfStudy = ?";
    queryParams.push(areaOfStudy);
  }
  db.query(q, queryParams, (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.json(data);
  });
};
