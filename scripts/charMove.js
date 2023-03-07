var keysPressed = {};
var keyDownCount = 0;
var currentScene = 0; 
var gameCompleted;
var go_right, go_left, go_up, go_down, space_down;

function charMoveHandler(){

    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

}

function keyDownHandler(e){
    if( currentScene == 18 ){ return; }

    if (e.key === " " || e.key === " ") {
        space_down = true;
    }

    keysPressed[e.key] = true;

    //Handling Key Downs
    go_right = (keysPressed["Right"] || keysPressed["ArrowRight"] );
    go_left = (keysPressed["Left"] || keysPressed["ArrowLeft"] );
    go_down = (keysPressed["Down"] || keysPressed["ArrowDown"] );
    go_up = (keysPressed["Up"] || keysPressed["ArrowUp"] );

    if( keysPressed["c"] ){
        console.log(gameOver);
        if( gameOver ){
            gameOver = false;
            console.log(gameOver);
            resetGame();
            //currentScene = 9;
        }
        else{
            boyHeight = boyHeight == 30 ? 40 : 30, boyWidth = boyWidth == 30 ? 40: 30;
        }
    }

    if( keysPressed["s"] && ( gameCompleted || currentScene == 0 ) ){
        resetGame();
        currentScene = 1;
    }

    if( keysPressed["r"] && gameOver ){
        gameOver = false;
        resetGame();
        currentScene = 1;
    }

}

function resetGame(){

    ctx.textAlign = "start";
    gameCompleted = false;
    sceneInit = false;
    valuesSet=false;
    //currentScene = 1;
    messagesDrawn = [];
    boyHeight=40;
    boyWidth=40;
    go_left=false; go_right=false; go_down=false; go_up=false;
    keysPressed=[];
    startAudio.pause();
    gameOverSound.pause();
    gameCompleteSound.pause();
    mainGameTheme.currentTime = 0;
    mainGameTheme.play();
    

}

function keyUpHandler(e){

    if( currentScene == 18 ){ return; }

    console.log( 'keyUp--',e.key );
    // go_right = !( e.key == 'ArrowRight'  );
    // go_left = !(e.key == 'ArrowLeft');
    // go_down = !(e.key == 'ArrowDown' );
    go_up = e.key == 'ArrowUp' ? false : go_up;
    go_right = e.key == 'ArrowRight' ? false : go_right;
    go_left = e.key == 'ArrowLeft' ? false : go_left;
    go_down = e.key == 'ArrowDown' ? false : go_down;

    delete keysPressed[e.key];

}


function handleMovements(){

    if( space_down ){
        showingMessage = false;
        message = null;
        wardenIncCount = 1;
        space_down = false;
    }

    if( showingMessage ){
        return;
    }

    let moveCharX = 0;
    let moveCharY = 0;
    let xChange = 1.4;
    let yChange = 1.4;
    keyDownCount += 1;
    keyDownCount = keyDownCount > 102 ? 0 : keyDownCount; 
    let boyStyle = getBoyStyle( keyDownCount );

    if( go_right && go_up ){
        currentBoyImg = horizontalRunning ? allImagesMap[ 'boyRight'+boyStyle ] : allImagesMap[ 'boyUp'+boyStyle ]; //CHanging Boy Hand style to show animation
        moveCharX = xChange;
        moveCharY = -yChange;
    }
    else if( go_right && go_down ){
        currentBoyImg = horizontalRunning ? allImagesMap[ 'boyRight'+boyStyle ] : allImagesMap[ 'boyDown'+boyStyle ];
        moveCharX = xChange;
        moveCharY = yChange;
    }
    else if( go_left && go_up ){
        currentBoyImg = horizontalRunning ? allImagesMap[ 'boyLeft'+boyStyle ] : allImagesMap[ 'boyUp'+boyStyle ];
        moveCharX = -xChange;
        moveCharY = -yChange;
    }
    else if( go_left && go_down ){
        currentBoyImg = horizontalRunning ? allImagesMap[ 'boyLeft'+boyStyle ] : allImagesMap[ 'boyDown'+boyStyle ];
        moveCharX = -xChange;
        moveCharY = yChange;
    }
    else if ( go_right )  {
        currentBoyImg = allImagesMap[ 'boyRight'+boyStyle ];
        moveCharX = xChange;
    } 
    else if ( go_left ) {
        currentBoyImg = allImagesMap[ 'boyLeft'+boyStyle ];
        moveCharX = -xChange;
    }
    else if ( go_up ) {
        currentBoyImg = allImagesMap[ 'boyUp'+boyStyle ];
        moveCharY = -yChange;
    }
    else if ( go_down ) {
        currentBoyImg = allImagesMap[ 'boyDown'+boyStyle ];
        moveCharY = yChange;
    }

    if( checkCharacterMovement( charStartX + moveCharX, charStartY + moveCharY ) ){
        charStartX += moveCharX;
        charStartY += moveCharY;
    }

}

