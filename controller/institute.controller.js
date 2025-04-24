const { institute } = require("../connection/connection");
exports.createInstitute = async (req, res) => {
  try {
    const { name } = req.body;
    const exist = await institute.findOne({
      where: { name: name },
    });
    console.log(exist);
    if (exist) {
      return res.status(400).json({ message: "Institute allready exist" });
    }
    const product = await institute.create(req.body);
    return res.status(201).json(product);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.instituteList = async (req, res) => {
  try {
    const list = await institute.findAll();
    return res.status(201).json(list);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
