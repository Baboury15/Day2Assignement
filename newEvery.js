const newEvery = (arr, callback) =>{

    for(let i=0; i < arr.length; i++){
        if(!callback(arr[i])){
            return false; 
        }
    }

    return true;
};

//Testing
let x =[1,2,3,4];

console.log("JS Every");
let b = x.every( item => item >0);
console.log(b);

console.log("newEvery");
let a = newEvery(x,  item => item> 0);
console.log(a);