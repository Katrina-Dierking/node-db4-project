//OOO is very important with relationships
exports.up = async function(knex) {
  await knex.schema.createTable("recipes", (table) => { 
    table.increments()
    table.text("name").unique().notNullable()
    table.string("steps").notNullable()
  })

  await knex.schema.createTable("ingredients", (table) => { 
    table.increments()
    table.text("name").unique().notNullable()
    table.float("quantity").notNullable()
    table.integer("recipes_id").notNullable().references("id")
    })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("ingredients")
  await knex.schema.dropTableIfExists("recipes")
};
