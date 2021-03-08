const { required } = require("joi");

const jwt = require('jsonwebtoken');
const config = require('config');

getIdFromToken = async (ctx, next) => {
    let token = ctx.header.authorization;
        console.log(token);
        token = token.replace(/^Bearer\s+/, "");
        let payload = jwt.verify(token, config.get('jwtSecret'));
        let id = payload.user.id;
        return id;
}

module.exports = getIdFromToken;