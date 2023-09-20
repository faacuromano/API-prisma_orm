import { prisma } from "../db.js";

const getAll = () => {
    return new Promise((resolve, reject) => {
        try {
            const allClients = prisma.client.findMany()
            resolve(allClients);
        }
        catch (err) {
            reject(err.message);
        }
    });
};

const getOne = (_id) => {
    return new Promise((resolve, reject) => {
        try {
            const selectedClient = prisma.client.findFirst({
                where: {
                    id: parseInt(_id)
                }
            })
            resolve(selectedClient);
        }
        catch (err) {
            reject(err.message);
        }
    });
};

const create = (_newclient) => {
    return new Promise((resolve, reject) => {
        try {
            const newclient = prisma.client.create({
                data: {
                    name: _newclient.name,
                    deuda: parseInt(_newclient.deuda)
                }
            })
            console.log(_newclient)
            resolve(newclient);
        }
        catch (err) {
            reject(err.message);
        }
    });
};

const update = (_id,  _clientUpdated) => {
    return new Promise((resolve, reject) => {
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
            resolve(newclient);
        }
        catch (err) {
            reject(err.message);
        }
    });
};

const deleteOne = (_id) => {
    return new Promise((resolve, reject) => {
        try {
            const deletedClient = prisma.client.delete({
                where: {
                    id: parseInt(_id)
                }
            })
            resolve(deletedClient);
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