import { Router } from 'express'
import { prisma } from '../db.js'

const router = Router()

router
    .get("/products", async (req, res) => {
        const products = await prisma.product.findMany()
        res.send(products)
    })

    .get("/products/:id", async (req, res) => {
        const productSelected = await prisma.product.findFirst({
            where: {
                id: parseInt(req.params.id)
            },
            include: {
                category: true
            }
        })
        
        if (!productSelected) {
            return res.send({status: 404, message: "El producto no fue encontrado" })
        }
        return res.send(productSelected)
    })

    .delete("/products/:id", async (req, res) => {
        const productDeleted = await prisma.product.delete({
            where: { 
                id: parseInt(req.params.id)
            }
        })
        
        if (!productDeleted) {
            return res.send({status: 404, message: "El producto no fue encontrado" })
        }
        return res.json(productDeleted)
    })

    .put("/products/:id", async (req, res) => {
        const updateProduct = await prisma.product.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: req.body
        })
        res.json(updateProduct)
    })

    .post("/products", async (req, res) => {
        const newProduct = await prisma.product.create({
            data: req.body
        })
        res.json(newProduct)
    })

    

export default router