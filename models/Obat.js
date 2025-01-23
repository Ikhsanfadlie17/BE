// models/obat.js
const mongoose = require("mongoose");

const ObatSchema = new mongoose.Schema({
  namaObat: { type: String, required: true },
  dosis: { type: String, required: true },
  waktuMinum: { type: Date, required: true },
});

const Obat = mongoose.model("Obat", ObatSchema);

module.exports = Obat;
