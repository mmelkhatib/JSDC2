var speakFunction = function () {
  console.log('hello world');
};

speakFunction();

var spaceUtils = {
  galaxy: 'Milky Way',
  logPlanets: function() {
      var planets = ['Mercury', 'Venus', 'Mars'];
      for (var i = 0; i < planets.length; i++){
        console.log(planets[i]);
      }
  }
}
spaceUtils.logPlanets()



function forEach (arr, func, action) {
  for (var i=0; i<arr.length; i++) {
  action(func(arr[i]));
  }
}

function log (action) {
  console.log(action);
}

function double (num) {
return num * 2;
}

var myArray = [1,2,3,4];

forEach(myArray, double, log);
