var gamestate=0,selectedA=0,selectedB=0,selectedC=0,selectedD=0,wrgcount=0,correct1
var a1,a2,a3,a4,b1,b2,b3,b4
var c1,c2,c3,c4,d1,d2,d3,d4



function preload()
{
	playimg=loadImage("play.png")
  soundimg=loadImage("base.png")
  level1img=loadImage("level1.png")
  level2img=loadImage("level2.png")
  level3img=loadImage("level3.png")
  level4img=loadImage("level4.png")
  scene=loadImage("back.jpg")
  a1pic=loadImage("na.png")
  a2pic=loadImage("mn.png")
  a3pic=loadImage("al.png")
  a4pic=loadImage("ca.png")
  titleimg=loadImage("title.png")
  b3pic=loadImage("S.png")
  b1pic=loadImage("p.png")
  b4pic=loadImage("O.png")
  b2pic=loadImage("cl.png")
  c1pic=loadImage("c.png")
  c2pic=loadImage("c2.png")
  c3pic=loadImage("H2.png")
  c4pic=loadImage("S.png")
  d2pic=loadImage("O.png")
  d1pic=loadImage("O1.png")
  d4pic=loadImage("H6.png")
  d3pic=loadImage("O4.png")
  correctimg=loadImage("correct.png")
  wrongimg=loadImage("wrong.png")
	b=loadImage("back.png")
}

function setup() {
	createCanvas(750,600);
  

	playbutton=createSprite(370,300,150,45)
  playbutton.addImage(playimg)
  playbutton.scale=0.5

  back=createSprite(800,50,30,30)
	back.addImage(b)
  back2=createSprite(800,100,30,30)
	back2.addImage(b)

  //soundoff=createSprite(700,50,30,30)
  //soundoff.addImage(soundimg)
  //soundoff.scale=0.5

  Title=createSprite(375,150,100,100)
  Title.addImage(titleimg)
  Title.scale=1.2
 
  
  level2=createSprite(750*1.5,200,200,50)
  level2.addImage(level1img)
  
  level3=createSprite(750*1.5,400,200,50)
  level3.addImage(level2img)

  

  cam=createSprite(375,100,100,100)
  cam.visible=false
  
  correct=createSprite(1125,300,50,50)
  correct.shapeColor='green'
  correct.addImage(correctimg)

  wrong=createSprite(1125,300,50,50)
  wrong.shapeColor='red'
  wrong.addImage(wrongimg)

  correct1=createSprite(1125,300,50,50)
  correct1.shapeColor='green'
  correct1.addImage(correctimg)

  wrong1=createSprite(1125,300,50,50)
  wrong1.shapeColor='red'
  wrong1.addImage(wrongimg)

  a1=createSprite(850,200,30,30)
  a1.addImage(a1pic)
  a2=createSprite(850,300,30,30)
  a2.addImage(a2pic)
  a3=createSprite(850,400,30,30)
  a3.addImage(a3pic)
  a4=createSprite(850,500,30,30)
  a4.addImage(a4pic)

  b1=createSprite(1400,200,30,30)
  b1.addImage(b1pic)
  b2=createSprite(1400,300,30,30)
  b2.addImage(b2pic)
  b3=createSprite(1400,400,30,30)
  b3.addImage(b3pic)
  b4=createSprite(1400,500,30,30)
  b4.addImage(b4pic)

  c1=createSprite(850,200,30,30)
  c1.addImage(c1pic)
  c2=createSprite(850,300,30,30)
  c2.addImage(c2pic)
  c3=createSprite(850,400,30,30)
  c3.addImage(c3pic)
  c4=createSprite(850,500,30,30)
  c4.addImage(c4pic)

  d1=createSprite(1400,200,30,30)
  d1.addImage(d1pic)
  d2=createSprite(1400,300,30,30)
  d2.addImage(d2pic)
  d3=createSprite(1400,400,30,30)
  d3.addImage(d3pic)
  d4=createSprite(1400,500,30,30)
  d4.addImage(d4pic)


    


  
}


