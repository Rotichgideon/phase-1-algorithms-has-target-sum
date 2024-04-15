function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let j = (i + 1); j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      };
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  o(n^2)
*/

/* 
  Add your pseudocode here
  [1, 2, 3, 4] target [5]
  iterate through an array
    iterate through the remaining array adding each number to the first
      if summission meets the target return true
        else return false
*/

/*
  Add written explanation of your solution here

  iterate through the array to get a number
    shall get 1
  iterate through the remainig array and get a number 
    shall get 2 since its the next number after 1
  we then add these two and compare if they are equal to our 
  1 + 2 =3; is 3 === 5 no; 
  we start again we get 2 and 3, 2 +3 = 5; is 5 === 5 yes
  target number, if yes we return true;
  if after iliterating and adding up these numbers doesnt match 
    supposedly or array was [1, 2, 1, 1] [5]
    after iliterating, doing the maths, and comparing we cannot get our target number so
  our target number we return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;