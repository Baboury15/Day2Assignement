
const newReduce = (arr, callback) => {
    let acc = arr[0];

    for(let i=1; i < arr.length; i++){
        acc = callback(acc, arr[i]);
    }

    return acc;
};


//Testing
let x = [1,2,3,4];

function test(acumulator, item){
    return item * acumulator;
}


console.log("JS Reduce");
let c = x.reduce(test);
console.log(c);

console.log("newReduce");
let a = newReduce( x, test);
console.log(a);