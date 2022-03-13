import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from "./routes/users.js";

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.use("/", userRoutes);
app.get("/", (req, res) => res.send("Hello from Express"));

if (process.env.NODE_ENV === "production") {
    //Set static folder
    app.use(express.static(path.join(__dirname, "frontend/build")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "frontend", "build", "index.html"))
    })
}

app.listen(port, () => console.log(`Server is listening on port: http://localhost:${port}`));
