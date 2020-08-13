const poiRepository = require("../../repositories/pois/poiRepository");
const { toGeoPoints } = require("../../helpers");
const delimitSearch = ({ limit, offset }) => (pois) => {
  return pois.slice(Number(offset), Number(offset) + Number(limit));
};

const poiService = ({ limit, offset, poiName }) => {
  const pois = poiRepository();
  const delimitSearchByLimitAndOffset = delimitSearch({ limit, offset });
  const filteredPois = poiName
    ? delimitSearchByLimitAndOffset(pois.filter((poi) => poi.name === poiName))
    : delimitSearchByLimitAndOffset(pois);
  const geoPoints = filteredPois.map(toGeoPoints);
  return geoPoints;
};

module.exports = poiService;
