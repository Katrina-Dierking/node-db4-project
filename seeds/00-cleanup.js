
exports.seed = async (knex) => {
  await knex("ingredients").truncate()
  await knex("recipes").truncate()
};
