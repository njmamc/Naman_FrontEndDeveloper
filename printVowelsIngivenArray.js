function printVowelsInGivenArray(arr){
    for (i=0; i<arr.length; i++){
        if(arr[i]=="a" || arr[i]=="e" || arr[i]=="i" || arr[i]=="o" || arr[i]=="u"){
            console.log(arr[i]);
        }
    }
}

printVowelsInGivenArray(["a","b","c","d","e","f","g","h"]);


