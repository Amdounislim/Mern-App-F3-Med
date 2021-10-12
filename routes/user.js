const express = require("express")
const router = express.Router()

const User = require("../models/user")


//@Api http://localhost:5000/api/users
//@desc Add New User
//@access public
router.post('/', (req, res) => {
    const newUser = new User({ ...req.body })
    newUser
        .save()
        .then(user => res.status(200).json({ msg: "successfuly added", user }))
        .catch(err => res.status(400).json(err))
})



module.exports = router