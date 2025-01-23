// routes/tambahObatRoutes.js
const express = require("express");
const { tambahObat } = require("../controllers/tambahObatController");
const router = express.Router();

router.post("/", tambahObat); // Endpoint untuk menambahkan obat baru

module.exports = router;
