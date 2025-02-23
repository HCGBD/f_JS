const canvas= document.getElementById("canvas")
const saveBnt=document.getElementById("save")
const colorBnt=document.getElementById("color-picker")
const clearBnt=document.getElementById("clear")
const uploadBnt=document.getElementById("upload")
const cancelBnt=document.getElementById("cancel")

canvas.width=900
canvas.height=600
const ctx=canvas.getContext("2d")
let couleur
let Cx,Cy
let isDrawing=false



function startDrawing(event){
    isDrawing=true
    ctx.beginPath();
    ctx.strokeStyle=couleur || "black"

    const {offsetX,offsetY}=event
    ctx.moveTo(offsetX,offsetY);

}

function stopDrawing(){
    isDrawing  = false
}

function dessine(event){
  if (isDrawing) {
    // console.log("i");
    const {offsetX,offsetY}=event
    Cx=offsetX
    Cy=offsetX
    ctx.lineTo(offsetX,offsetY)

    ctx.stroke();
  }
    
}

function save(){
    // console.log(canvas.toDataURL());
    const imgURL=canvas.toDataURL()
    const fileName="skecth-"+Date.now()
    const link = document.createElement("a")
    // link.target="_black";

    link.download=fileName

    link.href=imgURL

    document.querySelector("body").append(link)

    link.click()
    
}

function changeColor (color){
  console.log(color);
  
  ctx.fillStyle=color
}

// (function(){

// })()

(()=>{
    saveBnt.addEventListener("click",save)
})();

canvas.addEventListener("mousedown",startDrawing)
canvas.addEventListener("mouseup",stopDrawing)
canvas.addEventListener("mousemove",dessine)

colorBnt.addEventListener("change",function(){
  
  couleur=colorBnt.value
  
})

clearBnt.addEventListener("click",function(){
  ctx.clearRect(0,0,canvas.width,canvas.height)
})

cancelBnt.addEventListener("click",function(){
  console.log(Cx,Cy);
  
  ctx.clearRect(Cx,Cy,canvas.width,canvas.height)
})