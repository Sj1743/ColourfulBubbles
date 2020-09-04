class Bubble {

    constructor(x, y){
        
        var options = {
            isStatic: false,
            restitution: 1.0,
            friction: 1.0,
            density: 1.3,
        }
        
        this.body = Bodies.circle(x, y, 50, options);
        this.radius = 50;
        Matter.Body.setVelocity(this.body, {x: random(-15, 15), y: random(-10, 10)});
        World.add(world, this.body);
    }

    display(){
        push()
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        ellipseMode(CENTER);
        fill("lightBlue");
        strokeWeight(1);
        ellipse(0, 0, this.radius*2);
        pop();
    }
}