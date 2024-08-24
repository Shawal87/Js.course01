// const keyword use to declare a variable that cannot be reassigned a new value 
const select  = document.querySelector("select");
const para  =  document.querySelector("p")


select.addEventListener("change",setWeather);  // "naming "

function setWeather(){
    //  To select a <select> element, you use the DOM API like getElementById() or querySelector().
    const choice = select.value;  // (select) id in html, option (value) in html 
   
if(choice ==="sunny"){
    para.textContent =
    "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
} else if (choice ==="rainy") {
    para.textContent =
    "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
}
 else if (choice === "snowing"){
    para.textContent =
    "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
 } else if (choice === "overcast") {
    para.textContent =
      "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
  } else {
    para.textContent = "";
  }
 

}


