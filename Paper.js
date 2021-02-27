class Paper {
    constructor (x, y, radius) {
        var options = {density:1.2, friction:5, restitution:0.3};
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 100, 100);
        pop();
    }
}

