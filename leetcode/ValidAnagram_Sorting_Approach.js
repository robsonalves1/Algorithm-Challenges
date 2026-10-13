function validAnagram(s, t) {
    // Sorting Approach
    sortedS = s.split("").sort();
    sortedT = t.split("").sort();

    return sortedS.join("") == sortedT.join("");
}