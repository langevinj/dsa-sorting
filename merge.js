function merge(arr1, arr2) {
    let out = [];
    //starting pointers
    let a = 0, b = 0;

    while(arr1[a] !== undefined && arr2[b] !== undefined){
        if (arr1[a] <= arr2[b]) {
            out.push(arr1[a]);
            a++;
        } else {
            out.push(arr2[b]);
            b++;
        }
    }

    //if first array is exhausted push the rest of the second array
    if(!arr1[a]){
        while(arr2[b]){
            out.push(arr2[b]);
            b++;
        }
    }

    //if second array is exhausted push the rest of the first array
    if(!arr2[b]){
        while(arr1[a]){
            out.push(arr1[a]);
            a++;
        }
    }

    //once both arrays are exhausted return the sorted single array
    return out
}

function mergeSort() {}

module.exports = { merge, mergeSort};