import { prisma } from "../db.js";

const getAll = () => {
        try {
            const allSellConcepts = prisma.sellConcept.findMany()
            resolve(allSellConcepts);
        }
        catch (err) {
            reject(err.message);
        }
};

const getOne = (_id) => {
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
};

const create = (_newsellConcept) => {
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
};

const update = (_id,  _sellConceptUpdated) => {
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
};

const deleteOne = (_id) => {
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
};

export default {
    getAll,
    getOne,
    create,
    update,
    deleteOne,
}