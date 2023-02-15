function searchElementInArray(arr, element){
let n = arr.length;
for(i=0; i<n; i++){
    if(arr[i]===element){
        console.log(element + " number is on " + i + " index in the given array")
    }
}
}
searchElementInArray([5,6,30,78,68,50,24,35,36], 50);