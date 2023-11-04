import { Router } from 'express'
import proveedoresController from '../controllers/proveedores.controllers.js'

const router = Router()

router
    .get("/proveedores", proveedoresController.getAll)

    .get("/proveedores/:id", proveedoresController.getOne)
    
    .post("/proveedores", proveedoresController.create)

    .delete("/proveedores/:id", proveedoresController.deleteOne)

    .put("/proveedores/:id", proveedoresController.update)

export default router