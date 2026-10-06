function arrayDiff(a, b) {
    const setB = new Set(b)
    return a.filter((elem) => !setB.has(elem))
}