const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  color.textContent = randomRGBA();
  document.body.style.background = randomRGBA();
});

function randomRGBA() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  var alpha = Math.random().toFixed(2);

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}
