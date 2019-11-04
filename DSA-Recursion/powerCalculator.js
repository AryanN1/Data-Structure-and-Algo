const powerCalculator = function(base,exp){
  let result = base;
  for (let i = 1; i < exp; i++){
    result = result * base
  }
    return result
}

powerCalculator(10,2);
powerCalculator(10, -2);

console.log(powerCalculator(10,2));
console.log(powerCalculator(10,-2));