import { prisma } from "../db.js";

const getAll = () => {
    try {
        const allClients = prisma.client.findMany()
        return allClients;
    }
    catch (err) {
        return err.message;
    }
};

const getOne = (_id) => {
    try {
        const selectedClient = prisma.client.findFirst({
            where: {
                id: parseInt(_id)
            }
        })
        return selectedClient;
    }
    catch (err) {
        return err.message;
    }
};

const create = (_newclient) => {
    try {
        const newclient = prisma.client.create({
            data: {
                name: _newclient.name,
                deuda: parseInt(_newclient.deuda)
            }
        })
        console.log(_newclient)
        return newclient;
    }
    catch (err) {
        return err.message;
    }
};

const update = (_id,  _clientUpdated) => {
    try {
        const newclient = prisma.client.update({
            where: {
                id: parseInt(_id)
            },
            data: {
                name: _clientUpdated.name,
                deuda: parseInt(_clientUpdated.deuda)
            }
            
        })
        return newclient;
    }
    catch (err) {
        return err.message;
    }
};

const deleteOne = (_id) => {
    try {
        const deletedClient = prisma.client.delete({
            where: {
                id: parseInt(_id)
            }
        })
        return deletedClient;
    }
    catch (err) {
        return err.messag;
    }
};

export default {
    getAll,
    getOne,
    create,
    update,
    deleteOne,
}