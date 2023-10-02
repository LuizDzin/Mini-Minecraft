var canvas = new fabric.Canvas('myCanvas');

playerX = 10;
playerY = 10;

blockImageWidth = 30;
blockImageHeight = 30;

var playerObject = "";
var blockImageObject = "";

function playerUpdate() {

    fabric.Image.fromURL("player.png", function(Img) {
        playerObject = Img;

        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
        top:playerY,
        left:playerX
        });
        canvas.add(playerObject);

    });
}
function newImage(getImage) {

    fabric.Image.fromURL(getImage, function(Img) {
         blockImageObject = Img;

        blockImageObject.scaleToWidth(blockImageWidth);
        blockImageObject.scaleToHeight(blockImageHeight);
        blockImageObject.set({
        top:playerY,
        left:playerX
        });
        canvas.add(blockImageObject);
        
    });
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
    KeyPressed = e.keyCode;
    console.log(KeyPressed);
    if(e.shiftKey == true && KeyPressed == '187') {
        console.log("shift e + pressionadas juntas");
        blockImageWidth += 10;
        blockImageHeight += 10;
        document.getElementById("currentWidth").innerHTML = blockImageWidth;
        document.getElementById("currentHeight").innerHTML = blockImageHeight;
    }

    if(e.shiftKey == true && KeyPressed == '189') {
        console.log("shift e - pressionadas juntas");
        blockImageWidth -= 10;
        blockImageHeight -= 10;
        document.getElementById("currentWidth").innerHTML = blockImageWidth;
        document.getElementById("currentHeight").innerHTML = blockImageHeight;
    }

    if(KeyPressed == '87') {
        console.log(" w ");
        up()
    }

    if(KeyPressed == '65') {
        console.log(" a ");
        left()
    }

    if(KeyPressed == '83') {
        console.log(" s ");
        down()
    }

    if(KeyPressed == '68') {
        console.log(" d ");
        right()
    }

    if(KeyPressed == '82') {
        console.log(" r ");
        newImage('trunk.jpg')
    }

    if(KeyPressed == '84') {
        console.log(" t ");
        newImage('roof.jpg')
    }

    if(KeyPressed == '89') {
        console.log(" y ");
        newImage('unique.png')
    }

    if(KeyPressed == '85') {
        console.log(" u ");
        newImage('wall.jpg')
    }

    if(KeyPressed == '73') {
        console.log(" i ");
        newImage('yellow_wall.png')
    }

    if(KeyPressed == '79') {
        console.log(" o ");
        newImage('ground.png')
    }

    if(KeyPressed == '80') {
        console.log(" p ");
        newImage('cloud.jpg')
    }

    if(KeyPressed == '90') {
        console.log(" z ");
        newImage('dark_green.png')
    }

    if(KeyPressed == '88') {
        console.log(" x ");
        newImage('light_green.png')
    }
}

function up() {
    if(playerY >=0) {
        playerY = playerY - blockImageHeight;
        console.log("altura do bloco = " + blockImageHeight);
        console.log("Quando a tecla direcional Cima for pressionada, X = " + playerX + " , Y = " +playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function down() {
    if(playerY <=500) {
        playerY = playerY + blockImageHeight;
        console.log("altura do bloco = " + blockImageHeight);
        console.log("Quando a tecla direcional Baixo for pressionada, X = " + playerX + " , Y = " +playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function left() {
    if(playerX >0) {
        playerX = playerX - blockImageWidth;
        console.log("largura do bloco = " + blockImageWidth);
        console.log("Quando a tecla direcional Esquerda for pressionada, X = " + playerX + " , Y = " +playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function right() {
    if(playerX <=850) {
        playerX = playerX + blockImageWidth;
        console.log("largura do bloco = " + blockImageWidth);
        console.log("Quando a tecla direcional Direita for pressionada, X = " + playerX + " , Y = " +playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}