function getBoyStyle( count ){
    let rem = count % 14;
    return ( rem <= 7 ) ? 1 : 2;
}

function getWardenStyle( count ){
    let rem = count % 14;
    return ( rem <= 7 ) ? 1 : 2;
}


function checkCharacterMovement( x, y ){

    switch ( currentScene ) {
        case 1:
            if( moveToNextScreenScene1( x, y ) ){ return false; }
            return scene1RestrictedAreas( x, y );

        case 2:
            if( moveToNextScreenScene2( x, y ) ){ return false; }
            //if( drawMessageStopsScene2( x, y ) ){ return false; }
            return scene2RestrictedAreas( x, y );
        
        case 3:
            if( moveToNextScreenScene3( x, y ) ){ return false; }
            //if( drawMessageStopsScene3( x, y ) ){ return false; }
            return scene3RestrictedAreas( x, y );
        
        case 4:
            if( moveToNextScreenScene4( x, y ) ){ return false; }
            //if( drawMessageStopsScene3( x, y ) ){ return false; }
            return scene4RestrictedAreas( x, y );

        case 5:
            if( moveToNextScreenScene5( x, y ) ){ return false; }
            return scene5RestrictedAreas( x, y );

        case 6:
            if( moveToNextScreenScene6( x, y ) ){ return false; }
            return scene6RestrictedAreas( x, y );
        
        case 7:
            if( moveToNextScreenScene7( x, y ) ){ return false; }
            return scene7RestrictedAreas( x, y );
        
        case 8:
            if( moveToNextScreenScene8( x, y ) ){ return false; }
            return scene8RestrictedAreas( x, y );
        
        case 9:
            if( moveToNextScreenScene9( x, y ) ){ return false; }
            return scene9RestrictedAreas( x, y );

        case 10:
            if( moveToNextScreenScene10( x, y ) ){ return false; }
            return scene10RestrictedAreas( x, y );

        case 11:
            if( moveToNextScreenScene11( x, y ) ){ return false; }
            return scene11RestrictedAreas( x, y );

        case 12:
            if( moveToNextScreenScene12( x, y ) ){ return false; }
            return scene12RestrictedAreas( x, y );

        case 13:
            if( moveToNextScreenScene13( x, y ) ){ return false; }
            return scene13RestrictedAreas( x, y );

        case 14:
            if( moveToNextScreenScene14( x, y ) ){ return false; }
            return scene14RestrictedAreas( x, y );

        case 15:
            if( moveToNextScreenScene15( x, y ) ){ return false; }
            return scene15RestrictedAreas( x, y );

        case 16:
            if( moveToNextScreenScene16( x, y ) ){ return false; }
            return scene16RestrictedAreas( x, y );

        case 17:
            if( moveToNextScreenScene17( x, y ) ){ return false; }
            return scene17RestrictedAreas( x, y );
    }
}

