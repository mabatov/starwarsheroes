export default {
  get() {
    return fetch("https://swapi.co/api/people")
      .then(response => response.json())
      .then(data => {
        return data.results;
      });
  }
};