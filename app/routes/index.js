const router = require("express").Router()
const authorRoutes = require("./authors")
const apiRoutes = require("./api")

router.use("/freecodecamp/authors", authorRoutes)
router.use("/jsonplaceholder/api", apiRoutes)
router.route("/").get((req, res)=>res.sendFile(process.cwd() + "/public/index.html"))

module.exports = router