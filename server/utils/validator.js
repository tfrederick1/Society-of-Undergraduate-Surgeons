const joi = require('joi');

const validator = 
{   
    register: joi.object().keys({
        name: joi.string().alphanum().min(3).max(15).required(),
        email: joi.string().email().required(),
        password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    }),

    login: joi.object().keys({
        email: joi.string().email().required(),
        password: joi.required()
    })
}

module.exports = validator;