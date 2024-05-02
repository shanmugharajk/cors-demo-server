const allowedList = ['http://localhost:5000'];

const corsOptionsDelegate = function (req, callback) {
  let corsOptions;

  if (allowedList.indexOf(req.header('Origin')) !== -1) {
    corsOptions = {origin: true}
  } else {
    corsOptions = {origin: false}
  }
  callback(null, corsOptions)
};

const corsAllowAllOptionsDelegate = function (req, callback) {
  callback(null, {origin: true})
};

module.exports = {corsOptionsDelegate, corsAllowAllOptionsDelegate}