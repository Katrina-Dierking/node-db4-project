
exports.seed =  async (knex) => {
    await knex("recipes").insert ([
      {
        name: 'Chocolate Chip Cookies', 
        steps: 'mix dry ingredients together in one bowl, melt butter and add to eggs in seperate bowl,beat until creamy, add to dry ingredients, roll in balls and place on cookie sheet, bake for 10 minutes on 425'
      },

      {
        name: 'Banana Sandwhich',
        steps: 'Spread Mayo on each slide of bread, place sliced bananas on one slice of bread, cover with the other slice'
      },

      {
        name: 'Orange Juice',
        steps: 'Squeeze fresh oranges into cup. Enjoy'
      }
    ]);
};
