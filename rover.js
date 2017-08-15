// the object that the user interacts

var myRover = {
  position: [0,0],
  direction: 'N'
};


var fButton = document.getElementById("forward");
var lButton = document.getElementById("left");
var rButton = document.getElementById("right");
var bButton = document.getElementById("backward");

fButton.addEventListener("click", function (){
  goForward(myRover);
});

lButton.addEventListener("click", function () {
  turnLeft(myRover);
});

rButton.addEventListener("click", function () {
  turnRight(myRover);
});

bButton.addEventListener("click", function (){
  goBackward(myRover);
});




function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++
      break;
    case 'E':
      rover.position[1]++
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[1]--
      break;
  };

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

function goBackward(rover) {
  switch(rover.direction){
    case 'N':
      rover.position[0]--
    break;
    case 'E':
      rover.position[1]--
      break;
    case 'S':
      rover.position[0]++
      break;
    case 'W':
      rover.position[1]++
      break;
  };

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

function turnRight(rover){
  switch(rover.direction){
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
      break;
  }

  console.log("New Rover Direction:  " + rover.direction);
}

function turnLeft(rover){
  switch(rover.direction){
    case 'N':
      rover.direction = 'W';
      break;
    case 'E':
      rover.direction = 'N';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'W':
      rover.direction = 'S';
      break;
  }

  console.log("New Rover Direction:  " + rover.direction);
}



// turnRight(myRover);
// turnRight(myRover);
// turnRight(myRover);
// turnRight(myRover);

turnLeft(myRover);
turnLeft(myRover);
turnLeft(myRover);
turnLeft(myRover);



// goForward(myRover);
// goForward(myRover);
//
// goBackward(myRover);
//
// goForward(myRover);
// goForward(myRover);
// goForward(myRover);
// goForward(myRover);\
