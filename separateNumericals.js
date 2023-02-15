function separateNumericals(arr) {
  let n = arr.length;
  let numberArray = [];
  for (i = 0; i < n; i++) {

   if(typeof(arr[i])=="number"){
    numberArray.push(arr[i]);
   }
  }
  console.log(numberArray);
}
separateNumericals(["a", "b", 5, 6, 8, "o","p", 1,5,3,6,7]);
