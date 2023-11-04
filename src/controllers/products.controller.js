import services from '../services/products.services.js';

const getAll = async (req, res) => {
    try {
        const allProducts = await services.getAll()
        res.send(allProducts)
    }
    catch (err) {
        res.send(err.message)
    }
}

const getOne = async (req, res) => {
    try {
        const productSelected = await services.getOne(req.params.id)
        res.status(200).send(productSelected)
    }
    catch (err) {
        res.send(err.message)
    }
}

const getStock = async (req, res) => {
    try {
        const productSelected = await services.getOne(req.params.id)
        const stock = productSelected.stock
        return stock
    }
    catch (err) {
        return(err.message)
    }
}

const create = async (req, res) => {
    try {
        const productToCreate = await services
            .create(
                req.body.name,
                req.body.price,
                req.body.stock,
                req.body.cost,
                req.body.category
            )
        res.status(200).send(productToCreate)
    }
    catch (err) {
        res.send({ error: err.message })
    }
}

const update = async (req, res) => {
  try {
    const productToUpdate = await services
        .update(
            req.params.id, 
            req.body.name, 
            req.body.price, 
            req.body.stock, 
            req.body.cost, 
            req.body.category
        );

    if (productToUpdate) {
      res.status(200).send(productToUpdate);
    } else {
      res.status(404).send("Producto no encontrado");
    }
    
  } catch (err) {
    res.status(400).send(err.message);
  }
};


const deleteOne = async (req, res) => {
    try {
        const productToDelete = await services.deleteOne(req.params.id)
        if (!productToDelete) {
            res.status(204).send({error: "El producto no se encontro"});
        }
        else {
            res.status(200).send("Producto eliminado");
        }
    }
    catch (err) {
        res.send(err.message)
    }
}

export default {
    getAll,
    getOne,
    create,
    update,
    deleteOne
}