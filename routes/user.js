const express = require("express")
const router = express.Router()

const User = require("../models/user")


//@Api http://localhost:7000/api/users
//@desc Add New User
//@access public
router.post('/', (req, res) => {
    const newUser = new User({ ...req.body })
    newUser
        .save()
        .then(user => res.status(200).json({ msg: "successfuly added", user }))
        .catch(err => res.status(400).json(err))
})

//@Api http://localhost:7000/api/users
//@desc Get All Users
//@access public
router.get("/", (req, res) => {
    User.find()
        .then(users => res.status(200).json(users))
        .catch(err => console.log(err))
})

//@Api http://localhost:7000/api/users/id
//@desc Get User by id
//@access public
router.get("/:_id", (req, res)=>{
    let {_id} = req.params
    User.find({_id})
        .then(user=>res.send(user))
        .catch(err => console.log(err))
})

//@Api http://localhost:7000/api/users/id
//@desc Delete User by id
//@access public
router.delete("/:_id", (req, res)=>{
    let {_id} = req.params
    User.findByIdAndDelete({_id})
        .then(()=>res.send("User has been deleted"))
        .catch(err => console.log(err))
})

//@Api http://localhost:7000/api/users/id
//@desc Update User by id
//@access public
router.put("/:_id", (req, res)=>{
    let {_id} = req.params
    User.findByIdAndUpdate({_id}, {$set:{...req.body}})
    .then(()=>res.send("User has been updated"))
    .catch(err => console.log(err))
})


module.exports = router