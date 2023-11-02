import services from '../services/sells.services.js'

const getAll = async (req, res) => {
    try {
        const allSells = await services.getAll()
        res.status(200).send(allSells)
    }
    catch (err) {
        res.status(500).json(err.message);
    }
}

const getOne = async (req, res) => {
    try {
        const selectedSell = await services.getOne(req.params.id)

        if (selectedSell === null) {
            res.send("Venta not found");
        }
        else {
            res.status(200).send(selectedSell);
        }
    }
    catch (err) {
        res.status(500).json(err.message);
    }
}

const getCajaHoy = async (req, res) => {
    try {
        const selectedSell = await services.getCajaHoy()

        if (selectedSell === null) {
            res.status(500).send("Problemas a obtener las ventas de la fecha");
        }
        else {
            res.status(200).send(selectedSell);
        }
    }
    catch (err) {
        res.status(500).json(err.message);
    }
}

const create = async (req, res) => {
    try {
        const newSell = await services.create(req.body)

        if (!newSell) {
            res.status(206).send("Error en el JSON de venta");
        }
        else {
            res.status(200).send(newSell);
        }
    }
    catch (err) {
        console.log(err.message);
        res.status(500).json(err.message);
    }
}

const update = async (req, res) => {
    try {
        const updatedSell = await services.update(req.params.id, req.body)

        if (!updatedSell) {
            res.status(206).send("Error en el JSON de venta");
        }
        else {
            res.status(200).send(updatedSell);
        }
    }
    catch (err) {
        res.status(500).json(err.message);
    }
}

const deleteOne = async (req, res) => {
    try {
        const deletedSell = await services.deleteOne(req.params.id)

        if (!deletedSell) {
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
    getCajaHoy,
    getOne,
    create,
    update,
    deleteOne,
}