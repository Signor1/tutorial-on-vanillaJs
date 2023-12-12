function find() {
  let body = document.querySelector(".theme");
  let btn = document.querySelector(".btn");

  // console.log(window.location.pathname)
  // e.target.style.backgroundColor = "dodgerblue";

  if (body.classList.contains("dark")) {
    document.body.style.backgroundColor = "#333";
    document.body.style.color = "#eee";
    btn.innerHTML = "Light";
    body.classList.toggle("dark");
  } else {
    document.body.style.backgroundColor = "#eee";
    document.body.style.color = "#333";
    btn.innerHTML = "Dark";
    body.classList.toggle("dark");
  }
}

find();

// onsubmit and onchange
const form = document.getElementById("form"),
  selectTag = document.getElementById("product"),
  priceInput = document.getElementById("price"),
  result = document.getElementsByClassName("result")[0];

selectTag.addEventListener("change", setPrice);

form.addEventListener("submit", getData);

function setPrice() {
  priceInput.value = selectTag.value;
}

// Amount formatter
const formatAmount = (amount) => {
  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  });
  return formatter.format(amount);
};

function getData(event) {
  event.preventDefault();

  if (selectTag.value != "") {
    let item = selectTag.options[selectTag.selectedIndex].text;
    let price = priceInput.value;
    result.innerHTML = `You chose ${item} and the cost is ${formatAmount(
      price
    )}`;

    // alert(`You chose ${item} and the cost is ${formatAmount(price)}`);
    console.log(typeof formatAmount(price));
    form.reset();
  } else {
    alert("Choose a product first");
  }
}
