// Question 1 ) By how many ways we can access elements in the DOM and write about them in brief?
//
// Ans)  we can access elements in DOM by document.getElementsByTagName ,
//       document.getElementsByClassName, document.getElementById 
//       in document.getElementsByTagName & document.getElementsByClassName ,
//       the elements are stored in array format so we access a particular element by index
//       because its stored elements a name suggests, its stored all same tagName & className elements, 
//       but in document.getElementById the element are stored in a single variable format 
//       so we can directly access it because id are meant for uniquely identify so it should
//       used for single element and also the name element suggest, class name can be given to multiple
//       elements but id must be given to only one element. 


// Question 2
// Write a javascript program that will take 2 numbers from the HTML page and display them on the
// HTML page after the addition of those 2 numbers.
// Hint: Your HTML page should look like this.

function add() {
    var ele = document.getElementsByClassName("num");
    // console.log(ele);
    // var a = parseFloat(ele[0].value);
    // var b = parseFloat(ele[1].value);
    // console.log(a, b)
    // var sum = a + b;
    var sum = parseFloat(ele[0].value) + parseFloat(ele[1].value);
    var store = document.getElementById("result");
    store.value = sum;
}