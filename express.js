const express = require("express");
const cors = require("cors");

const port = 3000;

const app = express();
app.use(express.json())

app.use(cors());

app.get("/", (req, res) => {
    console.log("hola")
    return res.json({
        saludo: "hola"
    })
})
app.post("/suma", async (req, res) => {
    try {
        let suma
        const { filas, columnas } = await req.body
        
        suma = parseFloat(filas) + parseFloat(columnas)
        
        return res.json({
            suma
        })
    } catch (error) {
    console.log(error)
    }
})

app.listen(port, () => {
    console.log(`iniciado en el puerto ${port}`)
})