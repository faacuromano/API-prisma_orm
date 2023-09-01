import { Router } from 'express'
import userControllers from '../controllers/users.controllers.js'

const router = Router()

router
    .get("/users", userControllers.getAll)
    .get("/user/:id", userControllers.getOne)

export default router