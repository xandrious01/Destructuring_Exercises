function countZeroes(arr) {
    let indexFirst = findFirstZero(arr);
    return arr.length - indexFirst;
}

function findFirstZero(arr) {
    let leftInd = 0;
    let rightInd = arr.length - 1;
    while (leftInd <= rightInd) {
        let midInd = Math.floor((rightInd - leftInd) / 2);
        if ((arr[midInd] === 0) && (arr[midInd-1] === 1)) {
            return midInd;
        } else if ((arr[midInd] === 0) && (arr[midInd-1] !== 1)){
            rightInd = midInd-1;
        } else {
            leftInd = midInd;
        }
    }
}

module.exports = countZeroes