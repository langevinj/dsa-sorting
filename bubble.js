function bubbleSort(arr=[]) {
    //base case for returing an empty array
    if(!arr.length) return arr;
    let i = arr.length;

    //loop through array based on length and what has been sorted
    while(i > 0){
        for(let j = 0; j < i - 1; j++){
            //if the starting element is bigger then the next, swap
            if(arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        }
        i--;
    }

    return arr;
}

module.exports = bubbleSort;