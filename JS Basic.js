//1. Print 1 - 135
//Write a program using JavaScript that will print all the numbers from 1 to 135.


/*
#initiating a for loop to cycle through numbers from 1 to 135
#logging the result on the screen
*/

for (let i = 1; i <=135 ; i++) {
    console.log(i);
}


///////////


/* 2. Print Odd Numbers 1 - 135
Write a program using JavaScript that will print all the odd numbers from 1 to 135. */

/*
#Initiating a for loop to cycle through numbers from 1 to 135
#Adding an if statement to determine if the number is odd
#Printing the odd numbers
*/
for (let i = 1; i <=135 ; i++){
    if (i%2!==0) {
        console.log(i) 
    }
}



////////////

/*
3. Sum of Printed Numbers
Write a program that will print all the numbers from 1 to 135 AND the sum of the numbers that have been printed so far. Your output should look similar to this: */

/*
#defining the "sum" variable to store the sum of the numbers in the for loop
#Initiating a for loop to cycle through numbers from 1 to 135
#logging the number and the current sum of numbers*/

var sum1=0
for (let i = 1; i <=135; i++) {
    sum1+=i
    console.log(`Number is:${i} Sum is:${sum1}`);
}

///////////////


/*4. Print the elements of an array
Given an array X = [1,4,2,12], write a program that will iterate through the array and print all numbers on the screen.
Your program should work with arrays of all sizes. */

/*
#making an empty array 
#Initiating a for loop to iterate through the array
#printing array elements on screen
*/

const x=[]
for (let i = 0; i < x.length; i++) {
    console.log(x[i])
}

/////////////////

/*5. Find Max
Given an array X, write a program that would find the maximum value of the array.
Your program should work also work with negative values (eg. X = [2,-3,-1]) and zero.
*/

/*
#making an empty array
#defining a variable for storing the maximum value called max
#Initiating a for loop to iterate through the array
#creating an if condition to compare the max variable to the array element
#assigning the new value for max if the condition is true
#printing the max element
*/

const y=[1,15,3,16,17,2]
var max=y[0];
for (let i = 0; i < y.length; i++) {
    if (y[i]>max) {
        max=y[i];
    }
}
console.log(max);


/////////

/*6.Given an array X, write a program that will return the average value of all elements in the array.
For example, for array X = [2,1,3] your output should be 2.*/


/*
#defining an array x
#defining variables called sum and avg for the sum and the average of the numbers in the array x
#a for loop to cycle through the array x
#giving a value for sum and avg based on the loop
*/


let x1=[5,10,15]
let sum=0
let avg=0
for (let i = 0; i < x1.length; i++) {
    sum+=x1[i]
    avg=sum/x.length
}
console.log(avg)

////////////
/*
7. Eliminate the Negatives
Given an array X, write a program that will remove all negative numbers and replace them with a 0. For example, for array X = [2,-1,4,-3]
*/

/*
#defining the array of X
#creating a for loop to cycle through the array x
#if condition to check if the number is negative
#replace the value of the negative number with 0
#printing the result 
*/

/*
const x2=[2,-1,4,-3]
for (let i = 0; i < x2.length; i++) {
    if (x2[i]<0) {
        x2[i]=0
    }
}
console.log(x);
*/

/////////////////

/* 8. Number to String
Write a program that takes an array of numbers and turns the negative values into strings.
*/

/*
*/

const x3=[1,-4,0,-1]
for (let z = 0; z < x3.length; z++) {
    if (x3[z]<0) {
        x3[z]='Turing'
    }
}
    console.log(x3);