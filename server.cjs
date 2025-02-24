const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./app.cjs");

const DB = process.env.DATABASE;
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((err) => console.error("MongoDB connection error:", err));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
