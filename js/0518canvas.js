//先抓到畫面上的cv元素
var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")

//設定尺寸
canvas.width= 400
canvas.height= 400

var time=0
function draw(){
  time++
  ctx.clearRect(0,0,400,400) //清除畫布上的軌跡
  
  //座標繪製
  ctx.beginPath()
  for(var i=0;i<10;i++){
    let pos = i*50 //每格50劃一條線
    ctx.moveTo(pos,0) //x軸起點
    ctx.lineTo(pos,400) //x軸終點
    ctx.fillText(pos,pos,10) //x軸繪製文字(內容,x位置,y位置)
    //
    ctx.moveTo(0,pos) //y軸起點
    ctx.lineTo(400,pos) //y軸終點
    ctx.fillText(pos,10,pos) //y軸繪製文字(內容,x位置,y位置)
  }
  ctx.strokeStyle = "rgba(0,0,0,0.1)"
  ctx.stroke()
  
  
  
  
  //風車繪製開始
  
  //地面上的線
  ctx.beginPath() //清掉先前路徑
  ctx.moveTo(25,350)
  ctx.lineTo(375,350)
  ctx.lineWidth = 2 //被吃掉看不到，所以增加寬度
  ctx.strokeStyle="black" //原先沿用到上個色彩設定，所以改回來黑色
  ctx.stroke()
  

  
    //f1
    ctx.moveTo(140,315)
    ctx.lineTo(260,315)
    ctx.lineTo(260,350)
    ctx.lineTo(140,350)
    ctx.closePath()
    ctx.fillStyle="#632f25"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
    //f2
    ctx.beginPath()
      ctx.moveTo(175,125)
      ctx.lineTo(225,125)
      ctx.lineTo(250,300)
      ctx.lineTo(150,300)
    ctx.closePath()
    ctx.fillStyle="#fce5e1"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
    //三角形尖塔
    ctx.beginPath()
      ctx.moveTo(150,125)
      ctx.lineTo(200,75)
      ctx.lineTo(250,125)
    ctx.closePath()
    ctx.fillStyle="#f2e8bb"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
  //leave1
    ctx.beginPath()
      ctx.moveTo(125,25)
      ctx.lineTo(100,75)
      ctx.lineTo(300,125)
      ctx.lineTo(275,175)
    ctx.closePath()
    ctx.fillStyle="#white"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
 //leave2
    ctx.beginPath()
      ctx.moveTo(275,25)
      ctx.lineTo(300,75)
      ctx.lineTo(100,125)
      ctx.lineTo(125,175)
    ctx.closePath()
    ctx.fillStyle="#white"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke() 
  
    //大門
    ctx.beginPath()
      ctx.arc(200,270,15,Math.PI*2,Math.PI,true)
      ctx.lineTo(185,300)
      ctx.lineTo(215,300)
    ctx.closePath()
      ctx.fillStyle="white"
      ctx.fill()
      ctx.strokeStyle="black"
      ctx.stroke()
  
   //平台
    ctx.moveTo(130,315)
    ctx.lineTo(270,315)
    ctx.lineTo(270,300)
    ctx.lineTo(130,300)
    ctx.closePath()
    ctx.fillStyle="#c97769"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()

  
  
  //風箏1
      ctx.beginPath()
        ctx.moveTo(75,350)
        ctx.lineTo(75,330-mouse.y/5)
        ctx.lineTo(65,310-mouse.y/5)
        ctx.lineTo(75,300-mouse.y/5)
        ctx.lineTo(85,310-mouse.y/5)
        ctx.lineTo(75,330-mouse.y/5)
      ctx.closePath()
      ctx.fillStyle="#D3222F"
      ctx.fill()
      ctx.strokStyle = "black"
      ctx.stroke()  
  
  //風箏2
      ctx.beginPath()
        ctx.moveTo(325,350)
        ctx.lineTo(325,330-mouse.y/5)
        ctx.lineTo(315,310-mouse.y/5)
        ctx.lineTo(325,300-mouse.y/5)
        ctx.lineTo(335,310-mouse.y/5)
        ctx.lineTo(325,330-mouse.y/5)
      ctx.closePath()
      ctx.fillStyle="#D3222F"
      ctx.fill()
      ctx.strokStyle = "black"
      ctx.stroke()
  
  //車子  
    ctx.fillStyle="white"
    let carx = time%440-50
    ctx.fillRect(carx,330,100,35)
    ctx.strokeRect(carx,330,100,35)
  
    ctx.beginPath()
    ctx.arc(carx+10,365,5,0,Math.PI*2)
    ctx.arc(carx+30,365,5,0,Math.PI*2)
    ctx.arc(carx+50,365,5,0,Math.PI*2)
    ctx.arc(carx+70,365,5,0,Math.PI*2)
    ctx.arc(carx+90,365,5,0,Math.PI*2)
  
    ctx.fillStyle="black"
    ctx.fill()
    ctx.stroke()
  
    //確認滑鼠事件有抓取到
    ctx.beginPath()
    ctx.arc(mouse.x,mouse.y,5,0,Math.PI*2)
    ctx.fillStyle="black"
    ctx.fill()
}
// draw()

//設定連續繪製
setInterval(draw,30) //不斷畫圖，每隔30毫秒，約一秒鐘執行30次

//定義變數為物件，x,y分別紀錄滑鼠位置
var mouse = {
  x: 0,
  y: 0
} 

//事件監聽，取得滑鼠位置
canvas.addEventListener("mousemove",function(evt){
  mouse.x = evt.offsetX  //相對於畫布上的距離
  mouse.y = evt.offsetY
})
  
  