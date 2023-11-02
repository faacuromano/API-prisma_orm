import { prisma } from "../db.js";

const getAll = () => {
  try {
    const allSellConcepts = prisma.sellconcept.findMany();
    return allSellConcepts;
  } catch (err) {
    return err.message;
  }
};

const getOne = (_id) => {
  try {
    const selectedSellConcept = prisma.sellconcept.findFirst({
      where: {
        id: parseInt(_id),
      },
    });
    return selectedSellConcept;
  } catch (err) {
    return err.message;
  }
};

const create = (_newsellConcept) => {
  try {
    const newsellConcept = prisma.sellconcept.create({
      data: _newsellConcept,
    });
    console.log(newsellConcept);
    return newsellConcept;
  } catch (err) {
    return err.message;
  }
};

const update = (_id, _sellConceptUpdated) => {
  try {
    const newSellConcept = prisma.sellconcept.update({
      where: {
        id: parseInt(_id),
      },
      data: _sellConceptUpdated,
    });
    return newSellConcept;
  } catch (err) {
    return err.message;
  }
};

const deleteOne = (_id) => {
  try {
    const deletedSellConcept = prisma.sellconcept.delete({
      where: {
        id: parseInt(_id),
      },
    });
    return deletedSellConcept;
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
