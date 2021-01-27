// Question 1
// What is the value of clothes[0] and why?
// const clothes = ['jacket', 't-shirt'];
// clothes.length = 0;
// console.log(clothes[0]);

// i predict thisz
// clothes[0] value is jacket because 
// array always start with 0 index and 
// that 0 index, jacket is there.

var clock;
console.log(clock);
const clothes = ["jacket", "t-shirt"];
clothes.length = 0;
console.log(clothes[0]);

// but ans : undefined 
// i think it is undefined because we done clothes 
// array's length 0 so array become null n didnt have anything 



// Question 2
// Write a Javascript program to find the sum of all elements of a given array?

var arr = [1, 12, 78, 65, 77];
var sum = 0;
for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}
console.log(sum);