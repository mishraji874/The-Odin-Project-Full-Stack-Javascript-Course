function merge(leftArr, rightArr) {
    let i = 0;
    let j = 0;
    let k = 0;

    let mergedArr = [];

    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] < rightArr[j]) {
            mergedArr[k++] = leftArr[i++];
        } else if (leftArr[i] > rightArr[j]) {
            mergedArr[k++] = rightArr[j++];
        } else {
            console.log("element equal");
            mergedArr[k++] = leftArr[i++];
            mergedArr[k++] = rightArr[j++];
        }
    }

    for (; i < leftArr.length; i++) {
        mergedArr[k++] = leftArr[i];
    }
    for (; j < rightArr.length; j++) {
        mergedArr[k++] = rightArr[j];
    }
    return mergedArr;
}

function mergeSort(arr) {
    if (arr.length === 0) return [];
    if (arr.length === 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid, arr.length);
    leftArr = mergeSort(leftArr);
    rightArr = mergeSort(rightArr);
    return merge(leftArr, rightArr);
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));