// JavaScript Document

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const d = new Date();
let name = month[d.getMonth()];
document.getElementById("month").innerHTML = name;

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const rndInt = randomIntFromInterval(73, 86);
document.getElementById("claim").innerHTML = rndInt;
console.log(rndInt);

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const rndIntPEEPS = randomIntFromInterval(650, 922);
document.getElementById("peeps").innerHTML = rndIntPEEPS;
console.log(rndInt);
