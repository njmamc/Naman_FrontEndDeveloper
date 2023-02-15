function sumAllDigitsInNumber(num) {
  let str = num.toString();
  let n = str.length;
  let sum = 0;
  for (i = 0; i < n; i++) {
    let singleDigit = num % 10;
    sum = sum + singleDigit;
    num = Math.floor(num / 10);
  }
  console.log(sum);
}
sumAllDigitsInNumber(1234553456131654613164356);
