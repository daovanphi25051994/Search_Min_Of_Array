function getIndexOfMinOfArray(arr) {
    if (arr.length == 0) {
        return -1
    } else {
        let min = arr[0];
        let minOfIndex = 0;
        for (let i = 0; i < arr.length; i++) {
            if (min > arr[i]) {
                min = arr[i];
                minOfIndex = i;
            }
        }
        return minOfIndex;
    }
}

let array1 = [3, 5, 1, 8, -1, 7, 8];
let array2 = [7, 12, 6, 42, 8, 0, 52, -6, -62, 856];
let array3 = [];
let array4 = [0, 0, 0, 0, 0, 0];

let indexOfMinOfArray1 = getIndexOfMinOfArray(array1);
console.log(array1[indexOfMinOfArray1]);
let indexOfMinOfArray2 = getIndexOfMinOfArray(array2);
console.log(array2[indexOfMinOfArray2]);
let indexOfMinOfArray3 = getIndexOfMinOfArray(array3);
console.log(array3[indexOfMinOfArray3]);
let indexOfMinOfArray4 = getIndexOfMinOfArray(array4);
console.log(array4[indexOfMinOfArray4]);
