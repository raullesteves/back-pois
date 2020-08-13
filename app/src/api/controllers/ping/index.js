const ping = async (req, res) => {
  return res.status(200).json({ message: "YAY" });
};

module.exports = {
  ping,
};
