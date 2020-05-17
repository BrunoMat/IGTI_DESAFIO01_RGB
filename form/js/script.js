window.addEventListener('load', readInput);

function readInput() {
  var val1 = document.querySelector("#range1").value;
  var val2 = document.querySelector("#range2").value;
  var val3 = document.querySelector("#range3").value;


document.querySelector("#value1").value = val1;
document.querySelector("#value2").value = val2;
document.querySelector("#value3").value = val3;

document.querySelector(".rgb-color").style.backgroundColor = "rgb(" + val1 + "," + val2 + "," + val3 +")";
}