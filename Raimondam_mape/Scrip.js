
const abstractArray = ["Saab", "Volvo", "BMW"];
const newArray = [];
document.getElementById("array").innerHTML = abstractArray;

function addRecordToBegining() {
    var record = document.getElementById('arrRecord').value;
    document.getElementById("array").innerHTML = abstractArray;
    abstractArray.unshift(record);
    document.getElementById("newArray").innerHTML = newArrayCreation();
}

function addRecordToEnd() {
    var record = document.getElementById('arrRecord').value;
    document.getElementById("array").innerHTML = abstractArray;
    abstractArray.push(record);
    document.getElementById("newArray").innerHTML = newArrayCreation();
}

function newArrayCreation() {
    var tableOfArrays = "";
    var convertedToString = abstractArray.toString();
    newArray.push(convertedToString);
    for (let i = 0; i < newArray.length; i++) {
        tableOfArrays += newArray[i] + "<br>";
      }
    return tableOfArrays;
}