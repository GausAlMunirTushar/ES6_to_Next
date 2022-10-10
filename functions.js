/* function something(...x){
    // console.log(x);
        for ( let elements of x){
        console.log(elements);
        }
}
something(1,2,3,4,5,6,7); */

// anonymous function
let myFunction = function(){
    return "Hello World";
};
console.log(myFunction());

// immediately invoked function expression
(function(){
    console.log("IIFE");
})();

// arrow function

let arrowFunction = () => {
    console.log(" I'm Arrow Function");
};
arrowFunction();

((x)=> {
    console.log("IIFE with parameter", x);
})("Tushar");
