function most_Frequent(arr) {

    if (arr.length === 0) {
        return "no data";
    }
    let frequentArr = {};
    for (let x of arr) {
        frequentArr[x] = frequentArr[x] ? frequentArr[x] + 1 : 1;
    }
    var maxElement, maxCount = 0;
    for (let element in frequentArr) {
        if (frequentArr[element] > maxCount) {
            maxCount = frequentArr[element];
            maxElement = element;
        }
    }
    return `${maxElement}(${maxCount} times)`;
}
console.log(most_Frequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));