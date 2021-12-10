const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img,Polygon;


function preload(){
  Lady=loadImage("lady.png");
  polygon_img=loadImage("polygon.png");
  L1=loadImage("I1.png");
  fondo=loadImage("fondo.png");
  f2=loadImage("fondo2.jpg");
  s2=loadImage("Sirena2.png");
  p1=loadImage("p1.png");
  p2=loadImage("p2.png");
  piedra=loadImage("Piedra1.png");
  piedra2=loadImage("Piedra2.png");
  araña=loadImage("araña.png");
  c1=loadImage("c1.png");
  c2=loadImage("c2.png");
  caracol=loadImage("caracol.png");
  G1=loadImage("guardia1.png");
  sirena=loadImage("Sirena1.png");
  e1=loadImage("I2.png");
  f3=loadImage("f3.png");
  E2=loadImage("espada2.png");
  t1=loadImage("Texto1.png");
  t2=loadImage("Texto2.png");
  t3=loadImage("Texto3.png");
  t4=loadImage("Texto 4.png");
  t5=loadImage("Texto5.png");
  t6=loadImage("t6.png");
  t7=loadImage("t7.png");
  r1=loadImage("rayo.png");
  r2=loadImage("rayo2.png");
  lady2=loadImage("lady2.png");
  lady3=loadImage("lady3.png");
  lila=loadImage("lila.png");
  chat=loadImage("chat.png");
  f4=loadImage("f4.png");
}
function setup() {
  createCanvas(1300,500);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  Polygon = Bodies.circle(50,50,50);
  World.add(world,Polygon);

  La=createSprite(1000,270,20,20);
  La.addImage(Lady);
  La.scale=0.5;

  Pl=createSprite(10,50,20,20);
  Pl.addImage(L1);
  Pl.scale=0.7;

  Guardia=createSprite(650,250,100,100);
  Guardia.addImage(G1);
  Guardia.scale=2.3;
  Guardia.visible=false;
  //Guardia.debug=false;

  fondo3=createSprite(630,250,1100,1100);
  fondo3.addImage(f3);
  fondo3.scale=1.4;
  fondo3.visible=false;

  adrien=createSprite(300,250,150,150);
  adrien.addImage(chat);
  adrien.scale=0.75;
  adrien.visible=false;

  fondo4=createSprite(1050,250,1100,1100);
  fondo4.addImage(f4);
  fondo4.scale=0.7;
  fondo4.visible=false;

  Sirena=createSprite(1190,270,20,20);
  Sirena.addImage(sirena);
  Sirena.scale=0.6;
  Sirena.visible=false;
  //Sirena.debug=true;
  Sirena.setCollider("rectangle",0,0,120,120);

  Araña=createSprite(680,50,100,100);
  Araña.addImage(araña);
  Araña.scale=0.6;
  Araña.visible=false;

  Cangrejo=createSprite(750,250,100,100);
  Cangrejo.addImage(c1);
  Cangrejo.scale=0.6;
  Cangrejo.visible=false;

  Caracol=createSprite(500,470,100,100);
  Caracol.addImage(caracol);
  Caracol.scale=0.6;
  Caracol.visible=false;

  Caracol2=createSprite(700,250,100,100);
  Caracol2.addImage(caracol);
  Caracol2.scale=0.23;
  Caracol2.visible=false;

  S2=createSprite(120,250,100,100);
  S2.addImage(s2);
  S2.scale=0.7;
  S2.visible=false;

  P1=createSprite(250,80,100,100);
  P1.addImage(p1);
  P1.scale=0.5;
  P1.visible=false;

  P2=createSprite(650,450,100,100);
  P2.addImage(p2);
  P2.scale=0.5;
  P2.visible=false;

  c3=createSprite(450,350,20,900);
  c3.addImage(r1);
  c3.scale=0.4;
  c3.visible=false;

  c5=createSprite(700,150,20,900);
  c5.addImage(r2);
  c5.scale=0.4;
  c5.visible=false;

  c4=createSprite(940,250,20,500);
  c4.addImage(r2);
  c4.scale=0.5;
  c4.visible=false;

  Escudo=createSprite(80,200,50,50);
  Escudo.addImage(e1);
  Escudo.scale=0.5;
  Escudo.visible=false;

  Piedra=createSprite(450,50,50,50);
  Piedra.addImage(piedra);
  Piedra.scale=0.6;
  Piedra.visible=false;

  Piedra2=createSprite(750,120,50,50);
  Piedra2.addImage(piedra2);
  Piedra2.scale=0.35;
  Piedra2.visible=false;

  Espada2=createSprite(230,220);
  Espada2.addImage(E2);
  Espada2.scale=0.6;
  Espada2.visible=false;

  Texto=createSprite(180,120);
  Texto.addImage(t1);
  Texto.scale=0.5;
  Texto.visible=true;

  Texto2=createSprite(540,250);
  Texto2.addImage(t2);
  Texto2.scale=0.5;
  Texto2.visible=false;

  Texto4=createSprite(1150,250);
  Texto4.addImage(t4);
  Texto4.scale=0.4;
  Texto4.visible=false;

  Texto5=createSprite(600,250);
  Texto5.addImage(t5);
  Texto5.scale=0.5;
  Texto5.visible=false;

  Texto6=createSprite(150,100);
  Texto6.addImage(t6);
  Texto6.scale=0.5;
  Texto6.visible=false;

  Texto7=createSprite(1200,20);
  Texto7.addImage(t7);
  Texto7.scale=0.5;
  Texto7.visible=false;

  slingShot= new SlingShot(this.Polygon,{x:1100,y:200});
  
  ground = new Ground();
  stand1 = new Stand(390,400,600,20);
  stand3 = new Stand(390,300,200,10);
  stand2 = new Stand(750,250,250,10);
  stand5 = new Stand(410,190,20,10);
  stand6 = new Stand(710,140,200,10);
 
  //nivel uno
  block1 = new B5(300,395);
  block2 = new B3(470,380,10,10);
  block3 = new B2 (370,380,10,10);
  //nivel dos
  block4 = new B6(450,280,30,40);
  block5= new B4(370,280,35,60);
  //parte superior
  block7 = new B1(410,90,30,40);

// segunda torre 
  block8 = new B4(650,190,30,40);
  block9 = new B6(750,190,30,40);
  //nivel dos
  block6 = new B1(710,130,30,40);

  

 
}
function draw() {
  background(fondo); 
 
  textSize(20);
  fill("lightyellow");
  
  Pl.x=Polygon.position.x;
  Pl.y=Polygon.position.y;


  //ground.display();
  stand1.display();
  stand2.display();
  slingShot.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  fill("pink");
  block3.display();
  block4.display();
  fill("turquoise");
  block5.display();
  fill("grey");
  block6.display();
  block7.display();
  block8.display();
  block9.display();
    

  if(keyDown("DOWN_ARROW")){
    Sirena.y=Sirena.y+10;
    Texto2.destroy();
    }
  
    if(keyDown("UP_ARROW")){
      Sirena.y=Sirena.y-10;
      
    }

    if(keyDown("LEFT_ARROW")){
      Sirena.x=Sirena.x-10;
      Cangrejo.velocityX=5;
      Espada2.velocityX=5;
      Piedra.velocityX=5;
      P2.velocityX=5;
      }

      if(keyDown("RIGHT_ARROW")){
        Sirena.x=Sirena.x+10;
        
        }

        if(keyDown("A")){
          Texto4.visible=true;
        }
        else{
          Texto4.visible=false;
        }
      
    
if(c3.isTouching(Sirena)||Cangrejo.isTouching(Sirena)||Espada2.isTouching(Sirena)||Piedra.isTouching(Sirena)||P2.isTouching(Sirena)){
  Sirena.destroy();
  Cangrejo.destroy();
  Espada2.destroy();
  Piedra.destroy();
  P2.destroy();
  fondo3.visible=true;
  S2.x=650;
  Piedra2.visible=true;
  Texto6.visible=true;

}

if(Araña.isTouching(Sirena)||Caracol.isTouching(Sirena)||c3.isTouching(Sirena)||Caracol2.isTouching(Sirena)||c4.isTouching(Sirena)||c5.isTouching(Sirena)){
  Sirena.destroy();
  Cangrejo.destroy();
  Espada2.destroy();
  Piedra.destroy();
  P2.destroy();
  fondo3.visible=true;
  S2.x=650;
  Piedra2.visible=true;
  Araña.visible=false;
  Caracol.visible=false;
  Caracol2.visible=false;
  c3.visible=false;
  c4.visible=false;
  c5.visible=false;
  P1.visible=false;
  Texto6.visible=true;

}

if(Espada2.x>1200){
  Araña.visible=true;
  Caracol.visible=true;
  Caracol2.visible=true;
  c3.visible=true;
  c4.visible=true;
  c5.visible=true;
  P1.visible=true;
  Sirena.addImage("Lady2",lady2);
  Sirena.changeImage("Lady2");
  Sirena.scale=0.5;
  Texto7.visible=true;
}

if(keyDown("S")){
  Sirena.x=800;
  Sirena.y=130;
}
  
if(keyDown("C")){
  Sirena.x=800;
  Sirena.y=330;
}

if(keyDown("E")){
  Sirena.x=580;
  Sirena.y=360;
}

if(keyDown("R")){
  Sirena.x=580;
  Sirena.y=160;
}

if(keyCode==86){
  Sirena.x=280;
  Sirena.y=140;
  Escudo.velocityX=3;
  Escudo.velocityY=-3;
  Escudo.visible=true;
  adrien.visible=true;
  fondo4.visible=true;
  Texto5.visible=true;
}

if(Sirena.isTouching(P1)){
  S2.addImage("Lila",lila);
  S2.changeImage("Lila");
  S2.scale=0.5;
  Sirena.addImage("Lady",lady3);
  Sirena.changeImage("Lady");
  Sirena.y=350;
  Sirena.scale=0.5;
  //Sirena.x=400;
  Araña.visible=false;
  Caracol.visible=false;
  Caracol2.visible=false;
  c3.visible=false;
  c4.visible=false;
  c5.visible=false;
  P1.visible=false;
  Texto7.visible=false;
}

drawSprites();
}

function mouseDragged(){
  Polygon.position.x=mouseX;
  Polygon.position.y=mouseY;
  Texto.visible=false;

}


function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode==32){
    slingShot.attach(this.Polygon);
  }
}