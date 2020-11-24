const router = require("express").Router();
const AsteroidCtrl = require("./../controllers/asteroid.controller");

router.get("/get-all",  AsteroidCtrl.getAll);
router.post("/get-dangerous",  AsteroidCtrl.getDangerousAsteroid);


module.exports = router