function array_Clone(arr) {
    var clone = arr.map((x) => x);
    return clone;
}

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));