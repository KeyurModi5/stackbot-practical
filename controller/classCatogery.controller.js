const { ClassCategory } = require("../connection/connection");
exports.createClassCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const exist = await ClassCategory.findOne({
      where: { name: name },
    });
    if (exist) {
      return res.status(400).json({ message: "Class Category allready exist" });
    }
    const data = await ClassCategory.create(req.body);
    return res.status(201).json(data);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.ClassCategoryList = async (req, res) => {
  try {
    const list = await ClassCategory.findAll();
    return res.status(201).json(list);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
