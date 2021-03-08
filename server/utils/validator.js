const joi = require('joi');

const validator = 
{   
    register: joi.object().keys({
        name: joi.string().alphanum().min(3).max(15).required(),
        email: joi.string().email().required(),
        password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
    }),

    login: joi.object().keys({
        email: joi.string().email().required(),
        password: joi.required()
    }),

    profile: joi.object().keys({
        gender: joi.number().min(1).max(2),
        birthday: joi.date(),
        bio: joi.string()
    })
}

module.exports = validator;