var wardenCount;
var wardenX, wardenY;
var wardenIncCount;
var wardenImgType;
var valuesSet = false;
function drawFrameElements(){
    switch ( currentScene ) {
        case 1:
            if( checkForGameOverScene1( charStartX, charStartY ) ){ gameOver = true; return true; }
            if( drawMessageStopsScene1( charStartX, charStartY ) ){ wardenIncCount = 0; }
            initScene1();
            drawWardenScene1();
            drawStaticElementsScene1();
            break;
        
        case 2:
            if( checkForGameOverScene2( charStartX, charStartY ) ){ gameOver = true; return true; }
            if( drawMessageStopsScene2( charStartX, charStartY ) ){ wardenIncCount = 0; }
            initScene2();
            drawWardenScene2();
            break;

        case 3:
            if( checkForGameOverScene3( charStartX, charStartY ) ){ gameOver = true; return true; }
            if( drawMessageStopsScene3( charStartX, charStartY ) ){ wardenIncCount = 0; }
            initScene3();
            drawStaticElementsScene3();
            drawWardenScene3();
            break;

        case 4:
            if( checkForGameOverScene4( charStartX, charStartY ) ){ gameOver = true; return true; }
            if( drawMessageStopsScene4( charStartX, charStartY ) ){ wardenIncCount = 0; }
            initScene4();
            drawStaticElementsScene4();
            drawWardenScene4();
            break;

        case 5:
            if( checkForGameOverScene5( charStartX, charStartY ) ){ gameOver = true; return true; }
            if( drawMessageStopsScene5( charStartX, charStartY ) ){ wardenIncCount = 0; }
            initScene5();
            drawStaticElementsScene5();
            drawWardenScene5();
            break;

        case 6:
            if( checkForGameOverScene6( charStartX, charStartY ) ){ gameOver = true; return true; }
            if( drawMessageStopsScene6( charStartX, charStartY ) ){ wardenIncCount = 0; }
            initScene6();
            drawStaticElementsScene6();
            drawWardenScene6();
            break;

        case 7:
            if( checkForGameOverScene7( charStartX, charStartY ) ){ gameOver = true; return true; }
            if( drawMessageStopsScene7( charStartX, charStartY ) ){ wardenIncCount = 0; }
            initScene7();
            drawStaticElementsScene7();
            drawWardenScene7();
            break;

        case 8:
            if( checkForGameOverScene8( charStartX, charStartY ) ){ gameOver = true; return true; }
            if( drawMessageStopsScene8( charStartX, charStartY ) ){ wardenIncCount = 0; }
            initScene8();
            drawStaticElementsScene8();
            drawWardenScene8();
            break;

        case 9:
            if( checkForGameOverScene9( charStartX, charStartY ) ){ gameOver = true; return true; }
            if( drawMessageStopsScene9( charStartX, charStartY ) ){ wardenIncCount = 0; }
            initScene9();
            drawStaticElementsScene9();
            drawWardenScene9();
            break;

        case 10:
            if( checkForGameOverScene10( charStartX, charStartY ) ){ gameOver = true; return true; }
            if( drawMessageStopsScene10( charStartX, charStartY ) ){ wardenIncCount = 0; }
            initScene10();
            drawStaticElementsScene10();
            drawWardenScene10();
            break;
        
        case 11:
            if( checkForGameOverScene11( charStartX, charStartY ) ){ gameOver = true; return true; }
            if( drawMessageStopsScene11( charStartX, charStartY ) ){ wardenIncCount = 0; }
            initScene11();
            drawStaticElementsScene11();
            drawWardenScene11();
            break;

        case 12:
            if( checkForGameOverScene12( charStartX, charStartY ) ){ gameOver = true; return true; }
            if( drawMessageStopsScene12( charStartX, charStartY ) ){ wardenIncCount = 0; }
            initScene12();
            drawStaticElementsScene12();
            drawWardenScene12();
            break;

        case 13:
            if( checkForGameOverScene13( charStartX, charStartY ) ){ gameOver = true; return true; }
            if( drawMessageStopsScene13( charStartX, charStartY ) ){ wardenIncCount = 0; }
            initScene13();
            drawStaticElementsScene13();
            drawWardenScene13();
            break;

        case 14:
            if( checkForGameOverScene14( charStartX, charStartY ) ){ gameOver = true; return true; }
            if( drawMessageStopsScene14( charStartX, charStartY ) ){ wardenIncCount = 0; }
            initScene14();
            drawStaticElementsScene14();
            drawWardenScene14();
            break;

        case 15:
            if( checkForGameOverScene15( charStartX, charStartY ) ){ gameOver = true; return true; }
            if( drawMessageStopsScene15( charStartX, charStartY ) ){ wardenIncCount = 0; }
            initScene15();
            drawStaticElementsScene15();
            drawWardenScene15();
            break;

        case 16:
            if( checkForGameOverScene16( charStartX, charStartY ) ){ gameOver = true; return true; }
            if( drawMessageStopsScene16( charStartX, charStartY ) ){ wardenIncCount = 0; }
            initScene16();
            drawStaticElementsScene16();
            drawWardenScene16();
            break;

        case 17:
            if( checkForGameOverScene17( charStartX, charStartY ) ){ gameOver = true; return true; }
            if( drawMessageStopsScene17( charStartX, charStartY ) ){ wardenIncCount = 0; }
            initScene17();
            drawBoy();
            drawStaticElementsScene17();
            drawWardenScene17();
            break;

        case 18:
            initScene18();
            drawBusScene18();
            moveToNextScreenScene18();
            break;

        case 19:
            initScene19();
            break;

        default:
            break;
    }
}


