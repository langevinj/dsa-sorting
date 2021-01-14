function getDigit(num, place){
    let numString = num.toString();
    
    return place > numString.length - 1 ? 0 : +(numString[numString.length - place - 1])
}

function digitCount(){

}

function mostDigits(){

}



function radixSort(arr) {
}

module.exports = { getDigit, digitCount, mostDigits, radixSort};