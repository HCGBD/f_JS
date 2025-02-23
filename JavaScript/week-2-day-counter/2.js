let hidenn=true
const secretWord="Mon secret de mot "

let etoile = ""

for (const element of secretWord) {
   etoile+="*"
    
}



const btnDisplay=document.getElementById("display")
// const btnHiden=document.getElementById("hide")
const p= document.querySelector('p')
p.textContent=etoile




function display(){

    if (hidenn) {
 
        p.textContent=secretWord
        hidenn=false
        btnDisplay.textContent="Hide"
       
    }
    else{
        p.textContent=etoile
        hidenn=true 
        btnDisplay.textContent="Display"
    }
 
}

function hiden(){
    // alert(hidenn)
    if (!hidenn) {
        p.textContent=etoile
        hidenn=true
    }
}

btnDisplay.addEventListener("click",display)
// btnDisplay.addEventListener("mouseup",display)
// btnHiden.addEventListener("click",hiden)