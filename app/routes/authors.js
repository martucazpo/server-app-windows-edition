const fs = require("fs")
const router = require("express").Router()
let authors = require("../public/data/authors.json")
const fotos = process.cwd() + "/public/images"
const pdfs = process.cwd() + "/public/pdfs"

router.route("/").get((req, res) => {
    res.json(authors)
})

fs.readdir(fotos, (err, files) => {
    files.forEach(img => router.route(`/images/${img}`).get((req, res) => res.sendFile(process.cwd() + `/public/images/${img}`)));
});

fs.readdir(pdfs, (err, files) => {
    files.forEach(pdf => router.route(`/pdfs/${pdf}`).get((req, res) => res.sendFile(process.cwd() + `/public/pdfs/${pdf}`)));
});

// router.route("/pdfs/Quincy-Larson-freeCodeCamp.org.pdf").get((req, res) => {
//     res.sendFile(process.cwd() + "/public/pdfs/Quincy Larson - freeCodeCamp.org.pdf")
// })

module.exports = router