// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql:///game_collection'
  },
  
  production: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}?ssl=true`
  }
};
