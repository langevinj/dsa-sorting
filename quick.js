/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start=0, end=arr.length - 1){
    let piv = arr[start];
    let pIdx = 0;

    while(start <= end){
        if(arr[start] < piv){
            pIdx++;
            [arr[start], arr[pIdx]] = [arr[pIdx], arr[start]];
        }
        start++
    }

    [arr[0], arr[pIdx]] = [arr[pIdx], arr[0]]
    return pIdx
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort() {}

module.exports = { pivot, quickSort};