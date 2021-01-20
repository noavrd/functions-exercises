//Question 1
function myReverse(str) {
  
  let arr = str.split("").reverse().join("");
  return arr;
}

//Question 2
function allCombinations(str) {
  let combinations = [];
  
  return combinations;
}

//Question 3
function allCaps(str) {
  let cap = str.split(" ");
  let sec = [];
  let upper;
  
  for (let i = 0; i < cap.length; i++){
    sec = cap[i].split("");
    upper = sec[0].toUpperCase();
    sec[0] = upper;
    cap[i] = sec.join("");
  }
  str = cap.join(" ");
  return str;
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
    for (let j = 0; j <= sec.length; j ++) {
      if (arr[i] !== sec[i]) {
        return arr[i];
      } else {
        sec.push(arr[i]);
      }
    }
  }
}

//Question 6 (Bonus)
function isPrefectNumber(num) {
  // your code here
  return "I'm not interested in the bonus question :(";
}

 //*** Playground ***
 console.log(allCaps("the cat is my"));
  //*** End of Playground ***

// Don't touch me :)
exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;
