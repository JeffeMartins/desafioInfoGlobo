const mongoose = require('../database');

const NotifiasSchema = new mongoose.Schema({
    titulo: {
        type: String,
        require: true,
    },
    conteudo: {
        type: String,
        require: true,
    },
    data_publicacao: {
        type: String,
        require: true,
    },
})

const Noticias = mongoose.model('desafioInfoGlobo', NotifiasSchema);

module.exports = Noticias;