const express = require("express");
require("./src/db/conn")
const cors = require("cors")
const router = require("./src/routers/men")

const app = express()
const port = process.env.PORT || 3000;
app.use(
    cors({
        origin:[process.env.FRONTEND_URI],
        method:["GET","POST","PUT","DELETE"],
        credentials:true,
    })
)

app.use(express.json())

app.use(router)
app.listen(port,()=>{
    console.log(`connection is live at port no, ${port}`)
})