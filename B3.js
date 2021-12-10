class B3 extends Block {
  constructor(x, y) {
    super(x,y,125,160);
   this.image=loadImage("3.png");
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
      image(this.image,0,0,125,160);
      pop()
    }
  }
}