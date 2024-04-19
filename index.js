"use strict";
//Q1: Declare a variable named greeting with the string value "Hello, World!" and print it.
console.log("QUESTION 1");
let greeting = "Hello, World!";
console.log(greeting);
//Q2:  Define two variables with integer values and calculate their sum, difference, product, and quotient.
console.log("QUESTION 2");
let num1 = 7, num2 = 5;
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
console.log("Sum: " + sum);
console.log("Difference: " + difference);
console.log("Product: " + product);
console.log("Quotient: " + quotient);
//Q3: Swap the values of two variables without using a third variable.
console.log("QUESTION 3");
let a = 1;
let b = 2;
a = a + b;
b = a - b;
a = a - b;
console.log("a: " + a);
console.log("b: " + b);
//Q4: This applies to TypeScript. Create a string variable and try changing its type.
console.log("QUESTION 4");
//let message: string = 55 as number; 
console.log("Giving error that type string is not assignable to a number");
//console.log("message: " + message);
//Q5: Use the modulus operator to find the remainder of two numbers.
console.log("QUESTION 5");
let modulus = num1 % num2;
console.log("Modulus: " + modulus);
//Q6: Increment a variable's value by 1 using two different methods.
console.log("QUESTION 6");
let counter = 0;
counter++;
console.log("Counter after 1st increment: " + counter);
counter = counter + 1;
console.log("Counter after second increment : " + counter);
//Q7: Given three boolean variables, write expressions for AND, OR, and NOT gates.
console.log("QUESTION 7");
let a1 = true, b1 = false, c1 = true;
let and = a1 && b1 && c1;
let or = a1 || b1 || c1;
let not = !a1;
console.log("AND", and);
console.log("OR", or);
console.log("NOT", not);
//Q8: Show examples of using compound assignment operators.
console.log("QUESTION 8");
let num = 10;
console.log("num += 10 ", num += 10);
console.log("num -= 10 ", num -= 10);
console.log("num*=10 ", num *= 10);
console.log("num/=10 ", num /= 10);
//Q9: Write a program to check if a number is even or odd.
console.log("QUESTION 9");
let num3 = 11;
if (num3 % 2 == 0) {
    console.log("It is even number");
}
else {
    console.log("It is odd number");
}
//Q10: Check if a person is eligible to vote.
console.log("QUESTION 10");
let age = Math.floor(Math.random());
if (age >= 18) {
    console.log("You are eligible to vote");
}
else {
    console.log("You are not eligible to vote");
}
//Q11: Assign a grade based on a numerical score.
console.log("QUESTION 11");
let score = 83;
if (score >= 85 && score <= 100) {
    console.log("A");
}
else if (score >= 75 && score < 85) {
    console.log("B");
}
else if (score >= 65 && score < 75) {
    console.log("C");
}
else if (score >= 55 && score < 65) {
    console.log("D");
}
else if (score < 55) {
    console.log("F");
}
//Q12: Find the maximum of three numbers.
console.log("QUESTION 12");
let x = Math.floor(Math.random()), y = Math.floor(Math.random()), z = Math.floor(Math.random());
if (x > y && y > z) {
    console.log("x is maximum");
}
else if (y > z && z > x) {
    console.log("y is maximum");
}
else {
    console.log("z is maximum");
}
//Q13: Check if a given year is a leap year.
console.log("QUESTION 13");
let year = 2024;
if (year % 4 == 0) {
    console.log("Leap year");
}
else {
    console.log("Not a leap year");
}
//Q14: Write a program that converts temperature from Fahrenheit to Celsius.
console.log("QUESTION 14");
let fahrenheit = 69;
let celsius = (fahrenheit - 32) * 5 / 9;
console.log(celsius);
//Q15: Check if a number is positive, negative, or zero.
console.log("QUESTION 15");
let number = Math.floor(Math.random());
if (number > 0) {
    console.log("Positive");
}
else if (number < 0) {
    console.log("Negative");
}
else {
    console.log("Zero");
}
//Q16: Write a program that prints the multiplication table of a given number up to 10.
console.log("QUESTION 16");
let number2 = Math.floor(Math.random());
for (let i = 1; i <= 10; i++) {
    console.log(number2 + " * " + i + " = " + number2 * i);
}
