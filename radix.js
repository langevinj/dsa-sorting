function getDigit(num, place){
    let numString = num.toString();
    
    return place > numString.length - 1 ? 0 : +(numString[numString.length - place - 1]);
}

function digitCount(num){
    return num.toString().length;
}

function mostDigits(arr){
    let max = 0;

    for(let i=0; i < arr.length; i++){
        let tempCount = digitCount(arr[i]); 
        if(tempCount > max) max = tempCount;
    }

    return max;
}



function radixSort(arr) {
}

module.exports = { getDigit, digitCount, mostDigits, radixSort};