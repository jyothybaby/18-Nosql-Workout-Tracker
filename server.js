const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const app = express();
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
//Database name is fitness
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessTracker_db",
 {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false

}
);
mongoose.connection.on('error', (err)=>{
console.error(err);
}
)
app.use(require("./routes/api.js"));
app.use(require("./routes/htmlRoutes.js"));


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
