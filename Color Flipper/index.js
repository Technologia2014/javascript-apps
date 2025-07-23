const btn1 = document.getElementById("change-color1");
const btn2 = document.getElementById("change-color2");
const btn3 = document.getElementById("change-color3");
const reset = document.getElementById("reset");

btn1.addEventListener("click", () => {
  document.querySelector("body").style.backgroundColor = "blue";
});
btn2.addEventListener("click", () => {
  document.querySelector("body").style.backgroundColor = "red";
});
btn3.addEventListener("click", () => {
  document.querySelector("body").style.backgroundColor = "yellow";
});
reset.addEventListener("click", () => {
  document.querySelector("body").style.backgroundColor = "white";
})