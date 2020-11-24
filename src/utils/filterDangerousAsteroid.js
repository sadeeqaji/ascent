const filterDangeoursAsteroid = (array, x, y) => {
  const keys = Object.keys(array);

  //the api return list of asteroid from star
  let start_date_data = array[keys[0]];
  let end_date_data = array[keys[1]];

  const data = [...start_date_data, ...end_date_data];
  let dangerous_asteroids = [];
  let total_relative_velocity = 0

  for (let i = 0; i < data.length; i++) {
    const { id, name, estimated_diameter, close_approach_data } = data[i];

    const {
      relative_velocity,
      miss_distance,
      close_approach_date_full,
    } = close_approach_data[0];

    //Adding dangerous asteroid to the dangerous asteroid list
    if (miss_distance.kilometers < x && estimated_diameter.kilometers >= y) {
      dangerous_asteroids.push({
        id,
        name,
        miss_distance: miss_distance.kilometers,
        relative_velocity: relative_velocity.kilometers_per_hour,
        close_approach_date: close_approach_date_full,
      });
      console.log(Number(relative_velocity.kilometers_per_hour))
      total_relative_velocity += Number(relative_velocity.kilometers_per_hour)
    }
  }

  //sort the dangerous asteroid by close_approach_date and splice the last 20
  dangerous_asteroids = dangerous_asteroids
    .sort(
      (a, b) =>
        new Date(b.close_approach_date) - new Date(a.close_approach_date)
    )
    .slice(1, 20);

  // const total_relative_velocity = dangerous_asteroids.reduce(
  //   (accumulator, currentValue) => {
  //     console.log(accumulator, "Accum", currentValue, "=====");
  //     return Number(accumulator.relative_velocity) + Number(currentValue.relative_velocity);
  //   }
  // );

  return {
    dangerous_asteroids,
    total_relative_velocity,
  };
};

module.exports = {
  filterDangeoursAsteroid,
};
