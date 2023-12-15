const persons = ["Philip", "Emma", "Kingsley", "Clifford"];

const cars = [];
cars[2] = "Volvo";
cars[0] = "Lexus";
cars[1] = "Mercedes";

const computers = new Array("Hp", "Dell", "Lenovo", "Toshiba");

computers[0] = "Asus";

console.log(persons);
console.log(cars);
console.log(computers);

computers.push("Macbook");

console.log(computers[1]);
console.log(computers.length); // length of data
console.log(computers);

const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.toString()); // converts an array to a string
//sort is used to alphabetically arrange an array data
console.log(fruits.sort());

console.log(fruits[fruits.length - 1]); //for getting the last item in an array

const freshfruits = ["Banana", "Orange", "Apple", "Mango"];

freshfruits.push("Watermelon");

let fLen = freshfruits.length;

let text = "<ul>";

for (let i = 0; i < fLen; i++) {
  text += "<li>" + freshfruits[i] + "</li>";
}

text += "</ul>";

document.getElementById("demo").innerHTML = text;

const fruito = ["Banana", "Orange", "Apple", "Mango"];
fruito.splice(2, 1, "Lemon", "Kiwi");

console.log(fruito);
let now = fruito.slice(1, 3);
console.log(now);
