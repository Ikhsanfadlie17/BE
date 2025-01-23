const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Definisi dasar untuk Swagger
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Obat Reminder API",
      version: "1.0.0",
      description: "Backend API untuk aplikasi pengingat obat",
    },
  },
  apis: ["./routes/*.js"], // Sesuaikan dengan path routes
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
