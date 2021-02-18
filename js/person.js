class Person {
    constructor(x, y, r) {
        var options = {
            isStatic: true
        }

        this.body = Bodies.circle(x, y, r/2, options);

        this.r = r;
        this.animation = loadAnimation("/imgs/walking_1.png", "/imgs/walking_2.png", "/imgs/walking_3.png", "/imgs/walking_4.png",
        "/imgs/walking_5.png", "/imgs/walking_6.png", "/imgs/walking_7.png", "/imgs/walking_8.png");

        World.add(world, this.body);
    }
    
    display() {
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);

        animation(this.animation, 0, 0, this.w, this.h);

        pop();

    }
}