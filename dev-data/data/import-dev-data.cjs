const fs = require("fs");
const mongoose = require("mongoose");

const dotenv = require("dotenv");
const Tour = require("../../models/tourModel.cjs");
dotenv.config({ path: "./config.env" });

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((err) => console.error("MongoDB connection error:", err));

//READ JSON FILE
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, "utf-8")
);

//IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Tour.create(tours);
    console.log("Data successfully loaded!");
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

//DELETE DATA FROM DB
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log("Data successfully deleted!");
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
console.log(process.argv);
