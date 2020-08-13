const poiService = require("../../services/pois/poiService");

const getPois = (req, res) => {
  try {
    const { limit = 10, offset = 0, poiName } = req.query;
    const geoPoints = poiService({ limit, offset, poiName });
    return res.status(200).json({ data: geoPoints, message: "Pois bacanas" });
  } catch (error) {
    return res
      .status(500)
      .json({
        error: error.message,
        message: "Todo mundo erra. E dessa vez foram nossos servidores.",
      });
  }
};

module.exports = getPois;
