const value=document.getElementById("value");
const clear=document.getElementById("clear");

function todisplay(elemennt){
    value.textContent+=elemennt;
}

clear.onclick=function(){
    value.textContent = "";
}

function calculate(){
    try
    {value.textContent= String(Number(eval(value.textContent)).toFixed(2));}

    catch(error){
        value.textContent="error";
    }
}

function backspace(){
    value.textContent=value.textContent.slice(0,-1);
}