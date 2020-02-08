
exports.seed = async (knex) => {
  await knex("ingredients").insert ([
    {
      name: 'chocolate chips',
      quantity: '1 bag',
      recipes_id: 1
    },

    {
      name: 'flour',
      quantity: '1 cup',
      recipes_id: 1
    },

    {
      name: 'sugar',
      quantity: '1 cup',
      recipes_id: 1
    },

    {
      name: 'eggs',
      quantity: '2',
      recipes_id: 1
    },

    {
      name: 'butter',
      quantity: '2 sticks',
      recipes_id: 1
    },

    {
      name: 'banana',
      quantity: '1 large',
      recipes_id: 2
    },
    {
      name: 'Dukes Mayo',
      quantity: '1 Tbsp',
      recipes_id: 2
    },

    {
      name: 'white bread',
      quantity: '2 slices',
      recipes_id: 2
    },

    {
      name: 'orange',
      quantity: '3 slarge',
      recipes_id: 3
    },

  ])
 
};
