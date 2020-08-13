const toGeoPoints = (poi) => ({
  type: "Feature",
  properties: { cluster: false, poiName: poi.name },
  geometry: {
    type: "Point",
    coordinates: [parseFloat(poi.longitude), parseFloat(poi.latitude)],
  },
});

module.exports = toGeoPoints