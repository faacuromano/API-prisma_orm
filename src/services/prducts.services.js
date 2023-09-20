import { prisma } from "../db.js";

const getAll = () => {
    return new Promise((resolve, reject) => {
        try {
            const allProduct = prisma.product.findMany()
            resolve(allProduct)
        } catch (err) {
            reject(err.message)
        }
    })
}

const getOne = (_id) => {
    return new Promise((resolve, reject) => {
        try {
            const productSelected = prisma.product.findUnique({
                where: {
                    id: parseInt(_id)
                }
            })
            resolve(productSelected)
        } catch (err) {
            reject(err.message)
        }
    })
}

const create = (_name, _price, _stock, _cost, _category) => {
    return new Promise((resolve, reject) => {
        try {
            const productCreated = prisma.product.create({
                data: {
                    name: _name,
                    price: parseInt(_price),
                    stock: parseInt(_stock),
                    cost: parseInt(_cost),
                    category_id: parseInt(_category)
                } 
            })
            resolve(productCreated)
        } catch (err) {
            reject(err.message)
        }
    })
}

const update = (_id, _name, _price, _stock, _cost, _category) => {
    return new Promise((resolve, reject) => {
        try {
            const productUpdated = prisma.product.update({
                where: {
                    id: parseInt(_id)
                },
                data: {
                    name: _name,
                    price: parseInt(_price),
                    stock: parseInt(_stock),
                    cost: parseInt(_cost),
                    category_id: parseInt(_category)
                } 
            })

            resolve(productUpdated)
        } catch (err) {
            reject(err.message)
            console.log(err.message)
        }
    })
}

const deleteOne = (_id) => {
    return new Promise((resolve, reject) => {
        try {
            const productSelected = prisma.product.delete({
                where: {
                    id: parseInt(_id)
                }
            })
            resolve(productSelected)
        } catch (err) {
            reject(err.message)
        }
    })
}

export default {
    getAll,
    getOne,
    create,
    update,
    deleteOne
}