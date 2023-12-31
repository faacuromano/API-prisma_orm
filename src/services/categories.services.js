import { prisma } from "../db.js";

const getAll = () => {
  try {
    const allCategories = prisma.category.findMany();
    return allCategories;
  } catch (err) {
    return err.message;
  }
};

const getOne = (_id) => {
  try {
    const selectedCategory = prisma.category.findFirst({
      where: {
        id: parseInt(_id),
      },
    });
    return selectedCategory;
  } catch (err) {
    return err.message;
  }
};

const create = (data) => {
  try {
    const newCategory = prisma.category.create({
      data: data,
    });
    return newCategory;
  } catch (err) {
    return err.message;
  }
};

const update = (_id, _data) => {
  try {
    const updatedCategory = prisma.category.update({
      where: {
        id: parseInt(_id),
      },
      data: data,
    });
    return updatedCategory;
  } catch (err) {
    return err.message;
  }
};
const deleteOne = (_id) => {
  try {
    const toDeleteCategory = prisma.category.delete({
      where: {
        id: parseInt(_id),
      },
    });
    return toDeleteCategory;
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
