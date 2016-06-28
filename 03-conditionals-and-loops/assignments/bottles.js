/**
**99 Bottles of Beer** (bottles.js)
 - Write a script that logs to the console the lyrics to "99 Bottles of Beer on the Wall" in the terminal. If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).
 - Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of beer" and "1 bottle of beer").
**/


for (var beers = 99; beers <= 99 && beers >= 0; beers--) { //add for loop for all beer bottles between 99 and 1;
var minusOne = beers - 1; //creating the minusOne variable for the second line in the song;
if (beers > 2){ //While the loop is above 2;
  console.log(beers + " bottles of beer on the wall, " + beers + " bottles of beer.");
  console.log("Take one down and pass it around, " + minusOne + " bottles of beer on the wall.");
  console.log(" ");
}else if (beers === 2){ //Once loop reaches 2;
  console.log(beers + " bottles of beer on the wall, " + beers + " bottles of beer.");
  console.log("Take one down and pass it around," + minusOne + "more bottle of beer on the wall.");
  console.log(" ");
} else if (beers === 1){ //Once loop reaches 1;
  console.log(beers + " bottle of beer on the wall, " + beers + " bottle of beer.");
  console.log("Take one down and pass it around, no more bottles of beer on the wall.");
  console.log(" ");
} else if (beers === 0) {//Once loop reaches 0;
  console.log("No more bottles of beer on the wall, no more bottles of beer.");
  console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
  console.log(" ");
} else {
  console.log("Nothing to see here folks");
}
}

  // 99 bottles of beer on the wall, 99 bottles of beer.
  // Take one down and pass it around, 98 bottles of beer on the wall.
