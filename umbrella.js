class Umbrella
{
    constructor(x,y)
    {
        var options = {
            isStatic : true
        }
      this.body = Bodies.circle(x,y,110,options);
      this.image = loadImage("images/walking Frame/walking_1.png");
      this.rad = 110;
      World.add(world,this.body);
    }

    display()
    {
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,300,300)
    }
}