let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
let screenVal = "";

for(item of buttons){
    item.addEventListener("click",(e)=>{
       buttonText = e.target.innerText; // saare buttons is ke andar hain 
       if(buttonText== "x"){
        buttonText = "*";
        screenVal += buttonText;
        screen.value = screenVal;
       }
       else if(buttonText == "C"){
        screenVal = "";
        screen.value = screenVal;
       }
       else if(buttonText == "="){
        screen.value = eval(screenVal);
       }else{
        screenVal += buttonText;
        screen.value = screenVal;
       }
    })
}