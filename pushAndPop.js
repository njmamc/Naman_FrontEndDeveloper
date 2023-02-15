let arr = [];
let currentSizeOfArr = arr.length;

function push(newValue){
arr[currentSizeOfArr]=newValue;
currentSizeOfArr+=1
}

function pop(){
    currentSizeOfArr-=1;
    arr.length = currentSizeOfArr;
}
push(15);
push(50);
push(60);
push(10);
push(2);
push(7);
console.log(arr);
pop();
pop();
pop();
pop();
console.log(arr);