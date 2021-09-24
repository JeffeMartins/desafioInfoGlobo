const jwt = require('jsonwebtoken');
const authConfig = require('./../config/auth.json');

module.exports = {
    async index(req, resp) {

        try {
            if (req.body.user == authConfig.user && req.body.password == authConfig.password) {
                const token = jwt.sign({user: req.body.user, password: req.body.password}, authConfig.secret, {
                    expiresIn: 86400,
                })

                return resp.json({createToken: 'ok', token: token})
            } else {
                return resp.status(400).send({error: 'fails authentication'})
            }


        } catch (e) {
            return resp.status(400).send({error: 'web token failed'})
        }
    }
}