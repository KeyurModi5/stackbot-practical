const { where } = require("sequelize");
const { Standard } = require("../connection/connection");

exports.createStandard = async (req, res) => {
  try {
    const { name } = req.body;
    const exist = await Standard.findOne({
      where: { name: name },
    });
    if (exist) {
      return res.status(400).json({ message: "Medium allready exist" });
    }
    const data = await Standard.create(req.body);
    return res.status(201).json(data);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.StandardList = async (req, res) => {
  try {
    let { id } = req.params;
    const list = await Standard.findAll({ where: { classCategoryId: id } });
    return res.status(201).json(list);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
