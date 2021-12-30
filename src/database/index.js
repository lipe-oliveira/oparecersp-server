const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://lipe-oliveira:homemaranha1573594646@oparecer-cluster.hoqyf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
mongoose.Promise = global.Promise;

module.exports = mongoose;