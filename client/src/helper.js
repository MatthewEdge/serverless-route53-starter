/* Simple helper function to chunk an array into `size` sub-arrays */
export function chunk(arr, size){
    let results = [];
    
    while (arr.length) {
        results.push(arr.splice(0, size));
    }
    
    return results;
}

/* Pad array to the given length with the given fill */
export function pad(array, length, fill) { 
    return length > array.length ? array.concat(Array(length - array.length).fill(fill)) : array; 
}
