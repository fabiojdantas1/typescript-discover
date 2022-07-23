function sum(a: number, b: number): number { 
  return a + b;
}

console.log(sum(10, 20)); //30

function sumAny(a: any, b: any) { 
  return a + b;
}

console.log(sumAny('10', 20)); //1020
console.log(sumAny('10', true)); //10true
console.log(sumAny(false, 20)); //20
