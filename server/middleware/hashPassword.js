const bcrypt = require('bcryptjs')

async function hashPassword(req, res, next) {
    console.log('hashing password....');
    // hashing password
    const salt = await bcrypt.genSalt(10);
    req.data.password = await bcrypt.hash(req.data.password, salt);
    next();
}

module.exports = hashPassword