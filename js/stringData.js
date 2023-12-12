// String Data Type

let firstname = "Demen";
let surname = "Okoro is a 'good' man";

console.log(typeof firstname); //string

let num1 = "10";
let num2 = 20;
let num3 = "30";

let res = 20 + 10 + "5"; //305 200 + 200 = 200200

console.log(res);

// Using Length property count characters
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let split = text.split("");
let length = text.length;

let longText =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br> Eveniet, veniam pariatur nesciunt est temporibus dolores. Aliquam deleniti molestiae aut repellat cupiditate. Quisquam quos vero perferendis omnis itaque maxime earum consequatur veniam at laborum sint ducimus, explicabo harum voluptates, commodi dolores id est eveniet <br/>";

document.write(longText);

//for loop
for (let i = 0; i < split.length; i++) {
  document.write("<span>" + split[i] + "</span> <br/>");
}
console.log(split);

//Using Back Slash for escaping characters
// let char = "We are the so-called \"Vikings\" from the north.";
let char = 'We are the so-called "Vikings" from the north.';
