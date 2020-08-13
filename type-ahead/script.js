const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

const prom = fetch(endpoint); //return a promise object

prom.then(blob => blob.json())   // on a promise object you have to call .then -> will also return a promise data
  .then(data => cities.push(...data)) // the ... is used to spread the dta into an array

function findMatches(wordToMatch, cities){
  return cities.filter(place => {
    // we need to check if the cities or state matches what is the search input

    const regex = new RegExp(wordToMatch, 'gi'); // gi - global insensible
    return place.city.match(regex) || place.state.match(regex) // city and state are properties of the object cities
  })

}
function displayMatches{
  const matchArray = findMatches(this.value, cities)
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');


    // carry on from 14 min
    
    
    return `
      <li>
        <span class = "name">${palce.city}, ${place.state}</span>
        <span class = "population">${palce.population}</span>
      </li>
    `
  }).join(''); // because map will return an array and we need a string we call .join on it
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
suggestions.addEventListener('keyup', displayMatches);

