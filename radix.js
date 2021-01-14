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
    //find the most amount of digits in one element of the array
    let max = mostDigits(arr);
    let x = 0;

    while(x <= max){
        for(let i = 1; i < arr.length; i++){
            for(let j = i; j > 0; j --){
                if(getDigit(arr[j], x) < getDigit(arr[j - 1], x)){
                    [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
                }
            }
        }
        x++
    }
    return arr
}

radixSort([8, 6, 1, 12])
module.exports = { getDigit, digitCount, mostDigits, radixSort};