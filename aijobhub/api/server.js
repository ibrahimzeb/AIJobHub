import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import gigRoute from "./routes/gig.route.js";
import orderRoute from "./routes/order.route.js";
import conversationRoute from "./routes/conversation.route.js";
import messageRoute from "./routes/message.route.js";
import reviewRoute from "./routes/review.route.js";
import authRoute from "./routes/auth.route.js";

require('dotenv').config();


const app = express();
const password = encodeURIComponent('Mongo@123');
const connectionString = `mongodb+srv://ibrahimzeb65:${password}@cluster0.wt8vvk6.mongodb.net/?retryWrites=true&w=majority&dbname=aijobhub`;


try {
    await mongoose.connect(connectionString);
    console.log("Connected To MongoDB!")
} catch (error) {
    console.log(error);
}

app.use(express.json());

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);

app.listen(8800, () => {
    console.log("Backend server is running!");
});
