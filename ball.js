class Ball {
    constructor(x,y,radius) {
      var options = {
          restitution:1.0,
          friction:0.5,
          density:1.2

      }
      this.body = Matter.Bodies.circle(x,y,radius,options);
      this.radius = radius/2;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //ellipseMode(CENTER);
      fill("magenta");
      ellipse(pos.x, pos.y, this.radius);
    }
  };