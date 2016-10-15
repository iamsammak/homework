// Intro to JS

//phase I

// function mysteryScoping1() {
//   var x = 'out of block';
//   if (true) {
//     var x = 'in block'; // x is already defined
//     console.log(x);
//   }
//   console.log(x);
// }
//so var persists through functions

// mysteryScoping1(); // in block, in block
//
// function mysteryScoping2() {
//   const x = 'out of block';
//   if (true) {
//     const x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }
// //const and let both stay within scope
//
// mysteryScoping2(); // in block, out of block
//
// function mysteryScoping3() {
//   const x = 'out of block';
//   if (true) {
//     var x = 'in block'; //can't var x if there is already a const x
//     console.log(x);
//   }
//   console.log(x);
// }
//
// mysteryScoping3(); // SyntaxError
// //
// function mysteryScoping4() {
//   let x = 'out of block';
//   if (true) {
//     let x = 'in block'; // x is already declared in upperscope
//     console.log(x);
//   }
//   console.log(x);
// }
// //const and let both stay within scope
// mysteryScoping4(); // in block, out of block
// //
// function mysteryScoping5() {
//   let x = 'out of block';
//   if (true) {
//     let x = 'in block';
//     console.log(x);
//   }
//   let x = 'out of block again';
// this function works if you comment out the above line
//   console.log(x);
// }
//
// mysteryScoping5(); // SyntaxError


//madLib
// madLib('make, 'best, 'guac');
function madLib(verb, adj, noun) {
  return `We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}.`;
}

// console.log(madLib('make', 'best', 'guac'));

//isSubstring
function isSubstring(string, substr) {
  let ret = string.includes(substr);
  return ret;
}

// console.log(isSubstring("time to program", "time"));
// // true
//
// console.log(isSubstring("Jump for joy", "joys"));
// // false


//phase II

//fizzBuzz
function fizzBuzz(array) {
  let ret = [];
  array.forEach( (num) => {
    // solution ((el % 3 === 0) ^ (el % 5 === 0))
    if (((num % 3 === 0) || (num % 5 === 0)) && (num % 15 !== 0)) {
      ret.push(num);
    }
  });
  return ret;
}

// console.log(fizzBuzz([1,2,3,5,6,15,30, 35, 33, 39, 25]));

//isPrime
function isPrime(number) {
  //returns true or false
  if (number < 2) {
    return false;
  }

  for(let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// console.log(isPrime(2)); // true
// console.log(isPrime(10)); // false
// console.log(isPrime(8)); // false
// console.log(isPrime(15485863)); // true
// console.log(isPrime(7)); // true


// sumOfNPrimes
function sumOfNPrimes(n) {
  let sum = 0;
  let countPrimes = n;
  let number = 2;

  while (countPrimes > 0) {
    if (isPrime(number)) {
      sum += number;
      countPrimes--;
    }
    number++;
  }
  return sum;
}

// console.log(sumOfNPrimes(0)); // 0
// console.log(sumOfNPrimes(1)); // 2
// console.log(sumOfNPrimes(4)); // 17

//allOrNothing
function allOrNothing(mod, ...nums) {
  //returns true or false
  // console.log(nums.every(el => el % mod === 0));
  return nums.every(el => el % mod === 0);
  // need to return this because JS has no implicit returns
}
console.log(allOrNothing(3, 9, 12, 6)); // true
console.log(allOrNothing(5, 1, 2, 10)); // false
