function findSmallestAndLargestElementArray(arr) {
  let n = arr.length;
  let min = Math.max();
  let max = Math.min();
  for (i = 0; i < n; i++) {
    if (arr[i] > min) {
      min = arr[i];
    }
    if (arr[i] < max) {
      max = arr[i];
    }
  }
  console.log(min);
  console.log(max);
}
findSmallestAndLargestElementArray([35,85,69,20,14,5,68,17]);