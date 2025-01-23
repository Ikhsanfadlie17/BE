const mongoose = require("mongoose");

const RiwayatObatSchema = new mongoose.Schema({
  nama_obat: { type: String, required: true },
  dosis: { type: String, required: true },
  rentang_waktu_minum: { type: String, required: true },
  tanggal: { type: Date, default: Date.now },
});

module.exports = mongoose.model("RiwayatObat", RiwayatObatSchema);
