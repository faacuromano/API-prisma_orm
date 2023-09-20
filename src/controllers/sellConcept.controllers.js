import services from '../services/sellConcept.services.js'

const getAll = async (req, res) => {
    try {
        const allSellConcepts = await services.getAll()
        res.status(200).send(allSellConcepts)
    }
    catch (err) {
        res.status(500).json(err.message);
    }
}

const getOne = async (req, res) => {
    try {
        const selectedSellConcept = await services.getOne(req.params.id)

        if (selectedSellConcept === null) {
            res.send("Venta not found");
        }
        else {
            res.status(200).send(selectedSellConcept);
        }
    }
    catch (err) {
        res.status(500).json(err.message);
    }
}

const create = async (req, res) => {
    try {
        const newSellConcept = await services.create(req.body)

        if (!newSellConcept) {
            res.status(206).send("Error en el JSON de venta");
        }
        else {
            res.status(200).send(newSellConcept);
        }
    }
    catch (err) {
        res.status(500).json(err.message);
    }
}

const update = async (req, res) => {
    try {
        const updatedSellConcept = await services.update(req.params.id, req.body)

        if (!updatedSellConcept) {
            res.status(206).send("Error en el JSON de venta");
        }
        else {
            res.status(200).send(updatedSellConcept);
        }
    }
    catch (err) {
        res.status(500).json(err.message);
    }
}

const deleteOne = async (req, res) => {
    try {
        const deletedSellConcept = await services.deleteOne(req.params.id)

        if (!deletedSellConcept) {
            res.status(204).send("La venta no se encontro");
        }
        else {
            res.status(200).send("Venta eliminada");
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