import express from 'express'
import cors from 'cors'
import {formRouter} from "./form/form-router.js";

const app = express()

export const corsOptions = {
    //origin: 'http://localhost:8080'
    origin: 'https://mariyan23.github.io/itprofit-test-task'
}

app.use(cors(corsOptions))
app.use(express.json())

app.use('/form', formRouter)

app.get("/api/ping", (req, res) => {
    res.statusCode = 200
    res.send({
        status: "success",
        message: "Server is ready",
    })
})

const port = process.env.PORT || 9090

const startApp = async ()=> {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}

await startApp()