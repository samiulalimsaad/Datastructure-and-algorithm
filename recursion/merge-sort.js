function mergeSort(arr, start, end) {
    if (start < end) {
        console.log(arr);
        const mid = Math.floor((start + end) / 2);

        mergeSort(arr, start, mid);
        mergeSort(arr, mid + 1, end);
        merge(arr, start, mid, end);
    }
}

function merge(arr, start, mid, mid) {}

const arr = [2, 5, 7, 2, 8, 1, , 2, 7, 6, 1, 7, 6, 1, 7, 6, 541, 879, 4];

mergeSort(arr, 0, arr.length - 1);
