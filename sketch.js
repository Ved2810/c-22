const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myengine,myworld; 
var ground,ball;

function setup() {
  createCanvas(800,400);
  myengine=Engine.create();
  myworld=myengine.world;
  var option={
    isStatic:true
  }
  ground=Bodies.rectangle(300,380,400,20,option);
  World.add(myworld,ground);

  ball=Bodies.circle(400,200,30,{restitution:0.8});
  World.add(myworld,ball);

  console.log(ground);
}

function draw() {
  Engine.update(myengine);
  background(0);
  var pos=ground.position;
  var bpos=ball.position;
  fill("white");  
  rectMode(CENTER);
  rect(pos.x,pos.y,400,20);
  
  ellipseMode(RADIUS);
  ellipse(bpos.x,bpos.y,30,30);


}