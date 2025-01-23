const RiwayatObat = require("../models/RiwayatObat");

exports.getRiwayatObat = async (req, res) => {
  try {
    const riwayatObat = await RiwayatObat.find().sort({ tanggal: -1 });
    res.status(200).json(riwayatObat);
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
};
