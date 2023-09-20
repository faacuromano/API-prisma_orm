import { prisma } from "../db.js";

const getAll = () => {
    return new Promise((resolve, reject) => {
        try {
            const allSells = prisma.sell.findMany(
                {
                    include: {
                        sell_concept: true
                    }
                }
            )
            resolve(allSells);
        }
        catch (err) {
            reject(err.message);
        }
    });
};

const getOne = (_id) => {
    return new Promise((resolve, reject) => {
        try {
            const selectedSell = prisma.sell.findFirst({
                where: {
                    id: parseInt(_id)
                },
                include: {
                    sell_concept: true
                }
            })
            resolve(selectedSell);
        }
        catch (err) {
            reject(err.message);
        }
    });
};

const create = (sellData) => {
    return new Promise(async (resolve, reject) => {
      try {
        const sellConcepts = [];
        let total = 0;
  
        for (const concept of sellData.sell_concepts) {
          const product = await prisma.product.findUnique({
            where: {
              id: concept.product_id
            }
          });
  
          if (!product) {
            reject(new Error(`Product with id ${concept.product_id} not found.`));
            return;
          }
  
          if (product.stock < concept.quantity) {
            reject(new Error(`Insufficient stock for product with id ${concept.product_id}. Stock available: ${product.stock}`));
            return;
          }
  
          const unitPrice = product.price;
          const importValue = unitPrice * concept.quantity;
  
          sellConcepts.push({
            quantity: concept.quantity,
            unitPrice,
            import: importValue,
            product_id: concept.product_id
          });
  
          total += importValue;
  
          await prisma.product.update({
            where: {
              id: concept.product_id
            },
            data: {
              stock: {
                decrement: concept.quantity
              }
            }
          });
        }
  

        const newSell = await prisma.sell.create({
          data: {
            total,
            estadoPago: sellData.estadoPago,
            tipoPago: sellData.tipoPago,
            client: {
              connect: {
                id: sellData.client_id
              }
            },
            user: {
              connect: {
                id: sellData.user_id
              }
            },
            sell_concept: {
              create: sellConcepts
            }
          }
        });
        
        if (newSell.estadoPago === false) {

        await prisma.client.update({
          where: {
            id: newSell.client_id
          },
          data: {
            deuda: {
              increment: newSell.total
            }
          }
        });
          
      }

        resolve(newSell);
      } catch (error) {
        console.error('Error creating sell:', error.message);
        reject(new Error('Error creating sell.'));
      }
    });
  };
  

const update = (_id,  _sellUpdated) => {
    return new Promise((resolve, reject) => {
        try {
            const newsell = prisma.sell.update({
                where: {
                    id: parseInt(_id)
                },
                data: _sellUpdated
                
            })
            resolve(newsell);
        }
        catch (err) {
            reject(err.message);
        }
    });
};

const deleteOne = (_id) => {
    return new Promise((resolve, reject) => {
        try {
            const deletedSell = prisma.sell.delete({
                where: {
                    id: parseInt(_id)
                }
            })
            resolve(deletedSell);
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