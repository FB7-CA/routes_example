const express = require("express")

const auth = express.Router()

auth.use((req, res, next) => {
    if (req.headers.ident === "muyseguro69") {
        next()
    } else {
        res.status(403).json({ msg: "No estas autorizado" })
    }
})

auth.get("/users", (req, res) => {
    res.json({
        users: [
            {
                name: "Marco",
                edad: 21
            },
            {
                name: "Nerio",
                edad: 27
            }
        ]
    })
})

auth.get("/posts", (req, res) => {
    res.json({
        users: [
            {
                title: "Como cuidar a tu gato",
                content: "bla blabla"
            },
            {
                title: "Como cuidar a tu perro",
                content: "bla blabla"
            }
        ]
    })
})

module.exports = auth
