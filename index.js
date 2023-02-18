/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let input = document.querySelector("#number");
let convertBtn = document.querySelector("#convert-btn");
let resetBtn = document.querySelector("#reset-btn");
let inputValue;
let lengthEl = document.querySelector("#length-desc");
let volumeEl = document.querySelector("#volume-desc");
let massEl = document.querySelector("#mass-desc");

reset();

convertBtn.addEventListener("click", () => {
  inputValue = Number(input.value);
  lengthConversion(inputValue);
  volumeConversion(inputValue);
  massConversion(inputValue);
});

resetBtn.addEventListener("click", () => {
  reset();
});

function reset() {
  input.value = "";
  lengthEl.textContent = "";
  volumeEl.textContent = "";
  massEl.textContent = "";
}

function lengthConversion(value) {
  let feetValue = (value * 3.281).toFixed(3);
  let meterValue = (value / 3.281).toFixed(3);
  lengthEl.textContent = `${value} meters = ${feetValue} feet | ${value} feet = ${meterValue} meters`;
}

function volumeConversion(value) {
  let literValue = (value * 0.264).toFixed(3);
  let gallonValue = (value / 0.264).toFixed(3);
  volumeEl.textContent = `${value} liters = ${literValue} gallons | ${value} gallons = ${gallonValue} liters`;
}

function massConversion(value) {
  let kiloValue = (value * 2.204).toFixed(3);
  let poundValue = (value / 2.204).toFixed(3);
  massEl.textContent = `${value} kilograms = ${kiloValue} pounds | ${value} pounds = ${poundValue} kilograms`;
}
