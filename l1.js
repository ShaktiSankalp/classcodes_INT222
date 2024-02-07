//Synchronous callback function example

function parentFunction (name,callback){
    callback();
    console.log('hey! ' + name);
}

function randomFunction(){
    console.log('hey I am callback function');

}

parentFunction("deez",randomFunction);







//Asynchronus callback function example

function parentFunction1 (name,callback){
    setTimeout(callback,2000)
    console.log('hey! ' + name);
}

function randomFunction1(){
    console.log('hey I am callback function1');

}

parentFunction1("deez1",randomFunction1);



//Asynchronus function example using arrow function and anonymous function


const parentFunction2 =  (name,callback)=>{
    setTimeout(callback,2000)
    console.log('hey! ' + name);
}







parentFunction2("deez2",()=>{
    console.log("I am callback function2");
});



// parentFunction2("deez2",function(){
//     console.log("I am callback function2");
// });