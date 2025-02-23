const canvas= document.getElementById("canvas")
const saveBnt=document.getElementById("save")
const colorBnt=document.getElementById("color-picker")
const clearBnt=document.getElementById("clear")
const uploadBnt=document.getElementById("upload")
const cancelBnt=document.getElementById("cancel")

canvas.width=900
canvas.height=600
const ctx=canvas.getContext("2d")

let isDrawing=false



function startDrawing(){
    isDrawing=true
    ctx.beginPath();
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

// (function(){

// })()

(()=>{
    saveBnt.addEventListener("click",save)
})();

canvas.addEventListener("mousedown",startDrawing)
canvas.addEventListener("mouseup",stopDrawing)
canvas.addEventListener("mousemove",dessine)