class ground {
constructor(x,y,width,height){
var options = {
isStatic:true,
//friction: 0.5,
//density:2
}
this.body = Bodies.rectangle(x,y,width,height);

//this.x=200;
//this.y = 690;
this.width= width;
this.height = height;
World.add(world,this.body);
}
display(){
var pos = this.body.position;
push();
fill ("red");
rectMode(CENTER);
rect(pos.x,pos.y,this.width,this.height);
pop();
}
}