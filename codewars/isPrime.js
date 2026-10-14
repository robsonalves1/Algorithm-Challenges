function isPrime(num) {
  if (num <= 1) {
    return false;
  } else if (num <= 3) {
    return true;
  } else {
    if (num % 2 == 0 || num % 3 == 0) return false;

    for (let i = 1; i * i <= num; i++) {
      if (num % i == 0 || num % (i + 2) == 0) return false;
    }
    return true;
  }
}