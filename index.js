// Using arguments object
// function addTwo(){
//     let sum = 0;
//     for (let i=0; i<(arguments.length); i++){
//         console.log(arguments[i]);
//         sum = sum + arguments[i];
//     }
//     console.log("Sum : ",sum);
// };


// Using Spread operator
function addTwo(...numbers){
    let sum = 0;
    for (let i=0; i<numbers.length; i++){
        console.log(numbers[i]);
        sum=sum+numbers[i];
    }
    console.log("sum : ",sum)
    
}

addTwo(1,5,4,4);