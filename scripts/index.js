var ctx;
var canvas;
var charStartX = 797, charStartY = 553;
var boyAngle = 270;
var allImagesMap = {};
var currentBoyImg;
var currentBoyPos;
var boyHeight=40, boyWidth=40;
var sceneInit = false;
var messagesDrawn = {};
var horizontalRunning = false;
var gameOver = false;
var startAudio = new Audio();
var mainGameTheme = new Audio();
var tractorTheme = new Audio();
var gameOverSound = new Audio();
var busSound = new Audio();
var gameCompleteSound = new Audio();
var canPlayAudio = 0;

window.onload = function exampleFunction() {
  
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    loadAudioFiles();
    //startGameScreen();
    charMoveHandler();   
    loadImages();
}

function getMouse( e ){
    var rect = canvas.getBoundingClientRect();
    let posx = e.clientX  - rect.left;
    let posy = e.clientY  - rect.top;

    // document.getElementById('xCord').innerHTML = Math.ceil(posx);
    // document.getElementById('yCord').innerHTML = Math.ceil(posy);
}

function loadAudioFiles(){
    tractorTheme.src = './static/Sounds/tractorTheme.mp3';
    tractorTheme.loop = true;
    tractorTheme.addEventListener("canplaythrough", function() {
        canPlayAudio += 1; console.log('audio 3 loaded'); 
      }); 

    startAudio.src = './static/Sounds/openingSound.mp3';
    startAudio.loop = true;
    startAudio.muted = false;
    startAudio.addEventListener("canplaythrough", function() {
        console.log('audio 1 loaded');canPlayAudio += 1; 
      });

    mainGameTheme.src = './static/Sounds/mainGameTheme.mp3';
    mainGameTheme.loop = true;
    mainGameTheme.addEventListener("canplaythrough", function() {
        canPlayAudio += 1; console.log('audio 2 loaded'); 
      });

    gameOverSound.src = './static/Sounds/gameover.mp3';
    gameOverSound.loop = false;
    gameOverSound.addEventListener("canplaythrough", function() {
        canPlayAudio += 1; console.log('audio 4 loaded'); 
    });

    busSound.src = './static/Sounds/horn.mp3';
    busSound.loop = false;
    busSound.playbackRate=0.5;
    busSound.addEventListener("canplaythrough", function() {
        canPlayAudio += 1; console.log('audio 5 loaded'); 
    });

    gameCompleteSound.src = './static/Sounds/roundclear.mp3';
    gameCompleteSound.loop = false;
    gameCompleteSound.addEventListener("canplaythrough", function() {
        canPlayAudio += 1; console.log('audio 5 loaded'); 
    });
}

function drawBackground( bgName ) {

    let url = './static/images/'+bgName+'.png';
    document.getElementById('myCanvas').style.backgroundImage = 'url('+url+')';

}

function drawBoy( x, y ) {
    if( currentBoyImg != null ){
        ctx.drawImage(currentBoyImg, charStartX, charStartY, boyHeight, boyWidth);
    }
}

function draw(){
    
    if( canPlayAudio < 5 ){
        drawLoadingScreen();
        return;
    }
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //drawBackground();
    if( imagesLoaded ){
        drawFrameElements();
        if( gameOver ){
            drawGameOverScreen();
            return;
        }
        if( currentScene == 0 ){
            startGameScreen();
            return;
        }
        if( ![17, 0].includes( currentScene ) ){
            drawBoy();
        }
        showMessage();
        handleMovements();
    }
    

}


var imagesLoaded = false;
function loadImages(){

    let allImages = [ 'boyDown1', 'boyDown2', 'boyUp1', 'boyUp2', 'boyLeft1', 'boyLeft2', 'boyRight1', 'boyRight2',
                      'facUp1', 'facUp2', 'facLeft1', 'facLeft2', 'facRight1', 'facRight2', 'facDown1', 'facDown2',
                      'guard', 'bus', 'fcS', 'arrowRight', 'arrowDown', 'arrowUp', 'arrowLeft', 'busRight',
                      'trRight1', 'trRight2', 'trLeft1', 'trLeft2', 'trDown1', 'trDown2', 'trUp1', 'trUp2', 'tcr1',
                      'dustbinBox', 'ex', 'car1', 'car4', 'fcSLeft', 'fcSRight', 'shelterImg1', 'shelterImg2', 'blockImg',
                      'bgLeft1', 'bgLeft2', 'bgDown1', 'bgDown2', 'bgRight1', 'bgRight2', 'bus3', 'gameCompletionScene' ];

    let count = 0;
    allImages.forEach(function(imgName){
        
        const img = new Image();
        img.src = './static/images/'+imgName+'.png';
        img.onload = () => {
            allImagesMap[imgName] = img;
            if( imgName == 'boyUp1' ){
                currentBoyImg = img;
            }
            count += 1;
            if( count == allImages.length ){
                imagesLoaded = true;
                afterImagesLoad();
            }
        };
    });
}

function afterImagesLoad(){

}

setInterval(draw, 10);
