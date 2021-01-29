function swapStyleSheet(sheet) {
  document.getElementById("pagestyle").setAttribute("href", sheet);
}


var style1 = document.getElementById("stylesheet1");
var style2 = document.getElementById("stylesheet2");

style1.onclick = function () { swapStyleSheet("CSS/design2.css") };
style2.onclick = function () { swapStyleSheet("CSS/design3.css"); };
