import express from "express";
import cookieParser from "cookie-parser";
const app = express();

import collegeRoutes from "./routes/college-routes.js";
import studentRoutes from "./routes/student-routes.js";
import authRoutes from "./routes/auth-routes.js";
import departmentRoutes from "./routes/department-routes.js";
import searchRoutes from "./routes/search-routes.js";
import cors from "cors";

// Middleware
app.use(express.json());
app.use(cookieParser());

app.use(cors({ origin: 'http://localhost:4200', credentials: true}));

// Routing 
app.use("/api/college", collegeRoutes);
app.use("/api/student" , studentRoutes);
app.use("/api/auth" , authRoutes);
app.use("/api/department" , departmentRoutes);
app.use("/api/search" , searchRoutes);

app.listen(8800, () => {
  console.log("Edu Connect Api is working!");
});
