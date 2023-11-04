import { prisma } from "../db.js";

const getAll = () => {
  try {
    const allProducts = prisma.product.findMany();
    return allProducts;
  } catch (err) {
    return err.message;
  }
};

const getOne = (_id) => {
  try {
    const productSelected = prisma.product.findUnique({
      where: {
        id: parseInt(_id),
      },
    });
    return productSelected;
  } catch (err) {
    return err.message;
  }
};

const create = (_name, _price, _stock, _cost, _category) => {
  try {
    const productCreated = prisma.product.create({
      data: {
        name: _name,
        price: parseInt(_price),
        stock: parseInt(_stock),
        cost: parseInt(_cost),
        category_id: parseInt(_category),
      },
    });
    return productCreated;
  } catch (err) {
    return err.message;
  }
};

const update = (_id, _name, _price, _stock, _cost, _category) => {
  try {
    const productUpdated = prisma.product.update({
      where: {
        id: parseInt(_id),
      },
      data: {
        name: _name,
        price: parseInt(_price),
        stock: parseInt(_stock),
        cost: parseInt(_cost),
        category_id: parseInt(_category),
      },
    });
    return productUpdated;
  } catch (err) {
    return err.message;
  }
};

const deleteOne = (_id) => {
  try {
    const productSelected = prisma.product.delete({
      where: {
        id: parseInt(_id),
      },
    });
    return productSelected;
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
