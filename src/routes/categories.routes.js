import { Router } from 'express'
import categoriesController from '../controllers/categories.controllers.js'

const router = Router()

router
    .get("/categories", categoriesController.getAll)
    
    .get("/categories/:id", categoriesController.getOne)

    .post("/categories", categoriesController.create)
    
    .put("/categories/:id", categoriesController.update)

    .delete("/categories:id", categoriesController.deleteOne)

export default router