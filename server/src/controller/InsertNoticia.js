const Noticias = require('../models/Noticias');

module.exports = {
    async index(req, resp) {

        try {
            const newNoticia = await Noticias.create(req.body)
            return resp.send(newNoticia);
        } catch (e) {
            return resp.status(400).send({error: 'Insert failed'})
        }

    }
}