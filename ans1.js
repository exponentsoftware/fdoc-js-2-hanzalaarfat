/* Using the countries array create the following array of arrays. The country name, the first three letters of the country name and the length of the country name.
const countries = [
  'ALBANIA',
  'BOLIVIA',
  'CANADA',
  'DENMARK',
  'ETHIOPIA',
  'FINLAND',
  'GERMANY',
  'HUNGARY',
  'IRELAND',
  'JAPAN',
  'KENYA'
]
createArrayOfArrays(countries)
[
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]*/

const countries = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
];

const createArrayOfArrays = (arr) => {
  let modified_countries = [];

  for (let country of arr) {
    let temp_arr = [];
    let capitalizName =
      country[0] + country.substr(1, country.length - 1).toLowerCase();
    temp_arr.push(capitalizName);
    temp_arr.push(country.substr(0, 3));
    temp_arr.push(country.length);

    modified_countries.push(temp_arr);
  }
  return modified_countries;
};

console.log(createArrayOfArrays(countries));
