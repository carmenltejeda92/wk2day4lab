/*  Author: C. Tejeda
    Date: 10.13.2023
    Purpose: 1.   Write an function that contains an if/else statement for the following requirements:
                - If student gets 80 or higher: console log  You did a good job
                - If students get 70 or above: console log Keep trying
                - If students get 60 or above: console log ehhhh
                - If students get 55 or above: console log Not to good
                - Any grade lower than 55 is Bad Grade But You'll Get Em Next Time*/

/* function getGrade(x){
if(x >= 80){
    console.log("You did a good job!")
}else if (x >= 70){
    console.log("Keep trying")
}else if (x >=60){
    console.log("ehhhhh")
}else if (x >=56){
    console.log("Not too good")
}else if(x <= 55){
     console.log("Bad Grade but you'll get em next time!")
}
}

getGrade(80) */



// 2.   Write a function that prints out multiples of 10 up to a given input (argument)

/*function countByTen(){
for(let i = 0; i <= 100; i = i + 10){
    console.log(i)
    if(i ==100){
        i = 100 
    }
}
}

countByTen()*/



// 3.   Write a function that takes bill amount and item price and says how many quarters they'd get in return
// let x be the price of the item
// let y be the bill being paid with
// let z be the change the customer receives

/*function change(x, y){
    let z = 0
    let i = 0
    while (i < y - x){
        z += 4
        i++
    }
console.log(z)
}

change(20,50)
*/


//4.    Write a function that prints out how many bills you would recieve in change after paying a certain amount.  
//Return in as large denominations as possible. Parameters should be amount paind and amount cost
// let x be the amount of the item
// let y be the bill the customer paid with
// let z be the change the customer received 
let z = 0

function change(x, y){
    let i = 0
    while (i < y - x){
        z += 4
        i++
    }
console.log(z)
}

change(20,50)

// for (let i = 0; i <= z; i++){

// }


// 5.   Write a program that uses console.log to print all the numbers from 1 to 100 with two exceptions. 
//          1. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. 
//          2. When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

