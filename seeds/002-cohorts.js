
exports.seed = async function(knex, Promise) {
  // Deletes ALL existing entries
  await knex('cohorts').insert([
    { id: 1, name: 'WEBPT4', track_id: 2 },
  ])
};
