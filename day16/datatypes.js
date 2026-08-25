let a = "string";
let b = 123;
let c = null;
let d = undefined;
let e = true;
let f = BigInt(5);
let g = Symbol()

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);

let array = [a,b,c,d,e,f,g]
for(let x of array){
    console.log("data;",typeof(x))
}
