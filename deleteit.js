fruits = ['orange', 'mango' ,'apple'];
let removed = fruits.splice(1,2,'pear','melon');

let moreFruits = ["grapefruit",'pineapple'];
let allFruits = fruits.concat(moreFruits);


const multiply = function(a,b){
return a*b
}

const product = multiply(4,6);
console.log(product);

const subtract = (a,b)=>{
 return a-b;

}

console.log(subtract(8,3))

try{
throw new Error("An Error");

}catch(error) {
console.error(error.message);}
finally{
console.log("cleanup code")
}


const delayedFunction = ()=>{
console.log("Delayed Function");
};

setTimeout(delayedFunction,2000);


const repeatedF = ()=>{
console.log("Repeated Function");}

const intervalId = setInterval(repeatedF,1000);

setTimeout(()=>{
clearInterval(intervalId);
console.log("interval stopped");
},5000)

