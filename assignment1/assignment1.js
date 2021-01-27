// Question 1
// What will the code below output to the console and why ?

console.log(1 + "2" + "2");
console.log(1 + +"2" + "2");
console.log(1 + -"1" + "2");
console.log(+"1" + "1" + "2");
console.log("A" - "B" + "2");
console.log("A" - "B" + 2);


// Question 2
// You are given a variable “marks”. Your task is to print:
// - AA if the mark is greater than 90
// - AB if the mark is greater than 80 and less than or equal to 90
// - BB if the mark is greater than 70and less than or equal to 80
// - BC if the mark is greater than 60 and less than or equal to 70
// - CC if the mark is greater than 50 and less than or equal to 60
// - CD if the mark is greater than 40 and less than or equal to 50
// - DD if the mark is greater than 30 and less than or equal to 40
// - FF if the mark is less than or equal to 30

var mark = 21;
if (mark > 90)
    console.log("AA");
if (mark > 80 && mark <= 90)
    console.log("AB");
if (mark > 70 && mark <= 80)
    console.log("BB");
if (mark > 60 && mark <= 70)
    console.log("BC");
if (mark > 50 && mark <= 60)
    console.log("CC");
if (mark > 40 && mark <= 50)
    console.log("CD");
if (mark > 30 && mark <= 40)
    console.log("DD");
if (mark <= 30)
    console.log("FF");