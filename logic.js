console.log("hello world")

const myFunction = (text) => {
    document.querySelector(".header-message").textContent = text;
}

document.querySelector(".click-button").onclick= () => myFunction("Hola senor");

const func2 = () => {
  document.querySelector(".target-div").style.backgroundColor = "red";
};

document.querySelector(".target-div").onmouseenter = () => func2();

const func3 = () => {
  document.querySelector(".target-div").style.backgroundColor = "green";
};

document.querySelector(".target-div").onmouseleave = () => func3();
const nameInput = document.getElementById("name-input");
const message = document.getElementById("message");
nameInput.addEventListener("change", (e) => {
  console.log(e.target.value) ;
});

nameInput.addEventListener("input", (event) => {
  console.log(event.target.value);
});

nameInput.addEventListener("change", (event) => {
  console.log(event.target.value);
});

nameInput.addEventListener("keydown", (event) => {
  console.log(event.key);
});

let savedValue = "";

nameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    savedValue = event.target.value;
    console.log(savedValue);
  }
});