const mongoose = require('mongoose');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};
const mongoUrl="mongodb://localhost:27017/TestDB";

const connect = mongoose.connect(mongoUrl, options).then((success) => {
        console.log("=> Successfully connection to database");
    }).catch((error) => {
         console.log("=> Connect with error");
    });

module.exports = connect;