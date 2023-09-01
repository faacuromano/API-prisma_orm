import services from '../services/categories.services.js'

const getAll = async (req, res) => {
    try {
        const allCategories = await services.getAll()
        res.status(200).send({ status: "OK", users: allCategories })
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const getOne = async (req, res) => {
    try {
        const selectedCategory = await services.getOne(req.params.id)

        if (selectedCategory.length == 0) {
            res.status(204).send({ status: "OK", users: "User not found" });
        }
        else {
            res.status(200).send({ status: "OK", users: selectedCategory });
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export default {
    getAll,
    getOne
}