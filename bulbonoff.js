function calculate() {
  var expression = document.getElementById("display").innerHTML;
  var result = eval(expression);
  document.getElementById("display").innerHTML = result;
}

document.getElementById("equals").addEventListener("click", calculate);
