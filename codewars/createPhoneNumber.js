function createPhoneNumber(numbers){
    let arrPhoneNumber = []

    arrPhoneNumber.push("(")
    for (let i = 0; i < numbers.length; i++) {
        arrPhoneNumber.push(numbers[i]);
        if (i === 2) arrPhoneNumber.push(") ");
        if (i === 5) arrPhoneNumber.push("-");
    }

    return arrPhoneNumber.join("");
}