import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import authRoute from "./routes/authRoute"
import tokenRoute from "./routes/tokenRoute"


dotenv.config()


const app = express()
const port = process.env.PORT || 3000

app.use(cors())


//routes
app.use('/api/oauth', authRoute)
app.use('/api/oauth', tokenRoute)


app.listen(port, () => {
    console.log("server up, listening on port " + port)
})