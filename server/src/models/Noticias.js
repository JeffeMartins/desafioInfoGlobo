const mongoose = require('../database');

const NotifiasSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    conteudo: {
        type: String,
        required: true,
    },
    data_publicacao: {
        type: String,
        required: true,
    },
})

const Noticias = mongoose.model('desafioInfoGlobo', NotifiasSchema);

module.exports = Noticias;
