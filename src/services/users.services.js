import { prisma } from '../db.js'

const getAll = () => {
    return new Promise((resolve, reject) => {
        try {
            const allUsers = prisma.user.findMany();
            resolve(allUsers);
        }
        catch (err) {
            reject(err.message);
        }
    });
  };
  

const getOne = (_id) => {
    return new Promise((resolve, reject) => {
        try {
            const selectedUser = prisma.user.findFirst({
                where: {
                    id: parseInt(_id)
                }
            })
            resolve(selectedUser);
        }
        catch (err) {
            reject(err.message);
        }
    });
  };
  
export default {
    getAll,
    getOne
}