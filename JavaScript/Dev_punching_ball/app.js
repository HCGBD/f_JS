const canvas = document.querySelector("#canvas")
const commencer=document.querySelector("#begin")
const ctx=canvas.getContext("2d")

canvas.width="1000"
canvas.height="600"

const audio=new Audio("./sound.mp3")

let ball={
    x:canvas.width/2,
    y:canvas.height/2,
    rayon:30,
    couleur:"red",
    vitesse:3
}
let dx=ball.vitesse
let dy=ball.vitesse

function drawBall(){
    ctx.beginPath()
    ctx.arc(ball.x,ball.y,ball.rayon,0,Math.PI*2)
    ctx.fillStyle=ball.couleur
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.fill()
    ctx.closePath()
}
drawBall()

function moveBall(){
    ball.x+=dx
    ball.y+=dy

    let shadow=false


    if(ball.x+ball.rayon>canvas.width || ball.x-ball.rayon<0){
       dx=-dx
       shadow=true
       audio.play()
    }
    if(ball.y+ball.rayon>canvas.height || ball.y-ball.rayon<0){
        dy=-dy  
        shadow=true
        audio.play()
    }


    if(shadow){
        canvas.style.boxShadow="1px 1px 20px 1px rgba(247, 3, 3, 1)"
     
        setTimeout(() => {
            canvas.style.boxShadow="1px 1px 20px 1px rgb(43, 243, 16)"
        }, 500);
    }

       
  

    drawBall()
}




function animate(){
    moveBall()
    requestAnimationFrame(animate)
}



// canvas.addEventListener("mousemove",moveBall)
commencer.addEventListener("click",function(){
    animate()
})