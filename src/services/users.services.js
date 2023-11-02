import { prisma } from "../db.js";

const getAll = () => {
  try {
    const allUsers = prisma.user.findMany();
    resolve(allUsers);
  } catch (err) {
    reject(err.message);
  }
};

const getOne = (_id) => {
  try {
    const selectedUser = prisma.user.findFirst({
      where: {
        id: parseInt(_id),
      },
    });
    resolve(selectedUser);
  } catch (err) {
    reject(err.message);
  }
};

const create = (_data) => {
  try {
    const selectedUser = prisma.user.create({
      data: _data,
    });
    return selectedUser
  } catch (err) {
    return err.message
  }
};

const update = (_id, _data) => {
  try {
    const selectedUser = prisma.user.update({
      where: {
        id: parseInt(_id),
      },
      data: _data
    });
    resolve(selectedUser);
  } catch (err) {
    reject(err.message);
  }
};

const deleteOne = (_id) => {
  try {
    const selectedUser = prisma.user.delete({
      where: {
        id: parseInt(_id),
      },
    });
    resolve(selectedUser);
  } catch (err) {
    reject(err.message);
  }
};

export default {
  getAll,
  getOne,
  create,
  update,
  deleteOne
};
