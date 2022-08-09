var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i, edges;


function preload(){
    pathImg = loadImage("path.png");
    boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
    createCanvas(400,400);

    // Movendo o fundo 

    path = createSprite (200,200,200,200)
    path.addImage(pathImg);
    path.velocityY = 4;
    
    //Criando menino que corre 
    boy = createSprite(200,350,20,20);
    boy.addAnimation("jakerunning",boyImg);
    boy.scale = 0.05;
    


    // Criando Boundary (Limite) esquerdo  
    leftBoundary=createSprite(0,0,100,800);
    leftBoundary.visible = false;


    //Crie Boundary direito 
    rightBoundary=createSprite(400,0,100,800);
    rightBoundary.visible = false;

    edges = createEdgeSprites();
}


function draw() {
    background(0)

    boy.x = World.mouseX;
    // Menino se movendo no eixo X com o mouse
    boy.collide(rightBoundary);
    boy.collide(leftBoundary);
    boy.collide(edges [3]);

    //Reiniciar o fundo
    if (path.y > 200){
        path.y = path.y/8;
    }

    drawSprites();
 }




