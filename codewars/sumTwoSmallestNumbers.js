function sumTwoSmallestNumbers(numbers) {
    const arrLowestNums = [Infinity, Infinity];
    let aux = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < arrLowestNums[0]) {
            aux = arrLowestNums[0];
            arrLowestNums[0] = numbers[i];
            arrLowestNums[1] = aux;
        } else if (numbers[i] < arrLowestNums[1]) {
            arrLowestNums[1] = numbers[i];
        }
    }

    return arrLowestNums[0] + arrLowestNums[1];
}