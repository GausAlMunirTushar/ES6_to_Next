// Rest Parameter

function Calculation(...numbers){
     let = sum = 0;
     for(let i of numbers){
         sum += i;
     }
     console.log(sum);
     
}
Calculation(1,2,3,4,5,6,7,8,9,10);

function Calculation2 (a,b,...numbers){
    console.log(a);
    console.log(b);
    console.log(numbers);
}
Calculation2(1,2,3,4,5,6,7,8,9,10);