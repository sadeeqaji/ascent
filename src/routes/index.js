const router = require("express").Router();

router.use("/asteroids", require("./asteroid.route"));

module.exports = router