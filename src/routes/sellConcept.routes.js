import { Router } from 'express'
import sellConceptController from '../controllers/sellConcept.controllers.js'

const router = Router()

router
    .get("/concept", sellConceptController.getAll)

    .get("/concept/:id", sellConceptController.getOne)
    
    .post("/concept", sellConceptController.create)
    
    .put("/concept/:id", sellConceptController.update)
        
    .delete("/concept/:id", sellConceptController.deleteOne)
    

export default router