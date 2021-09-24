const Noticias = require('../models/Noticias');

module.exports = {
    async index(req, resp) {

        try {
            const result = await Noticias.find();
            return resp.json(result);

        } catch (e) {
            return resp.status(400).send({error: 'Select failed'})
        }
    }
}