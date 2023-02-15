function evenOddFindInTheGivenArray(arr) {
  let n = arr.length;
  let evenArr = [];
  let oddArr = [];

  for (i = 0; i < n; i++) {
    if (arr[i] % 2 == 0) {
      //   console.log("even numbers are: " + arr[i]);
      evenArr.push(arr[i]);
    } else {
      //   console.log("odd numbers are: " + arr[i]);
      oddArr.push(arr[i]);
    }
  }

  console.log("even array " + evenArr);
  console.log("odd array " + oddArr);
}
evenOddFindInTheGivenArray([12, 9, 4, 50, 34, 89, 63, 31, 15]);
