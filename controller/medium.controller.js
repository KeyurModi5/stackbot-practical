const { medium } = require("../connection/connection");

exports.createmeduim = async (req, res) => {
  try {
    const { mediumName } = req.body;
    const exist = await medium.findOne({
      where: { mediumName: mediumName },
    });
    if (exist) {
      return res.status(400).json({ message: "Medium allready exist" });
    }
    const data = await medium.create(req.body);
    return res.status(201).json(data);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.mediumList = async (req, res) => {
  try {
    const list = await medium.findAll();
    return res.status(201).json(list);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
