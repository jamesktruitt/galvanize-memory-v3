// This is Marlowe's style. Refactor (function programming).
// Difference between process.env.NODE_ENV and process.env.DATABASE_URL (from knexfile.js)
const CONFIG = require('./knexfile')[process.env.NODE_ENV || 'development'];

module.exports = require('knex')(CONFIG);

