const express = require("express")
const app = express()
const cors = require("cors")
const routes = require("./routes")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static( __dirname + "/public"))
app.set("json spaces", 2)
app.use(routes)

app.listen(8181, ()=>console.log("Tiny ears are listening on port 8181..."))