let count=0;
const btn=document.getElementById("cli")
const score=document.querySelector("span")

score.textContent=count

function increment(){
    count=count+1
    
    score.textContent=count
}



btn.addEventListener("click",increment)