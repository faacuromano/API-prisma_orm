import { prisma } from "../db.js";

const getAll = () => {
    return new Promise((resolve, reject) => {
        try {
            const allSellConcepts = prisma.sellConcept.findMany()
            resolve(allSellConcepts);
        }
        catch (err) {
            reject(err.message);
        }
    });
};

const getOne = (_id) => {
    return new Promise((resolve, reject) => {
        try {
            const selectedSellConcept = prisma.sellConcept.findFirst({
                where: {
                    id: parseInt(_id)
                }
            })
            resolve(selectedSellConcept);
        }
        catch (err) {
            reject(err.message);
        }
    });
};

const create = (_newsellConcept) => {
    return new Promise((resolve, reject) => {
        try {
            const newsellConcept = prisma.sellConcept.create({
                data: _newsellConcept
            })
            console.log(newsellConcept)
            resolve(newsellConcept);
        }
        catch (err) {
            reject(err.message);
        }
    });
};

const update = (_id,  _sellConceptUpdated) => {
    return new Promise((resolve, reject) => {
        try {
            const newSellConcept = prisma.sellConcept.update({
                where: {
                    id: parseInt(_id)
                },
                data: _sellConceptUpdated
                
            })
            resolve(newSellConcept);
        }
        catch (err) {
            reject(err.message);
        }
    });
};

const deleteOne = (_id) => {
    return new Promise((resolve, reject) => {
        try {
            const deletedSellConcept = prisma.sellConcept.delete({
                where: {
                    id: parseInt(_id)
                }
            })
            resolve(deletedSellConcept);
        }
        catch (err) {
            reject(err.message);
        }
    });
};

export default {
    getAll,
    getOne,
    create,
    update,
    deleteOne,
}