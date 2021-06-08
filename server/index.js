const express = require("express");
const app = express();
const port = 3000;
const dotenv = require("dotenv");
const helmet = require("helmet");
const mongoose = require("mongoose");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
dotenv.config();

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MonogDB through Mongoose!");
  }
);

// middleware

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
