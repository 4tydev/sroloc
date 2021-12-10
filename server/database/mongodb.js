const mongoose = require("mongoose");

const mongoOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const dataBaseString = "mongodb+srv://admin:N4n0$h1p2016@devasolutionsweb.zn3pl.mongodb.net/SrolocAlpha?retryWrites=true&w=majority"

if(mongoose.connection.readyState === 0){
    mongoose.connect(dataBaseString,mongoOptions);
}

module.exports = mongoose;