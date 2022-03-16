const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const userRoutes = require("./routes/users")
const path = require("path")
const mongoose = require("mongoose")

const app = express();
const port = 5000;
const dbUrl = "mongodb+srv://Bharadwaj:auqpnr6bZr0jx0at@cluster0.qpvuw.mongodb.net/cloud?retryWrites=true&w=majority"

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Mongoose Connection Denied"));
db.once("open", () => {
    console.log("Mongoose Connection established")
})

app.use(bodyParser.json());
app.use(cors());

app.use(userRoutes);

if (process.env.NODE_ENV === "production") {
    //Set static folder
    app.use(express.static(path.join(__dirname, "frontend/build")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "frontend", "build", "index.html"))
    })
}

app.listen(port, () => console.log(`Server is listening on port: http://localhost:${port}`));
