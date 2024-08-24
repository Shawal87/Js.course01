/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis  */
/* https://www.javascripttutorial.net/javascript-dom/javascript-select-box/ */

const myHeading = document.querySelector("h1");
myHeading.textContent ="Hello World!";


/*   let 
let iceCream  ="chocolate";
if(iceCream === "chocolate") {
    alert( "Yay,I love chocolate ice cream!");
 } else {
        alert("Awww, but chocolate is my favourite");
 }
 */

/*
functions are a way of packaging functionality that ou wish to reuse.
*/
 function mutiply (num1, num2){
     let result  = num1 + num2;
     return result;
 }

 mutiply(4,7);
 mutiply(30,20);
 mutiply(0.5,3);


 /*   events */

 document.querySelector("html").addEventListener("click", function () {
  alert(" open click ")
 });

 /*


 */         