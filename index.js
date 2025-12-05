const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input")
const lengthElOne = document.getElementById("length-el-one")
const lengthElTwo = document.getElementById("length-el-two")
const lengthElThree = document.getElementById("length-el-three")



convertBtn.addEventListener("click", function(){
    let baseValue = parseFloat(inputEl.value)
    
    const meterToFeet =  (baseValue * 3.281).toFixed(3)
    const feetToMeter =  (baseValue / 3.281).toFixed(3)
    
    const literToGallon = (baseValue * 3.785).toFixed(3)
    const gallonToLiter = (baseValue / 3.785).toFixed(3)
    
    const kiloToPound =  (baseValue * 2.205).toFixed(3)
    const poundToKilo =  (baseValue / 2.205).toFixed(3)

    lengthElOne.textContent = `${baseValue} Meters = ${meterToFeet} Feet | ${baseValue} Feet = ${feetToMeter} Meters`

    lengthElTwo.textContent = `${baseValue} Liters = ${literToGallon} Gallons | ${baseValue} Gallons = ${gallonToLiter} Liters`

    lengthElThree.textContent = `${baseValue} Kilograms = ${kiloToPound} Pounds | ${baseValue} Pounds = ${poundToKilo} Kilograms`
})
