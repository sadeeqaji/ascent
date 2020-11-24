const AsteroidServ = require("./../services/asteroid.service");
const response = require("./../utils/response");

class AsteroidController {
  async getAll(req, res) {
    const result = await AsteroidServ.getAll();
    res.status(200).send(response("All Asteroid", result));
  }

  async getDangerousAsteroid(req, res) {
    const result = await AsteroidServ.getDangerousAsteroid(req.body);
    res.status(200).send(response("Dangerous asteroid", result));
  }
}

module.exports = new AsteroidController();
