//run in dev tools env
// window only works in browser

// simple timeout
//
// window.setTimeout(function () {
//   alert("Hammer Time");
//   },
//   5000
// );
//
// // Timeout plus Closure
//
// function hammerTime(time) {
//   window.setTimeout(function() {
//     alert(`${time} is HAMMER TIME!`);
//   });
// }


// run in node environment
// comment out the above

// some tea? some biscuits?
// ask the user if they'd like tea
// console.log their response
// ask the user if they'd like biscuits
// console.log their comple response:
  // so you ${firstAns} want tea and you ${secondAns} want coffee
// close the reader


// const readline = require('readline');
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// function teaAndBiscuits() {
//   reader.question('Would you like some tea? \n', (response) => {
//     // let teaResponse = response;
//     console.log(`You replied ${response}.`);
//     reader.question("Would you like some biscuits? \n", (response2) => {
//       // let biscuitsResponse = response2;
//       console.log(`You replied ${response2}.`);
//
//       const teaAns = (response === 'yes') ? 'do' : 'don\'t';
//       const biscuitsAns = (response === 'yes') ? 'do' : 'don\'t';
//
//       console.log(
//         `So you ${teaAns} want tea and you ${biscuitsAns} want biscuits`);
//       reader.close();
//     });
//   });
// }

// teaAndBiscuits();

// ways to call a function

function Cat () {
  this.name = 'Markov';
  this.age = 3;
}

function Dog () {
  this.name = 'Noodles';
  this.age = 4;
}

Dog.prototype.chase = function (cat) {
  console.log(`My name is ${this.name} and I'm chasing ${cat.name}! Woof!`);
};

const Markov = new Cat ();
const Noodles = new Dog ();

Noodles.chase(Markov);

Noodles.chase.call(Markov, Noodles);
// call, takes oby, then arguments separated by commas
//setting 'this' to Markov then passing Noodles into chase

Noodles.chase.apply(Markov, [Markov]);
// apply, takes obj, then array of arguments
