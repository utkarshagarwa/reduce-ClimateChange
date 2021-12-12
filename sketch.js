var past,pastImg,present,presentImg,future,futureImg,next,nextImg,dos,dosImg,touches,time,pretime



function preload(){
pastImg = loadImage("pa.jpeg")  
presentImg = loadImage("pre.jpeg")
futureImg = loadImage("fut.jpeg")
nextImg = loadImage("WhatsApp Image 2021-12-11 at 3.32.14 AM.jpeg")
dosImg = loadImage("dont.jpeg")

}

function setup() {
  createCanvas(640, 360);
  past = createSprite(320,180)
  past.addImage(pastImg)
  past.scale = 0.5
  
  time = createSprite(10,10,0.01,6)
  time.velocityX = 2
  
   pretime = createSprite(10,10,0.01,6)
  pretime.velocityX = 1
 // present = createSprite(180,320)
 // present.addImage(presentImg)
 // present.scale = 0.28
  
//  future = createSprite(180,530)
  //future.addImage(futureImg)
  //future.scale = 0.3
  
 // next.depth = present.depth
 // next.depth= present.depth+1
 // next.visible = false
 // next = createSprite(560,330)
 // next.addImage(nextImg)
 // next.scale = 0.2
  
}

function draw() {
  background(180);
 
 
  
// if((touches.length>0 || mousePressedOver(next))){
  // present.visible = false
 //  next1.visible = false
   
   //future = createSprite(320,180)
   //future.addImage(futureImg)
 //  future.scale = 0.5
   
   //touches = []
 //}

if(time.x>640){
  past.visible = false
  present = createSprite(320,180)
  present.addImage(presentImg)
  present.scale = 0.5
  
}
if(pretime.x>640){
 present.visible = true
  future = createSprite(320,180)
  future.addImage(futureImg)
  future.scale = 0.5
   next = createSprite(560,330)
  next.addImage(nextImg)
  next.scale = 0.2
 //  next.visible = true
 // pretime = createSprite(10,10,2,6)
  //pretime.velocityX = 5    
}
  if((mousePressedOver(next)|| touches.length>0)) {
     future.visible = false 
     next.visible = false
     dos = createSprite(320,180)
     dos.addImage(dosImg)
  //   dos.scale = 0.5
      touches = [];
    }
drawSprites()  
}



