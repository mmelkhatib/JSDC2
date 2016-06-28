/**Random Address Generator** (address.js)
  - Write a script that can generate random addresses
  - As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name and zip code
  - Your script should randomly select one item from each of these arrays and then use them to construct a random address
  - Each time you run the script, it should print a new randomly-generated address to the terminal. For example:
  - `node random-address.js`
  - `=> 34578 Dolphin Street, Wonka NY, 44506`
  */


//Creating Address Fields//
var street = ['Polar Bear Ave', 'Jolly Lane', 'Porter Street', 'Carvill Road',];
var city = ['Palestine', 'Lebanon', 'Waltham', 'Washington'];
var state = ['AK','AL','AR','AZ','CA','CO','CT','DC','DE','FL','GA','GU','HI','IA','ID', 'IL','IN','KS','KY','LA','MA','MD','ME',];
var streetNumber = Math.floor(Math.random() * 100);
var zipCode = Math.floor(Math.random()*100000); //Found an alternative solution on StackOverflow but not sure why their version is better than what I have here: http://stackoverflow.com/questions/2175512/javascript-expression-to-generate-a-5-digit-number-in-every-case

//adding variables for randomly accessing Array values//
var randomStreet = street[Math.floor(Math.random() * street.length)];
var randomCity = city[Math.floor(Math.random() * city.length)];
var randomState = state[Math.floor(Math.random() * state.length)];

//Console Log for Generating the Random Address//
console.log(streetNumber + " " + randomStreet + ", " + randomCity + " " + randomState + ", " + zipCode);
