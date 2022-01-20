"use strict";
function addData() {
  var vardas = document.getElementById('vardas').value;
  var pavarde = document.getElementById('pavarde').value;
  var amzius = document.getElementById('amzius').value;
  

  if (vardas == "" || pavarde == "" || amzius == "" || amzius <0) {
    alert("Prašome įvesti visus duomenis :)");
  } else {
    var html = "";

    html = "<tr><td>" + vardas + "</td><td>" + pavarde + "</td><td>" + amzius + "</td></tr>";

    document.getElementById('result').innerHTML += html;
    document.getElementById('vardas').value = "";
    document.getElementById('pavarde').value = "";
    document.getElementById('amzius').value = "";
  }
}

var removelast = document.getElementsByTagName("button")[2];
var html1 = document.getElementsByTagName("tr").value;
var html2 = document.getElementsByTagName("tr");


removelast.addEventListener("click", function () {
if(html2.length >1) {
html2[html2.length -1].remove(); 
    
}else
    alert('ner ka trinti');
});

var removefirst = document.getElementsByTagName("button")[1];
    removefirst.addEventListener("click", function () {
        

if(html2.length >1) {
html2[1].remove(); 
    
}else
    alert('ner ka trinti');
});
