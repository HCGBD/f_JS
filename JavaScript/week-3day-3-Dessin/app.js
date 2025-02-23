const canvas= document.getElementById("canvas")
canvas.width=700
canvas.height=700
const ctx=canvas.getContext("2d");

ctx.beginPath();
// ctx.moveTo(0,0)
// ctx.lineTo(100,100)
// ctx.stroke();

// ctx.moveTo(0,0)
// ctx.lineTo(100,0)
// ctx.lineTo(100,100)
// ctx.lineTo(0,0)

// ctx.stroke()


// Triangle qui touche pas les bords 
// ctx.moveTo(150,10)
// ctx.lineTo(100,80)
// ctx.lineTo(190,80)
// ctx.lineTo(150,10)


ctx.rect(50,50,500,400)

ctx.rect(100,100,400,300)

ctx.fillStyle="gray";
ctx.fillRect(100,100,400,300)

ctx.stroke()

// ctx.clearRect(200,20,300,200)

// ctx.stroke()


ctx.strokeStyle="red"

ctx.moveTo(300,400)
ctx.lineTo(700,700)

ctx.moveTo(300,400)
ctx.lineTo(0,700)

ctx.stroke()


