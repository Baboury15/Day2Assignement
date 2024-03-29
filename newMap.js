
const newMap = (arr, callback) => {
    newArr =[];

    for(let i=0; i< arr.length; i++){
        let item = callback(arr[i]);
        newArr.push(item);
    }
    return newArr;

}

//Testing 
let a = [1,2,3];

function test(item){
    return item*item;
}

console.log("JavaScript Map x")
let x = a.map( test);
console.log(x);

console.log("MyMap y")
let y = newMap(a, test);
console.log(y);

