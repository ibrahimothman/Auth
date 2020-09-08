const router = require('express').Router()
const { validateRegister } = require('../validation/auth')
const hashPassword = require('../middleware/hashPassword')
const User = require('../model/user')

router.post('/signup', validateRegister, hashPassword, async (req, res) => {
    const { data } = req;

    // check if the email is aleady in database
    const exiestedEmail = await User.findOne({ email: data.email });
    if (exiestedEmail) return res.status(400).send('email is already existed');

    // save the user
    const user = new User(data)
    try {
        const newUser = await user.save()
        res.send({user_id: newUser._id})
    } catch (error) {
        console.error(error);
    }


})

module.exports = router;