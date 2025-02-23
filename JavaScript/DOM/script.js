
function handClik(event){

    // console.log(event);
    
    // alert('Hello Word !')
    const p = document.querySelector("p")
    p.textContent="Nouveau Texte "
    p.querySelector("strong")

}


function handleChange(event){

    // console.log("Le texte a changer ")

    const value= event.target.value;

    // console.log(event);
    

    // console.log(value);

    // const para= document.createElement("p")

    const p = document.querySelector("#searchValue")

    // para.textContent=value;

    p.textContent=value

    // body.append(p)


    
}


// document.addEventListener('click',handClik)
// document.addEventListener('dblclick',handClik)


const body=document.querySelector("body")
const form = document.querySelector("form")
const button= document.querySelector("button")
const inputS = document.getElementById("search")

// body.addEventListener("click",handClik)

// console.log(body.childNodes);
// console.log(body.childElementCount);

// console.log(form);
// console.log(form.parentElement);

// console.log(button);
// console.log(button.parentElement);
// console.log(button.parentElement.parentElement);


// Creer un element 

// const element =document.createElement("p")

// // Ajouter du texte 

// element.textContent="Nouveau Paragraphe"

// console.log(element.textContent);

// L'inserer dans le DOM

// body.append(element)

inputS.addEventListener("input",handleChange)
















