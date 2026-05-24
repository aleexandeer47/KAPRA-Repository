import express from "express";
import cors from "cors";
import CustomerRoutes from "../Backend/src/routes/Customer.js";
import LogoutRoutes from "../Backend/src/routes/Logout.js";
import loginCustomerRoutes from "../Backend/src/routes/loginCustomers.js";
import recoveryPasswordRoutes from "../Backend/src/routes/recoveryPassword.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173/", "https://localhost:5174"],
    // permitir el envió de cookies y credenciales
    credentials: true,
  }),
);

app.use(cookieParser());
app.use(express.json());

app.use("/api/customers", CustomerRoutes);
app.use("/api/logout", LogoutRoutes);
app.use("/api/login",loginCustomerRoutes);
app.use("/api/recoveryPassword", recoveryPasswordRoutes);


export default app;