class B2 extends Block {
  constructor(x, y) {
    super(x,y,120,160);
   this.image=loadImage("2.png");
    this.Visibility=255;
  }
  display(){
    //console.log(this.body.speed);
      
    if(this.body.speed<3){
      super.display();
    }
    else{
      World.remove(world,this.body);
      push()
      this.Visibility=this.Visibility-5;
      tint(255,this.Visibility);
      imageMode(CENTER);
      image(this.image,0,0,120,160);
      pop()
    }
  }
}
