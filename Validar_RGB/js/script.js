window.addEventListener('load', readInput);

function readInput() {
  var r = document.querySelector("#range1").value;
  var g = document.querySelector("#range2").value;
  var b = document.querySelector("#range3").value;


document.querySelector("#value1").value = r;
document.querySelector("#value2").value = g;
document.querySelector("#value3").value = b;

document.querySelector(".rgb-color").style.backgroundColor = "rgb(" + r + "," + g + "," + b +")";
}