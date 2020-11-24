const filter_dangeours_asteroid = (array, x, y) => {
  const keys = Object.keys(array);

  //the api return list of asteroid from start_date and end_date

  let start_date_data = array[keys[0]];
  let end_date_data = array[keys[1]];

  //merge the the start_date_date and end_date_date together to get total asteroids from start date to end date
  const data = [...start_date_data, ...end_date_data];

  let dangerous_asteroids = [];
  let total_relative_velocity = 0;

  for (let i = 0; i < data.length; i++) {
    const { id, name, estimated_diameter, close_approach_data } = data[i];

    //destructure some value from currentValue data[i]
    const {
      relative_velocity,
      miss_distance,
      close_approach_date_full,
    } = close_approach_data[0];

    //Adding dangerous asteroid to the dangerous asteroids list
    if (miss_distance.kilometers < x && estimated_diameter.kilometers >= y) {
      dangerous_asteroids.push({
        id,
        name,
        miss_distance: miss_distance.kilometers,
        relative_velocity: relative_velocity.kilometers_per_hour,
        close_approach_date: close_approach_date_full,
      });

      total_relative_velocity += Number(relative_velocity.kilometers_per_hour);
    }
  }

  //sort the dangerous asteroid by close_approach_date and splice the last 20
  dangerous_asteroids = dangerous_asteroids
    .sort(
      (a, b) =>
        new Date(b.close_approach_date) - new Date(a.close_approach_date)
    )
    .slice(1, 20);

  //return dangerous asteroid and total relative velocity of the 20 last dangerous asteroid
  return {
    dangerous_asteroids,
    total_relative_velocity,
  };
};

module.exports = {
  filter_dangeours_asteroid,
};
