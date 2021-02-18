class Umbrella {
    constructor(x, y, r) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x, y, r/2, options);
        
        this.r = r;
        this.Visiblity = 255;

        World.add(world, this.body);

    }
    
    display() {
        console.log('A sprite is being displayed. But it is not visible.')
    }
}