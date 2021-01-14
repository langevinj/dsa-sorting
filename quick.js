/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start=0, end=arr.length - 1){
    if(arr.length <= 1) return [arr, null]
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

function quickSort(arr) {
    if(arr.length <= 1) return arr || []

    function pivot(arr, start = 0, end = arr.length - 1) {
        if (arr.length <= 1) return [arr, null]
        let piv = arr[start];
        let pIdx = 0;

        while (start <= end) {
            if (arr[start] < piv) {
                pIdx++;
                [arr[start], arr[pIdx]] = [arr[pIdx], arr[start]];
            }
            start++
        }

        [arr[0], arr[pIdx]] = [arr[pIdx], arr[0]]
        return [arr, pIdx]
    }

    let res = pivot(arr);
    let arrM = res[0];
    let pIdx = res[1];

    let left = [...quickSort(arrM.slice(0, pIdx))];
    let right = [arrM[pIdx], ...quickSort(arrM.slice(pIdx + 1))]

    return [...left, ...right]
}

module.exports = { pivot, quickSort };