import services from '../services/categories.services.js'

const getAll = async (req, res) => {
    try {
        const allCategories = await services.getAll()
        res.status(200).send(allCategories)
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const getOne = async (req, res) => {
    try {
        const selectedCategory = await services.getOne(req.params.id)

        if (selectedCategory.length == 0) {
            res.status(204).send({error: "User not found"});
        }
        else {
            res.status(200).send(selectedCategory);
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const create = async (req, res) => {
    try {
        const selectedCategory = await services.create(req.body.data)

        res.status(200).send(selectedCategory);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const update = async (req, res) => {
    try {
        const updatedCategory = await services.update(req.params.id, req.body.data)

        res.status(200).send(updatedCategory);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const deleteOne = async (req, res) => {
    try {
        const updatedCategory = await services.deleteOne(req.params.id)

        res.status(200).send(updatedCategory);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export default {
    getAll,
    getOne,
    create,
    update,
    deleteOne
}