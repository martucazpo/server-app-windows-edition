const router = require("express").Router()
const albums = require("../public/data/albums.json")
const comments = require("../public/data/comments.json")
const posts = require("../public/data/posts.json")
const todos = require("../public/data/todos.json")
const users = require("../public/data/users.json")

router.route("/albums").get((req, res) => res.json(albums))
router.route("/comments").get((req, res) => res.json(comments))
router.route("/posts").get((req, res) => res.json(posts))
router.route("/todos").get((req, res) => res.json(todos))
router.route("/users").get((req, res) => res.json(users))

module.exports = router