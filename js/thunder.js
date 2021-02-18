class Thunder {
    constructor(x, y, w, h) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);

        this.w = w;
        this.h = h;

        this.image = loadImage("imgs/1.png");
    }

    display() {
        
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.w, this.h);
            
    }

    
}