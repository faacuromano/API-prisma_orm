import services from '../services/users.services.js'
    
const getAll = async (req, res) => {
  try {
    const allUsers = await services.getAll()
    res.status(200).send(allUsers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getOne = async (req, res) => {
  try {
    const selectedUser = await services.getOne(req.params.id)
    if (selectedUser != null) {
      res.status(200).send(selectedUser);
    } else {
      res.send({ user: "User was not found" });
    }
  } catch (err) {
    res.status(500).send(err.message)
  }
}

const create = async (req, res) => {
  try {
    const selectedUser = await services.create(req.body)
    if (selectedUser != null) {
      res.status(200).send(selectedUser);
    } else {
      res.send({ user: "User was not found" });
    }
  } catch (err) {
    res.status(500).send(err.message)
  }
}

const update = async (req, res) => {
  try {
    const selectedUser = await services.update(req.params.id, req.body)
    if (selectedUser != null) {
      res.status(200).send(selectedUser);
    } else {
      res.send({ user: "User was not found" });
    }
  } catch (err) {
    res.status(500).send(err.message)
  }
}

const deleteOne = async (req, res) => {
  try {
    const selectedUser = await services.deleteOne(req.params.id)
    if (selectedUser != null) {
      res.status(200).send(selectedUser);
    } else {
      res.send({ user: "User was not found" });
    }
  } catch (err) {
    res.status(500).send(err.message)
  }
}

export default {
  getAll,
  getOne,
  create,
  update,
  deleteOne
} 