var Ball, database;
var position;


function setup(){

  createCanvas(500,500);

  Ball = createSprite(250,250,10,10);
  Ball.shapeColor = "red";

  // inisialize firebase
  database=firebase.database()
  //console.log(database)

  myBall=database.ref("ball/position")
  myBall.on("value", readPosition)
  console.log(myBall)
}

function draw(){
  background("white");
  
    if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
    }
    drawSprites();
  
}

function writePosition(x,y){
 
}

function readPosition(data){
 position= data.val()
 console.log(position)
}

function showError(){
}
