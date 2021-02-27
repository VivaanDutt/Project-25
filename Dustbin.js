class Dustbin {
    constructor(x, y, width, height) {
        var options = {isStatic: true, density: 0.5};
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbingreen.png");
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, -85, 175, 200);
        pop();
    }
}