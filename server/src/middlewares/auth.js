const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = (req, resp, next) => {
    const token = req.headers.authorization;

    if(!token) return resp.status(401).send({error: 'token not headers'})

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) return resp.status(401).send({error: 'token invalid'})
        next();
    })
}