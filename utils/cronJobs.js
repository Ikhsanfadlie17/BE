const cron = require("node-cron");
const TambahObat = require("../models/Obat");

// Menjalankan cron job setiap menit
cron.schedule("* * * * *", async () => {
  try {
    const currentDate = new Date();
    const obatList = await TambahObat.find({ jadwal: { $lte: currentDate } });

    obatList.forEach((obat) => {
      // Logika untuk notifikasi dalam aplikasi (bisa dikembangkan sesuai kebutuhan)
      console.log(
        `Waktunya minum obat: ${obat.namaObat}, dosis: ${obat.dosis}`
      );
    });
  } catch (error) {
    console.error("Error in cron job:", error);
  }
});
