const { SchoolRegistration } = require("../connection/connection");
exports.register = async (req, res) => {
  try {
    const data = await SchoolRegistration.create(req.body);
    return res.status(201).json(data);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
