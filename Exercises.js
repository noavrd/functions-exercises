//Question 1
function myReverse(str) {
  
  let arr = str.split("").reverse().join("");
  return arr;
}

//Question 2
function allCombinations(str) {
  let combinations = [];
  // your code here

  //
  return combinations;
}

//Question 3
function allCaps(str) {
  let cap = str.split(" ").toUpperCase().join(" ");
  return cap;
}

//Question 4
function myPower(x, n) {
  
  return x**n;
}

//Question 5
function getFirstNotRepeating(str) {

  let arr = str.split("");
  let sec = [];
  for (let i = 0; i < arr.length; i++) {
    if ( !sec.includes(arr[i]) ) {
      sec.push(arr[i]);
    } else {
      return arr[i];
    }
  }
  return "all the letters repeat";
}

//Question 6 (Bonus)
function isPrefectNumber(num) {
  // your code here
  return "I'm not interested in the bonus question :(";
}

 //*** Playground ***
 console.log(myPower(7,4));
  //*** End of Playground ***

// Don't touch me :)
exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;
