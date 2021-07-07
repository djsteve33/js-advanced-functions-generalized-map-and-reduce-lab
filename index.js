// Add your functions here
function map(arr, callback) {
    const a = [];
    for (let i = 0; i < arr.length; i++) {
        const myElement = arr[i];
        a.push(callback(myElement));
    }
    return a;
}

function reduce(arr, callback, startingValue) {
    let total;
    if (startingValue) {
        total = startingValue;
        for (let i = 0; i < arr.length; i++) {
            total = callback(arr[i], total);
        }
        return total;
    } else {
        total = arr[0];
        for (let i = 1; i < arr.length; i++) {
            total = callback(arr[i], total);
        }
        return total;
    }
}