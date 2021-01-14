function insertionSort(arr=[]) {
    if(!arr.length) return arr;

    let l = arr.length;
    let comp = arr[1];

    if(comp < arr[0]){
        [arr[0], arr[1]] = [arr[1], arr[0]]
    }

    let i = 2;

    while(i < l){
        if(arr[i - 1] > arr[i]){
            for(let j = i; j > 0; j--){
                if(arr[j] < arr[j - 1]) [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            }
        }
        i++
    }

    return arr
}

module.exports = insertionSort;