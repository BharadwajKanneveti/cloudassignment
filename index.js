const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const userRoutes = require("./routes/users")
const path = require("path")

const app = express();
const port = 5000;

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
