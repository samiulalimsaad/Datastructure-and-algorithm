function binarySearch(arr, left, right, num) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === num) {
        return mid;
    }
    if (arr[mid] < num) {
        return binarySearch(arr, mid + 1, right, num);
    }
    return binarySearch(arr, left, mid - 1, num);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(arr, 0, arr.length - 1, 4));
console.log(binarySearch(arr, 0, arr.length - 1, 7));
console.log(binarySearch(arr, 0, arr.length - 1, 2));
console.log(binarySearch(arr, 0, arr.length - 1, 9));
console.log(binarySearch(arr, 0, arr.length - 1, 5));
