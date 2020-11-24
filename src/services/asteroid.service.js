const { fetchData } = require("../utils/fetch");

const { NASA_API_KEY, url } = require("../config");
const { filterDangeoursAsteroid } = require("../utils/filterDangerousAsteroid");

const URL = `${url.ASTEROID_URL}${NASA_API_KEY}`;



class AsteroidService {
  async getAll() {
    let result = await fetchData(URL);
    return result;
  }

  async getDangerousAsteroid({x, y}) {
    let result = await fetchData(URL);
    let data = await filterDangeoursAsteroid(result.near_earth_objects, x, y)
    return data;
  }
}

module.exports = new AsteroidService();
