function display(){
    const now=new Date();
    const hours=now.getHours().toString().padStart(2,0);
    const newtime=hours > 12 ? `PM` : `AM`;
    const minutes=now.getMinutes().toString().padStart(2,0);
    const seconds=now.getSeconds().toString().padStart(2,0);
    const currtime=`${hours%12} : ${minutes} : ${seconds}` + " " + newtime;
    const clock=document.getElementById("clock");
    clock.textContent=currtime;

}

display();
setInterval(display,1000);