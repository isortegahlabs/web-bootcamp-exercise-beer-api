
module.exports = {
  ddbb: {
    url: process.env.DB_URL || 'mongodb://localhost:27017',
    dbName: 'beerapi',
    type: 'mongodb',
  },
};