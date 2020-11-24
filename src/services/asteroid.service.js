const { fetch_data } = require("../utils/fetch");

const { NASA_API_KEY, url } = require("../config");
const {
  filter_dangeours_asteroid,
} = require("../utils/filterDangerousAsteroid");

const URL = `${url.ASTEROID_URL}${NASA_API_KEY}`;

class AsteroidService {
  async getAll() {
    let result = await fetch_data(URL);
    return result;
  }

  async getDangerousAsteroid({ x, y }) {
    let result = await fetch_data(URL);
    let data = await filter_dangeours_asteroid(result.near_earth_objects, x, y);
    return data;
  }
}

module.exports = new AsteroidService();
