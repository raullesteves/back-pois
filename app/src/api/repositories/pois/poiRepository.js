const poiRepository = () => {
  const pois = require("../../../pois.json");
  return pois;
};

module.exports = poiRepository;
