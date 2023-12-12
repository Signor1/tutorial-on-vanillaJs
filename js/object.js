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

const person = {};

//changing the value of an object
const car = { type: "Fiat", model: "500", color: "white" };

car.color = "red";
car.model = "350";
car.type = "Lexus";

console.log(car);
