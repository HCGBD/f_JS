const canvas=document.getElementById("canvas")
canvas.width=600
canvas.height=480
const ctx= canvas.getContext("2d")
ctx.fillStyle="gray"

let x =50,y=50,w=100,h=70;


canvas.addEventListener("mousemove",moveRectangle)


function moveRectangle(event){
    console.log(event);
    const {offsetX:newX,offsetY:newY}=event

    // console.log(newX,newY);

    x=newX
    y=newY


    draw()
    
    
    
}

function draw(){
   
    // ctx.fillRect(100,100,300,200)
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.fillRect(x,y,w,h)
}

draw()

