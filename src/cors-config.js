const allowedList = ['http://localhost:5500'];

const corsOptionsDelegate = function (req, callback) {
    let corsOptions;

    if (allowedList.indexOf(req.header('Origin')) !== -1) {
        corsOptions = {origin: true}
    } else {
        corsOptions = {origin: false}
    }
    callback(null, corsOptions)
};

module.exports = {corsOptionsDelegate}