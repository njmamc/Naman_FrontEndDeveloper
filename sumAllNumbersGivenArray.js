function sumAllNumbersInGivenArray(arr) {
  let n = arr.length;
  let sum = 0;
  for (i = 0; i < n; i++) {
    sum = sum + arr[i];
    //or sum+=arr[i];
  }
  console.log(sum);
}
sumAllNumbersInGivenArray([8,6,6,8,50,9]);
