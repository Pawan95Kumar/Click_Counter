let box=document.getElementById("box");
let count=document.getElementById("count");
let reset=document.getElementById("reset");
let c=0;
box.addEventListener("click",()=>{
    c++;
    count.textContent=c+" ";
})
reset.addEventListener("click",()=>{
    location.reload();
})