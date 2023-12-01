// Comments, Functions, Events

const user = {
  name: "Phils",
  email: "phils@gmail.com",
  password: "jg975424hggd",
};

//ksdbjshdjs
/* smdshdsjhdjshds */
/* let x, y, z;
x = 3; y = 6; z = 0
*/

const template = `<div>
          <h1>${user.name}</h1>
          <h3>${user.email}</h3>
          <p>${user.password}</p>
    </div>`;

document.getElementsByClassName("textContainer")[0].innerHTML = template;

const button = document.getElementById("btn");

button.addEventListener("click", () => Greet(user));

function Greet(param) {
  window.alert("Hello! Good morning" + " " + param.name);
}

// Amount formatter
const formatAmount = (amount) => {
  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  });
  return formatter.format(amount);
};

const products = [
  {
    name: "Samsung TV",
    price: 400000,
  },
  {
    name: "Royal TV",
    price: 200000,
  },
  {
    name: "Panasonic TV",
    price: 600000,
  },
  {
    name: "LG TV",
    price: 550000,
  },
  {
    name: "Hisense TV",
    price: 380000,
  },
];

const productD = document.getElementsByClassName("products")[0];

let wrapper;

for (let i = 0; i < products.length; i++) {
  wrapper += `<li style="list-style:none">
        <h2 style="color: crimson; ">${products[i].name}</h2>
        <p>${formatAmount(products[i].price)}</p>
  </li>`;
}
if (wrapper) {
  productD.innerHTML = wrapper;
}

document.write(formatAmount(7628665452));

function countLetters(params) {
  let list = params.split("");
  console.log(list);
  let num = list.length;
  return num;
}
document.getElementById("display").innerHTML = countLetters("Philip");
