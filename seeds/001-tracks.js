
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tracks').insert([
    { id: 1, name: 'CS' },
    { id: 2, name: 'Full-stack web-dev' },
    { id: 3, name: 'iOS' }
  ])
};
