import { prisma } from "../db.js";

const getAll = () => {
  try {
    const allUsers = prisma.user.findMany();
    return allUsers;
  } catch (err) {
    return err.message;
  }
};

const getOne = (_id) => {
  try {
    const selectedUser = prisma.user.findFirst({
      where: {
        id: parseInt(_id)
      },
    });
    return selectedUser;
  } catch (err) {
    return err.message;
  }
};

const create = (_data) => {
  try {
    const selectedUser = prisma.user.create({
      data: _data
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
        id: parseInt(_id)
      },
      data: _data
    });
    return selectedUser;
  } catch (err) {
    return err.message;
  }
};

const deleteOne = (_id) => {
  try {
    const selectedUser = prisma.user.delete({
      where: {
        id: parseInt(_id)
      }
    });
    return selectedUser;
  } catch (err) {
    return err.message;
  }
};

export default {
  getAll,
  getOne,
  create,
  update,
  deleteOne
};
