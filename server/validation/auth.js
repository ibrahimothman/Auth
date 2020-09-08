const Joi = require('joi')


validateRegister = (req, res, next) => {
    const schema = Joi.object({
        username: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        email: Joi.string().email().required(),
    });

    const { value, error } = schema.validate(req.body);
    if (error) {
        res.status(400).json({
            errors: error.details[0].message,
        });
    }else {
        req.data = value;
        next();
    }
}


module.exports = {
    validateRegister,
}