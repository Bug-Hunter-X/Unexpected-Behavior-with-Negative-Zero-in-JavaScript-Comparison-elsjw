function myFunction(a, b) {
  // Check for negative zero explicitly
  if (a === 0 && 1 / a === -Infinity || b === 0 && 1 / b === -Infinity) {
    return 0; // Handle negative zero appropriately
  } else if (a === 0 || b === 0) {
    return 0; // Handle positive zero
  } else {
    return a / b;
  }
}
//Additional check for NaN
function improvedMyFunction(a,b){
  if(isNaN(a/b)){
    return 0;
  }else{
    return a/b;
  }
} 