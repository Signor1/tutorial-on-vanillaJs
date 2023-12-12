// Object data type
// camelCase
const authUser = {
  id: 15,
  firstName: "Philip Uche",
  email: "philsuche@hr.com",
  phoneNumber: "08056342356",
  hasGithubAccount: false,
  flag: "banned",
  role: "user",
  profileImgUrl: "https://unsplash.com/anderson.jpg",
  password: "&8#^%62nsbnsgbnsdghgdci2(&*%642nbg",
  check: function () {
    return console.log("checked");
  },
  socialMedia: [
    {
      linkedIn: "phils",
    },
    {
      facebook: "facebook.com/phils",
    },
  ],
};

console.log(authUser.email);
document.write(authUser.firstName);

let name = "Chidi";
let lastname = "Okoro";

//changing the value of an object
const car = {};
// const car = new Object();

car.color = "red";
car.model = "350";
car.type = "Lexus";
car.isFaulty = false;

console.log(car);

console.log(car["color"]);
console.log(car.color);

const person = {
  firstName: "John",
  lastName: "Doe",
  gender: "male",
  id: 5566,
  fullName: function (data) {
    if (data == "male") {
      return `Mr. ${this.firstName} ${this.lastName}`;
    } else if (data == "female") {
      return `Mrs. ${this.firstName} ${this.lastName}`;
    } else {
      return `${this.firstName} ${this.lastName}`;
    }
    // return this.firstName + " " + this.lastName;
  },
};

// destucturing in ES6
const { id, firstName } = person;

console.log(person.fullName(person.gender));

console.log(id, firstName);

//Spread functionality in ES6
const newCar = { ...car, isFaulty: true, id: 5265 };
console.log(newCar);

const data = new Date();
const year = data.getFullYear();
const month = data.getMonth();
const day = data.getDate();

console.log(data);
console.log(year);
console.log(month);
console.log(day);

function formatMonth(data) {
  let actualMonth;
  switch (data) {
    case 0:
      actualMonth = "January";
      return actualMonth;
    case 1:
      actualMonth = "February";
      return actualMonth;
    case 2:
      actualMonth = "March";
      return actualMonth;
    case 3:
      actualMonth = "April";
      return actualMonth;
    case 4:
      actualMonth = "May";
      return actualMonth;
    case 5:
      actualMonth = "June";
      return actualMonth;
    case 6:
      actualMonth = "July";
      return actualMonth;
    case 7:
      actualMonth = "August";
      return actualMonth;
    case 8:
      actualMonth = "September";
      return actualMonth;
    case 9:
      actualMonth = "October";
      return actualMonth;
    case 10:
      actualMonth = "November";
      return actualMonth;
    case 11:
      actualMonth = "December";
      return actualMonth;
    default:
      actualMonth = "";
      return actualMonth;
      break;
  }
  return actualMonth;
}

document.write(
  `<h1>Today's Date is ${formatMonth(month)} ${day}, ${year}</h1>`
);
