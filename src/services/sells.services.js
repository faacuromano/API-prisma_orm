import { prisma } from "../db.js";

const getAll = () => {
  try {
    const allSells = prisma.sell.findMany({
      include: {
        sellconcept: true,
      },
    });
    return allSells;
  } catch (err) {
    console.log(err.message);
    return err.message;
  }
};

const getOne = (_id) => {
  try {
    const selectedSell = prisma.sell.findFirst({
      where: {
        id: parseInt(_id),
      },
      include: {
        sellconcept: true,
      },
    });
    return selectedSell;
  } catch (err) {
    return err.message;
  }
};

const create = async (sellData) => {
  try {
    const sellConcepts = [];
    let total = 0;

    for (const concept of sellData.sell_concepts) {
      const product = await prisma.product.findUnique({
        where: {
          id: concept.product_id,
        },
      });

      if (!product) {
        throw new Error(`Product with id ${concept.product_id} not found.`);
      }

      if (product.stock < concept.quantity) {
        throw new Error(
          `Insufficient stock for product with id ${concept.product_id}. Stock available: ${product.stock}`
        );
      }

      const unitPrice = product.price;
      const importValue = unitPrice * concept.quantity;

      sellConcepts.push({
        quantity: concept.quantity,
        unitPrice,
        import: importValue,
        product_id: concept.product_id,
      });

      total += importValue;

      await prisma.product.update({
        where: {
          id: concept.product_id,
        },
        data: {
          stock: {
            decrement: concept.quantity,
          },
        },
      });
    }

    const newSell = await prisma.sell.create({
      data: {
        total,
        estadoPago: sellData.estadoPago,
        tipoPago: sellData.tipoPago,
        client: {
          connect: {
            id: sellData.client_id,
          },
        },
        user: {
          connect: {
            id: sellData.user_id,
          },
        },
        sellconcept: {
          create: sellConcepts,
        },
      },
    });

    if (sellConcepts.length === 0) {
      throw new Error("SellConcepts must be defined for the sale.");
    }

    if (!newSell.estadoPago) {
      await prisma.client.update({
        where: {
          id: newSell.client_id,
        },
        data: {
          deuda: {
            increment: newSell.total,
          },
        },
      });
    }

    return newSell;
  } catch (error) {
    console.error("Error creating sell:", error.message);
    throw new Error("Error creating sell.");
  }
};

const update = (_id, _sellUpdated) => {
  try {
    const newsell = prisma.sell.update({
      where: {
        id: parseInt(_id),
      },
      data: _sellUpdated,
    });
    return newsell;
  } catch (err) {
    return err.message;
  }
};

const deleteOne = (_id) => {
  try {
    const deletedSell = prisma.sell.delete({
      where: {
        id: parseInt(_id),
      },
    });
    return deletedSell;
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
