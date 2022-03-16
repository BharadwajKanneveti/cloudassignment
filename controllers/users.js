const User = require("../models/index")

module.exports.getUsers = async (req, res) => {
    const users = await User.find({});
    res.send(users);
};

module.exports.createUser = async (req, res) => {
    const user = req.body;
    const newUser = new User(user);
    await newUser.save()
    res.send("User added Successfully");
};

module.exports.getUser = async (req, res) => {
    const { id } = req.params

    try {
        const user = await User.findOne({ _id: { $eq: id } });
        if (!user) throw "Their is no user with this ID."

        res.status(200).send(user);
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err })
    }
};

module.exports.deleteUser = async (req, res) => {
    const { id } = req.params
    await User.findOneAndDelete({ _id: { $eq: id } })
    res.status(200).json({ message: "User deleted Successfully" })
};

module.exports.updateUser = async (req, res) => {
    const { id } = req.params
    const user = req.body
    await User.findOneAndUpdate({ _id: { $eq: id } }, user)
    res.send("User updated Successfully");
};    
