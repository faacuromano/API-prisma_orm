import services from '../services/proveedores.services.js'

const getAll = async (req, res) => {
    try {
        const allProveedores = await services.getAll()
        res.status(200).send(allProveedores)
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const getOne = async (req, res) => {
    try {
        const selectedProveedor = await services.getOne(req.params.id)

        if (selectedProveedor.length == 0) {
            res.status(204).send({error: "User not found"});
        }
        else {
            res.status(200).send(selectedProveedor);
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const create = async (req, res) => {
    try {
        const selectedProveedor = await services.create(req.body)

        res.status(200).send(selectedProveedor);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const update = async (req, res) => {
    try {
        const updatedProveedor = await services.update(req.params.id, req.body)

        res.status(200).send(updatedProveedor);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const deleteOne = async (req, res) => {
    try {
        const updatedProveedor = await services.deleteOne(req.params.id)

        res.status(200).send(updatedProveedor);
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