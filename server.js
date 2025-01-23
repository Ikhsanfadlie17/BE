const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const tambahObatRoutes = require("./routes/tambahObatRoutes");
const riwayatObatRoutes = require("./routes/riwayatObatRoutes");
const swagger = require("./swagger"); // Integrasi swagger

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "MedTrack",
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// API routes
app.use("/api/users", authRoutes);
app.use("/api/tambahobat", tambahObatRoutes);
app.use("/api/riwayatobat", riwayatObatRoutes);

// Swagger setup
swagger(app);

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";
app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
