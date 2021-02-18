const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var raindrops = [];
var person;
var umb, thunder;

var timer;
var counter = 0;


function preload(){
   
}

function setup(){
    var canvas  = createCanvas(400, 1000);

    engine = Engine.create();
    world = engine.world;

    person = new Person(200, 600, 5);
    umb = new Umbrella(220, 440, 300);
    thunder = new Thunder(200, 100, 300, 300);

    timer = createP('Timer');
    setInterval(timeIt, 1000);

    Engine.run(engine);
}

function timeIt() {
    timer.html('Timer: ' + counter);
    counter++;
    thunder.display();
}

function draw(){
    background(0);
    Engine.update(engine);

    raindrops.push(new Raindrop(random(0, 400), random(0, 100), 10, 10));

    for(var i = 0; i < raindrops.length; i++) {
        raindrops[i].show();
    }
    person.display();
    umb.display();  
}   

