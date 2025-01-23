// controllers/tambahObatController.js
const TambahObat = require("../models/Obat");

// Menambahkan obat baru ke database dengan waktu minum
exports.tambahObat = async (req, res) => {
  const { namaObat, dosis, waktuMinum } = req.body;

  try {
    const obat = new TambahObat({
      namaObat,
      dosis,
      waktuMinum: new Date(waktuMinum), // Simpan waktu minum dalam format Date
    });

    await obat.save();
    res.status(201).send("Obat berhasil ditambahkan");
  } catch (error) {
    console.error("Error while adding obat:", error);
    res.status(500).send("Server error");
  }
};
