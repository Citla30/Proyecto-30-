class B1{
  constructor(x, y, width, height) {
      var options = {
        'restitution':0.8,
          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("1.png");
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0,100,100);
      pop();
    
      if(this.body.position.y>300){
          
            Sirena.visible=true;
            S2.visible=true;
            Guardia.visible=true;
            Cangrejo.visible=true;
            Texto.destroy();
            Texto2.visible=true;
            Espada2.visible=true;
            Piedra.visible=true;
            P2.visible=true;
        }
      }
    }
