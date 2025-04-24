const { Subject, StandardSubject } = require("../connection/connection");

exports.createSubject = async (req, res) => {
  try {
    const { name } = req.body;
    const exist = await Subject.findOne({
      where: { name: name },
    });
    if (exist) {
      return res.status(400).json({ message: "Subject all ready exist" });
    }
    const data = await Subject.create(req.body);
    return res.status(201).json(data);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.SubjectList = async (req, res) => {
  try {
    const list = await Subject.findAll();
    return res.status(201).json(list);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.createStandardSubject = async (req, res) => {
  try {
    const data = await StandardSubject.create(req.body);
    return res.status(201).json(data);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
