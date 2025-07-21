const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://niraj915523:5uzppwMct77IlB7f@cluster0.btzjz9k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
      )
      .then(() => console.log("🔥 DB Connected Successfully"))
      .catch((err) => console.error("DB Error:", err));
  } catch (err) {
    console.error("DB Error:", err);
  }
};

module.exports = connectDB;