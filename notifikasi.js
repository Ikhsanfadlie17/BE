const cron = require("node-cron");
const nodemailer = require("nodemailer");
const TambahObat = require("./models/Obat");

// Konfigurasi pengiriman email
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Menjalankan cron job setiap detik
cron.schedule("* * * * *", async () => {
  try {
    const obatList = await TambahObat.find({ jadwal: { $lte: new Date() } });

    obatList.forEach((obat) => {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "genoskun28@gmail.com", // Ganti dengan email pengguna
        subject: "Pengingat Obat",
        text: `Waktunya minum obat ${obat.namaObat} dengan dosis ${obat.dosis}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("Error sending email:", error);
        } else {
          console.log("Email sent:", info.response);
        }
      });
    });
  } catch (error) {
    console.log("Error in cron job:", error);
  }
});
