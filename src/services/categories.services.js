import { prisma } from "../db.js";

const getAll = () => {
  try {
    const allUsers = prisma.category.findMany();
    return allUsers;
  } catch (err) {
    return err.message;
  }
};

const getOne = (_id) => {
  try {
    const selectedUser = prisma.category.findFirst({
      where: {
        id: parseInt(_id),
      },
    });
    return selectedUser;
  } catch (err) {
    return err.message;
  }
};

const create = (data) => {
  try {
    const selectedUser = prisma.category.create({
      data: data,
    });
    return selectedUser;
  } catch (err) {
    return err.message;
  }
};

const update = (_id, _data) => {
  try {
    const selectedUser = prisma.category.update({
      where: {
        id: parseInt(_id),
      },
      data: data,
    });
    return selectedUser;
  } catch (err) {
    return err.message;
  }
};
const deleteOne = (_id) => {
  try {
    const selectedUser = prisma.category.delete({
      where: {
        id: parseInt(_id),
      },
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
  deleteOne,
};
