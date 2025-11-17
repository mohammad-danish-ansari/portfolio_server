import express from "express";
const app = express();
import { getAllContactBooking, createContactBooking,deleteByIdContactBooking } from "./contactReq.js";
app.get("/getAllContactBooking", getAllContactBooking);
app.post("/createContactBooking", createContactBooking);
app.delete("/deleteByIdContactBooking/:id", deleteByIdContactBooking);

export default app;
