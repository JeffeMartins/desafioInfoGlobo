const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://admin:admin@Rocketseat.q3vzx.mongodb.net/infoGlobo?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.Promise = global.Promise;

module.exports = mongoose;