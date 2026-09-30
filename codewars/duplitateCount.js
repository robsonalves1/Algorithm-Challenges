function duplicateCount(text){
  let textToLower = text.textToLower();
  let duplicates = new Set();
  let seen = new Set();

  for (let char of textToLower){
    if (seen.has(char)) {
      duplicates.add(char);
    } else {
      seen.add(char);
    }
  }

  return duplicates.size();
}