//OOO is very important with relationships
exports.up = async function(knex) {
  await knex.schema.createTable("recipes", (table) => { 
    table.increments("id")
    table.text("name").unique().notNullable()
    table.string("ingredients").notNullable()
    table.string("steps").notNullable()
  })

  await knex.schema.createTable("ingredients", (table) => { 
    table.increments("id")
    table.text("name").notNullable()
    table.float("quantity").notNullable()
    table.integer("recipes_id)")
        .notNullable()
        .references("id")
        .inTable("recipes")
    })

    await knex.schema.createTable("recipes_ingredients", (table) => { 
      table.integer("recipes_id")
        .notNullable()
        .references("id")
        .inTable("recipes")
      table.integer("ingredients_id")
      .notNullable()
      .references("id")
      .inTable("ingredients")
      table.primary(["recipes_id", "ingredients_id"])
    })

};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("recipes_ingredients")
  await knex.schema.dropTableIfExists("ingredients")
  await knex.schema.dropTableIfExists("recipes")
};
