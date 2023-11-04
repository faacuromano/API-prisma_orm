import { prisma } from "../db.js";

const getAll = () => {
  try {
    const allProveedores = prisma.proveedores.findMany();
    return allProveedores;
  } catch (err) {
    return err.message;
  }
};

const getOne = (_id) => {
  try {
    const selectedProveedor = prisma.proveedores.findFirst({
      where: {
        id: parseInt(_id),
      },
    });
    return selectedProveedor;
  } catch (err) {
    return err.message;
  }
};

const create = (data) => {
  try {
    const selectedProveedor = prisma.proveedores.create({
      data: data,
    });
    return selectedProveedor;
  } catch (err) {
    return err.message;
  }
};

const update = (_id, _data) => {
  try {
    const selectedProveedor = prisma.proveedores.update({
      where: {
        id: parseInt(_id),
      },
      data: _data,
    });
    return selectedProveedor;
  } catch (err) {
    return err.message;
  }
};
const deleteOne = (_id) => {
  try {
    const selectedProveedor = prisma.proveedores.delete({
      where: {
        id: parseInt(_id),
      },
    });
    return selectedProveedor;
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