function draw() {
  rectMode(CENTER);
  background(scene);
  playbutton.visible=false


  
 
  level2.visible=false
  level3.visible=false
 
  back.visible=true
  back2.visible=true
  correct.visible=false
  wrong.visible=false
  correct1.visible=false
  wrong1.visible=false
  a1.visible=false
  a2.visible=false
  a3.visible=false
  a4.visible=false
  b1.visible=false
  b2.visible=false
  b3.visible=false
  b4.visible=false
  c1.visible=false
  c2.visible=false
  c3.visible=false
  c4.visible=false
  d1.visible=false
  d2.visible=false
  d3.visible=false
  d4.visible=false

  camera.position.x=cam.x
  
  //soundoff.x=cam.x+340

  if(gamestate===0){

    playbutton.visible=true
    back.visible=false
    back2.visible=false

    if(cam.x<375){
      cam.velocityX=0
    }
    

    if(mousePressedOver(playbutton)){
      gamestate=1
      
      
    }
    
  }
  if(gamestate===1){
    if(cam.x<1000){
      cam.velocityX=13
    }
    if(cam.x>1125){
      cam.velocityX=0
    }
    
    level2.visible=true
    level3.visible=true
    
    back.visible=false
    back.y=20
    if(mousePressedOver(back2)&&cam.x>=1125){
      gamestate=0
      if(cam.x>1125){
        cam.velocityX=-13
      }
      
      }
      selectedA=0
      selectedB=0
      selectedC=0
      selectedD=0
    
    if(cam.x>=1125){
    
    if(mousePressedOver(level2)){
      gamestate=3
    }
    if(mousePressedOver(level3)){
      gamestate=4
    }
    
  }
  }
 
  



  if(gamestate===3){
    back2.visible=false
    if(mousePressedOver(back)){
      gamestate=1
    }
    a1.visible=true
    a2.visible=true
    a3.visible=true
    a4.visible=true
    b1.visible=true
    b2.visible=true
    b3.visible=true
    b4.visible=true

    if(mousePressedOver(a1)){
      selectedA=1
    }
    if(mousePressedOver(a2)){
      selectedA=2
    }
    if(mousePressedOver(a3)){
      selectedA=3
    }
    if(mousePressedOver(a4)){
      selectedA=4
    }

    if(mousePressedOver(b1)){
      selectedB=1
    }
    if(mousePressedOver(b2)){
      selectedB=2
    }
    if(mousePressedOver(b3)){
      selectedB=3
    }
    if(mousePressedOver(b4)){
      selectedB=4
    }


    if((selectedA===1&&selectedB===2)||(selectedA===2&&selectedB===4)||(selectedA===3&&selectedB===1)||(selectedA===4&&selectedB===3)){
      correct.visible=true
      wrong.visible=false
      selectedA=5
      selectedB=5
    
    }else{
      wrong.visible=true
    }
    
    if(selectedA===0||selectedB===0){
      wrong.visible=false
    }
    if(selectedA===5||selectedB===5){
      correct.visible=true
      wrong.visible=false
    }
  }



  if(gamestate===4){
    back2.visible=false
    if(mousePressedOver(back)){
      gamestate=1
    }
    if(mousePressedOver(back)){
      gamestate=1
    }
    c1.visible=true
    c2.visible=true
    c3.visible=true
    c4.visible=true
    d1.visible=true
    d2.visible=true
    d3.visible=true
    d4.visible=true

    if(mousePressedOver(c1)){
      selectedC=1
    }
    if(mousePressedOver(c2)){
      selectedC=2
    }
    if(mousePressedOver(c3)){
      selectedC=3
    }
    if(mousePressedOver(c4)){
      selectedC=4
    }

    if(mousePressedOver(d1)){
      selectedD=1
    }
    if(mousePressedOver(d2)){
      selectedD=2
    }
    if(mousePressedOver(d3)){
      selectedD=3
    }
    if(mousePressedOver(d4)){
      selectedD=4
    }


    if((selectedC===1&&selectedD===2)||(selectedC===2&&selectedD===4)||(selectedC===3&&selectedD===1)||(selectedC===4&&selectedD===3)){
      correct1.visible=true
      wrong1.visible=false
      
    }else{
      wrong1.visible=true
      correct1.visible=false
    }
    
    if(selectedD===0||selectedC===0){
      wrong1.visible=false
    }
    
  }




 
  
  drawSprites();
  
  textSize(20)
 
}



