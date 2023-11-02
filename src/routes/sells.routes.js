import { Router } from 'express'
import sellControllers from '../controllers/sells.controllers.js'

const router = Router()

router
    .get("/sell", sellControllers.getAll)

    .get("/sell/today", sellControllers.getCajaHoy)

    .get("/sell/:id", sellControllers.getOne)
    
    .post("/sell", sellControllers.create)
    
    .put("/sell/:id", sellControllers.update)
        
    .delete("/sell/:id", sellControllers.deleteOne)

export default router