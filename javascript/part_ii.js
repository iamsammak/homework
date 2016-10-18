//phase 1 callbacks
function titleize(names, callback) {
  let titled = names.map(name => `Mx. ${name} Jingleheimer Schmidt`);
  callback(titled);
}

function printName(names) {
    names.forEach(name => console.log(name));
}

// titleize(["Mary", "Brian", "Leo"], printName);


//phase II constructors, prototypes, and this

function Elephant(name, height, tricks) {
    this.name = name;
    this.height = height;
    this.tricks = tricks;
}

Elephant.prototype.trumpet = function() {
  console.log(`${this.name} the elephant goes 'phrRRRRRRRR!!!!!!!'`);
};

Elephant.prototype.grow = function() {
  this.height += 12;
};

Elephant.prototype.addTrick = function(trick) {
  this.tricks.push(trick);
};

Elephant.prototype.play = function() {
  let trickIdx = Math.floor((Math.random() * (this.tricks.length - 1)));
  console.log(`${this.name} is ${this.tricks[trickIdx]}!`);
};

const ellie = new Elephant(
  'Ellie',
  60,
  ['painting a picture', 'destroying asteroids', 'blowing peanut butter']
);

// ellie.trumpet();
// console.log(ellie.height);
// ellie.grow();
// console.log(ellie.height);
// ellie.addTrick("uses hydro pump");
// ellie.play();
// ellie.play();
// console.log(ellie.tricks);


//phase III function invocation

let mellie = new Elephant(
  "Mellie", 185,
  ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant(
  "Charlie", 200,
  ["painting pictures", "spraying water for a slip and slide"]);
let rufus = new Elephant(
  "Rufus", 234,
  ["writing letters", "stealing peanuts"]);
let micah = new Elephant(
  "Micah", 143,
  ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, mellie, charlie, rufus, micah];

Elephant.prototype.paradeHelper = function (elephant) {
  console.log(`${elephant.name} is trotting by!`);
};

// //this works
// herd.forEach(elephant => Elephant.prototype.paradeHelper(elephant));
// //this also works
// herd.forEach(elephant => elephant.paradeHelper(elephant));


//phase IV closures
// REVIEW this one

function dinerBreakfast() {
  let order = "I'd like scrambled eggs and bacon please.";
  console.log(order);

  return function (food) {
    order = `${order.slice(0, order.length - 8)} and ${food} please.`;
    console.log(order);
  };
}

let bfastOrder = dinerBreakfast();
bfastOrder("chocolate pancakes");
bfastOrder("coffee");
// so this is like curried sum
// when you are calling bfastOrder you are calling dinerBreakfast
// whose return is the internal function food
