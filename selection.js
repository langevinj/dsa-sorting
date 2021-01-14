function selectionSort(arr, count = 0){
    //base case if the array is sorted
    if(count === arr.length) return arr;

    //set minimum to starting point in array
    let min = arr[count];
    let newMin = count;

    //iterate through each value till the end
    for(let i = count + 1; i < arr.length; i++){
        if(arr[i] < arr[newMin]) newMin = i;
    }

    //if the original minimum doesn't match the new, swap them
    if(arr[newMin] < min){
        [arr[count], arr[newMin]] = [arr[newMin], arr[count]]
    }

    return selectionSort(arr, count + 1)
}

module.exports = selectionSort;