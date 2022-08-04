import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";
import cors from "cors";

const app = express();
//add password when you want to run app
const adminPassword = encodeURIComponent( 'password' );

app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

mongoose.connect(
    'mongodb+srv://admin:' + adminPassword + '@cluster0.og8sn.mongodb.net/Blog?retryWrites=true&w=majority'
    )
    .then(
        () => app.listen(8080))
    .then(
        () => console.log("Connected to database and listening to localhost 8080")
).catch((err) => console.log(err));
