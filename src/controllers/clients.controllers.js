import services from '../services/clients.services.js'

const getAll = async (req, res) => {
    try {
        const allClients = await services.getAll()
        res.status(200).send(allClients)
    }
    catch (err) {
        res.status(500).json(err.message);
    }
}

const getOne = async (req, res) => {
    try {
        const selectedClient = await services.getOne(req.params.id)

        if (selectedClient === null) {
            res.send("User not found");
        }
        else {
            res.status(200).send(selectedClient);
        }
    }
    catch (err) {
        res.status(500).json(err.message);
    }
}

const create = async (req, res) => {
    try {
        const newClient = await services.create(req.body)

        if (!newClient) {
            res.status(206).send("Error en el JSON de cliente");
        }
        else {
            res.status(200).send(newClient);
        }
    }
    catch (err) {
        res.status(500).json(err.message);
    }
}

const update = async (req, res) => {
    try {
        const updatedClient = await services.update(req.params.id, req.body)

        if (!updatedClient) {
            res.status(206).send("Error en el JSON de cliente");
        }
        else {
            res.status(200).send(updatedClient);
        }
    }
    catch (err) {
        res.status(500).json(err.message);
    }
}

const deleteOne = async (req, res) => {
    try {
        const deletedClient = await services.deleteOne(req.params.id)

        if (!deletedClient) {
            res.status(204).send({error: "El cliente no se encontro"});
        }
        else {
            res.status(200).send("Cliente eliminado");
        }
    }
    catch (err) {
        res.status(500).json(err.message);
    }
}

export default {
    getAll,
    getOne,
    create,
    update,
    deleteOne,
}