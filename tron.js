
function calculate() {
    var radius = document.getElementById("radius").value;
    var area = Math.PI * radius * radius;
    var circumference = 2 * Math.PI * radius;

    document.getElementById("result").innerHTML = "Diện tích của hình tròn là: " + area + "<br>Chu vi của hình tròn là: " + circumference;
}