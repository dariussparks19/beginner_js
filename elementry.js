// Elementry code 
//Elementary

// Write a program that prints ‘Hello World’ to the screen.
function helloWorld(str){
    // prints out string
    console.log(str);
    return; 
}
helloWorld("Hello World");

// Write a program that asks the user for their name and greets them with their name.
function greetName(str){
    //takes input and sets the value  
    var str = prompt("Enter Your name:");
    // prints greetings + the input
    console.log("Greetings " + str);
    return;
}
greetName();
// Modify the previous program such that only the users Alice and Bob are greeted with their names.
function greetName(str){
    console.log("Greetings " + str);
    return;
}
greetName("Alice");
greetName("Bob");
// Write a program that asks the user for a number n and prints the sum of the numbers 1 to n
function sumofNum(n){
    // sets result variable 
    let sum = 0;
    // loops from 1 to n and increments by 1 index
    for (let i = 1; i<=n; i++){
        //stores current index and adds/stores to sum result
        sum += i
    }
    return sum;
}
sumofNum(9);
// Modify the previous program such that only multiples of three or five are considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17
function productofOddNum(n){
    for (let i = 1; i<=n; i++){
        if( i % 3 == 0 || i % 5 == 0){
            console.log(i);
        }
    }
}
productofOddNum(17);
// Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n.
function sumProd(str, n){
    let result = 0
    for(let i = 0; i < n; i++){
        if(str === "sum"){
            while(i < n){
                i += 1;
                result += i;
            }
        }
    }
    return result;
}
sumProd("sum", 5);
// Write a program that prints a multiplication table for numbers up to 12.

function multTable(n, range){
    for(let i = 1; i <= range; ++i){
        console.log(n + "*" + i + "=" + n*i);
    }
}
multTable(5, 12);
// Write a program that prints all prime numbers. (Note: if your programming language does not support arbitrary size numbers, printing all primes up to the largest number you can easily represent is fine too.)
function primeNumbers(range){
    for(let i = 1; i < range; i++){
        let result = 0;
        for(let j = 2; j < i; j++){
            if(i % j == 0){
                result = 1;
                break;
            }
        }
        if(i > 1 && result == 0){
            console.log(i);
        }
        
    }
}
primeNumbers(100);
