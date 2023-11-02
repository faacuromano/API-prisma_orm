import { Router } from 'express'
import userControllers from '../controllers/users.controllers.js'

const router = Router()

router
    .get("/users", userControllers.getAll)
    
    .get("/user/:id", userControllers.getOne)

    .post("/user", userControllers.create)

    .put("/user/:id", userControllers.update)

    .delete("/user/:id", userControllers.deleteOne)

export default router