const users = require("./db.json");

module.exports = {
    login: (req, res) => {
        const {username, password} = req.body;
        let idx = users.findIndex((user) => user.username === username);

        if(idx < 0){
            res.status(404).send("user not found check your username or sign up")
        }else if(users[idx].password === password){
            res.status(200).send("You are now logged in")
        }else{
            res.status(401).send("incorrect password, try again.")
        }
    }
}