function selectionSort(arr) {
  let n = arr.length;
  for (i = 0; i < n; i++) {
    let mid = i;
    for (j = i + 1; j < n; j++) {
        if(arr[j]<arr[mid]){
            mid = j;
        }
    }
    let temp = arr[mid];
    arr[mid] = arr[i];
    arr[i] = temp;
  }
  console.log(arr);
}
selectionSort([8,2,6,3,4,7,1,5,9]);