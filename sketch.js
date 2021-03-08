const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var canvas;
var engine,world;
var maxDrops = 100;
var drops = [];
var umbrella;

function preload(){
    
}

function setup(){
   var canvas = createCanvas(600,600);
   engine = Engine.create();
   world = engine.world;

   umbrella = new Umbrella(200,470);

   if(frameCount % 150 === 0)
   {
    for(var i=0; i< maxDrops; i++)
    {
      drops.push(new Drops(random(0,400),random(0,400)));
    }
   } 
    
}

function draw(){
    background("black");
    Engine.update(engine);

    umbrella.display();

    for(var i=0; i< maxDrops; i++)
    {
    drops[i].display();
    drops[i].update();
    }

    drawSprites();
}   

