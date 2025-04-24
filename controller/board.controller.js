const { board } = require("../connection/connection");

exports.createboard = async (req, res) => {
  try {
    const { boardName } = req.body;
    const exist = await board.findOne({
      where: { boardName: boardName },
    });
    if (exist) {
      return res.status(400).json({ message: "board allready exist" });
    }
    const data = await board.create(req.body);
    return res.status(201).json(data);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.boardList = async (req, res) => {
  try {
    const list = await board.findAll();
    return res.status(201).json(list);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.deleteBoard = async (req, res) => {
  try {
    const product = await board.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "board not found" });
    }
    await product.destroy();
    return res.status(201).json({ message: "board deleted successfully" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
