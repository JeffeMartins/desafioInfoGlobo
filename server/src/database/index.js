const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${process.env.USER_MONGODB}:${process.env.PASSWORD_MONGODB}@${process.env.CLUSTER}.q3vzx.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.Promise = global.Promise;

module.exports = mongoose;