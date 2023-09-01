import { Router } from 'express'
import categoriesController from '../controllers/categories.controllers.js'

const router = Router()

router
    .get("/categories", categoriesController.getAll)
    
    .get("/categories/:id", categoriesController.getOne)

    .post("/categories", async (req, res) => {
        const newProduct = await prisma.category.create({
            data: req.body
        })
        res.json(newProduct)
    })

export default router