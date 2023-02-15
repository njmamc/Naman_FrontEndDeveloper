function bubbleSort(arr) {
  let n = arr.length;
  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; //swap
        //or
        // temp = arr[j];
        // arr[j] = arr[j+1];
        // arr[j+1] = temp;
      }
    }
}
console.log(arr);
}
bubbleSort([48, 20, 36, 87, 52, 10, 5, 98, 54]);
