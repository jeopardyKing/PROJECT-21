var canvas;
var surface1,surface2,surface3,surface4;
var box, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

   surface1 = createSprite(0,580,360,30);
   surface1.shapeColor ="red";

   surface2 = createSprite(295,580,200,30);
   surface2.shapeColor = "blue";

    surface3 = createSprite(515,580,200,30);
    surface3.shapeColor = "green";

    surface4 = createSprite(740,580,220,30);
    surface4.shapeColor = "pink";

    box = createSprite(random(20,750),100, 40,40);
    box.shapeColor = "white";
    box.velocityX = 4;
    box.velocityY = 9;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    box.bounceOff(edges);

    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = "red";
        music.play();
    }

    if(surface2.isTouching(box)){
        box.shapeColor = "blue";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor ="green";
        music.play();
    }

    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = "pink";
        music.play();
    }

    drawSprites();
}
