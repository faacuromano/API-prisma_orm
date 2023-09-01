import services from '../services/users.services.js'
    
const getAll = async (req, res) => {
  try {
    const allUsers = await services.getAll()
    res.status(200).send({ status: "OK", users: allUsers });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getOne = async (req, res) => {
  try {
    const selectedUser = await services.getOne(req.params.id)
    if (selectedUser != null) {
      res.status(200).send({ status: "OK", user: selectedUser });
    } else {
      res.send({ status: "(204) - No content", user: "User was not found" });
    }
  } catch (err) {
    res.status(500).send(err.message)
  }
}

export default {
  getAll,
  getOne
} 