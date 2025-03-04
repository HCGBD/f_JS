const canvas = document.querySelector("#canvas")
const ctx=canvas.getContext("2d")

canvas.width="1000"
canvas.height="600"

let ball={
    x:canvas.width/2,
    y:canvas.height/2,
    radius:30,
    color:"red"
}

function drawBall(){
    ctx.beginPath()
    ctx.arc(ball.x,ball.y,ball.radius,0,Math.PI*2)
    ctx.fillStyle=ball.color
    ctx.fill()
    ctx.closePath()
}
drawBall()

function moveBall(event){
    const {offsetX:newX,offsetY:newY}=event
    ball.x=newX
    ball.y=newY
   
    drawBall()
}

function move_Left_Right(){

}

canvas.addEventListener("mousemove",moveBall)