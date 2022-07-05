//1
function oddNum(num) {
  if (num % 2 == 0) {
    return "false";
  } else {
    return "true";
  }
}
console.log(oddNum(13));
console.log(oddNum(22));

//2
function side(first, second) {
  return first * second;
}
console.log(side(2, 9), "Rectangle");

//3
function square(side) {
  return side ** 2;
}
console.log(square(8), "Square area");

//4
function randomNum() {
  return Math.floor(Math.random() * 100);
}
console.log(randomNum(100), "rendom");

//5
function getCurrencySymbolFromCode(currency) {
  if (currency == "GEL") {
    return "ლ";
  } else if (currency == "USD") {
    return "$";
  } else if (currency == "EUR") {
    return "€";
  }
}
console.log(getCurrencySymbolFromCode("EUR"));

//6
const people = [
  { name: "nika", age: 33 },
  { name: "lazare", age: 27 },
  { name: "nana", age: 20 },
  { name: "ermalo", age: 15 },
  { name: "diaz", age: 77 },
];

let findYoung = function (people) {
  const Youngest = people.sort((a, b) => (a.age > b.age ? 1 : -1));
  return Youngest[0];
};
console.log(findYoung(people));
