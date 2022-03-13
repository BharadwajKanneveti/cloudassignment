const uuid = require("uuid").v4

let users = [];

module.exports.getUsers = (req, res) => {

    res.send(users);
};

module.exports.createUser = (req, res) => {

    const user = req.body;
    users.push({ ...user, id: uuid() });
    res.send("User added Successfully");
};
module.exports.getUser = (req, res) => {
    const singleUser = users.filter((user) => user.id === req.params.id);
    res.send(singleUser);
};
module.exports.deleteUser = (req, res) => {
    users = users.filter((user) => user.id !== req.params.id);
    res.status(200).json({ message: "User deleted Successfully" })

};
module.exports.updateUser = (req, res) => {
    const user = users.find((user) => user.id === req.params.id)
    user.name = req.body.name;
    user.email = req.body.email;
    user.contact = req.body.contact;
    res.send("User updated Successfully");
};    
