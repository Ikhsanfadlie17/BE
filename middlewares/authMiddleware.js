const jwt = require("jsonwebtoken");

// Middleware untuk autentikasi JWT
module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).send("No token, authorization denied");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.userId;
    next();
  } catch (error) {
    res.status(401).send("Token is not valid");
  }
};
