function persistence(num) {
    let count = 0;
    let resMultiplication = 1;
    let arrNum = String(num).split("");

    if (arrNum.length === 1) {
        return 0;
    }

    while (arrNum.length > 1) {
        for (let i = 0; i < arrNum.length; i++) {
            resMultiplication *= arrNum[i];
        }

        let newNum = String(resMultiplication);
        arrNum = newNum.split("");
        count++;
        resMultiplication = 1;
    }

    return count;
}