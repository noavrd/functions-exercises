//Question 1
function myReverse(str) {
  
  let arr = str.split("").reverse().join("");
  return arr;
}

//Question 2
function allCombinations(str) {

  let combinations = [];
  let arr = str.split("");
  let count = 0, letter;
  for (let i = 0; i <= arr.length; i++) {
    for (let j = 0; j <= arr.length; j++) {
      combinations.push(str.slice(i,j));
      count++;
    }
  }
  while (count > 0){
    letter = combinations[0];
    combinations.shift();
    if (letter !== "") {
      combinations.push(letter);
  }
  count--;
}
  console.log(combinations);
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
  let count = arr.length;
  let dup;
  while (count > 0) {
    dup = arr.shift();
    if (!arr.includes(dup)) {
      console.log(dup);
      return dup;
    }
    arr.push(dup);
    count--;
  }
}

//Question 6 (Bonus)
function isPrefectNumber(num) {
  // your code here
  return "I'm not interested in the bonus question :(";
}

 //*** Playground ***
 console.log(allCombinations("dog"));
  //*** End of Playground ***

// Don't touch me :)
exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;
