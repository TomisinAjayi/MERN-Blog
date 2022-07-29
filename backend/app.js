import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";

const app = express();
const adminPassword = encodeURIComponent( 's9A*LdqXQt@3k!5' );

app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

mongoose.connect(
    'mongodb+srv://admin:' + adminPassword + '@cluster0.og8sn.mongodb.net/Blog?retryWrites=true&w=majority'
    )
    .then(
        () => app.listen(3000))
    .then(
        () => console.log("Connected to database and listening to localhost 3000")
).catch((err) => console.log(err));