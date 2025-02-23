const text=document.querySelector("h2")
let intervalId

function chrono(){
const dateNow = new Date().getTime();

const dateRemise = new Date(2025,1,23,23,30,0,0).getTime();

let diffDate = dateRemise - dateNow

if (diffDate<0) {
    clearInterval(intervalId)
    const audio=new Audio("")
}
else{
    let days = Math.floor(diffDate / 86400000);
    let hours = Math.floor((diffDate % 86400000) / 3600000);
    let minutes = Math.floor((diffDate % 3600000) / 60000);
    let secondes = Math.floor((diffDate % 60000) / 1000);
    
    text.textContent=`${days}J ${hours}H ${minutes}min ${secondes}s`
}


}



intervalId=setInterval(function(){
    chrono()
},1000)