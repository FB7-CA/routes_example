const express = require("express")
const app = express()

const auth = require("./routes/auth")

app.use(express.json())
app.use("/auth", auth)

app.post("/login", (req, res) => {
    if (req.body.email === "correo" && req.body.password === "1234") {
        // usuario mando info correcta
        res.json({ ident: "muyseguro69" })
    } else {
        // usuario no mandó la info correcta
        res.status(400).json({ err: "contraseña incorrecta" })
    }
})

app.listen(8080, () => {
    console.log("Server escuchando")
})
