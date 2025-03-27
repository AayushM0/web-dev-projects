


    const button=document.getElementById("roll");
    button.onclick=function()
    {
        let numdice=parseInt(document.getElementById("rolls").value);
const res=document.getElementById("result");
const im=document.getElementById("images");
    
    let values=[];
    let images=[];
    for(let i=0;i<Number(numdice);i++){
        let num=Math.floor((Math.random()*5)+1);
        values.push(num);
        images.push(`<img src="images/${num}.svg" alt="Dice ${num}">`);
    }
    // let i=0;
    // while(i<Number(numdice)){
    //     let num=Math.floor((Math.random()*5)+1);
    //     values.push(num);
    //     i++;
    //     images.push(`<img src="images/${num}.svg" alt="Dice ${num}">`);

    // }

    res.textContent=`The Rolled Dice are : ${values.join(", ")}`;
    im.innerHTML=images.join("");}

