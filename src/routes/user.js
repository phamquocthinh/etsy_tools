import express from "express"
let user = express.Router()

let sess
const account = {
    name: "admin",
    password: "admin@123456"
}

user.route("/").get((req, res) => {
    res.render("index", { message: "" })
})

user.route("/login")
    .get((req, res) => {
        res.render("index", { message: "" })
    })
    .post((req, res) => {
        sess = req.session
        if (req.body.user_name == null || req.body.password == null) {
            res.render("index", {
                message: "Required Params Are Missing"
            })
        }
        if (req.body.user_name === account.name && req.body.password === account.password) {
            sess.USER = req.body.user_name
            res.redirect("/product")
        } else {
            res.render("index", {
                message: "No User Found"
            })
        }
    })

user.route("/logout").get(async (req, res) => {
    sess = req.session
    sess.USER = null
    res.redirect("/")
})

module.exports = user
