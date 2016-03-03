module.exports = {
  db: process.env.MONGODB || 'mongodb://localhost/react-dev-webkit',

  session: process.env.SESSION_SECRET || 'Your session secret goes here'
};
