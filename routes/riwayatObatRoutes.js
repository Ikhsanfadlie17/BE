const express = require("express");
const { getRiwayatObat } = require("../controllers/riwayatObatController");
const router = express.Router();

router.get("/", getRiwayatObat);

module.exports = router;
