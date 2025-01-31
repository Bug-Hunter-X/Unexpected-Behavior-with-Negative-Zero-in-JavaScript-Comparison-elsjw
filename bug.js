function myFunction(a, b) {
  if (a === 0 || b === 0) {
    return 0; // This will cause unexpected results if a or b is negative zero.
  } else {
    return a / b;
  }
}