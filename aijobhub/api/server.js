import express from "express";
import mongoose from "mongoose"

const app = express()
const password = encodeURIComponent('Mongo@123');
const connectionString = `mongodb+srv://ibrahimzeb65:${password}@cluster0.wt8vvk6.mongodb.net/?retryWrites=true&w=majority&dbname=aijobhub`;


mongoose.set('strictQuery',true)

try {
    await mongoose.connect(connectionString);
    console.log("Connected To MongoDB!")
  } catch (error) {
    console.log(error);
  }

app.listen(8800,()=> {
console.log("Backend server is running!")
})