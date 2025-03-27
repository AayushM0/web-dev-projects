const temp=document.getElementById("temp");
const cel=document.getElementById("cel");
const far=document.getElementById("far");
const button=document.getElementById("button");
const error=document.getElementById("error");

button.onclick=function(){
    let temp1=(temp.value);
    if(cel.checked){
        let f=temp1*(9/5)+32;
        f=f.toFixed(1);
        error.textContent=f+ "f";
    }
    else if(far.checked){
        let c=(temp1-32)*(5/9);
        c=c.toFixed(1);
        error.textContent=c+ "c";
    }
    else{
        error.textContent="Please choose an option";
    }
}