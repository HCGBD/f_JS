let hidenn=true
const secretWord="Mon secret de mot "

let etoile = ""

for (const element of secretWord) {
   etoile+="*"
    
}



const input=document.querySelector("input")


const p= document.querySelector('p')
p.textContent=etoile

input.addEventListener("change",handleChange)

function handleChange(event){
   const p=document.querySelector("p")
   const span=document.querySelector("span")
   if (event.target.checked) {
        p.innerText=secretWord
        span.textContent="Hide"
   }
   else{
    p.innerText=etoile
    span.textContent="Display"
   }
    
}



