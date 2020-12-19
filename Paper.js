class Paper {
    constructor (x, y, radius) {
        var options = {density:1.2, friction:5, restitution:0.3};
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        paper1.addImage(paperImage);
        translate(pos.x, pos.y);
        strokeWeight(4);
        fill("white");  
        ellipseMode(CENTER);
        ellipse(0, 0, this.radius);
        pop();
    }
}

