import { Router } from 'express'
import clientControllers from '../controllers/clients.controllers.js'

const router = Router()

router
    .get("/client", clientControllers.getAll)
    
    .get("/client/:id", clientControllers.getOne)

    .post("/client/", clientControllers.create)

    .put("/client/:id", clientControllers.update)

    .delete("/client/:id", clientControllers.deleteOne)

export default router