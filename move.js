let container;
let robot;

var robotLeft = 0;
var robotDown = 0;

// "Create" robot on screen
function makeRobot() {
  container = document.querySelector("#container");
  robot = document.createElement("img");
  robot.id = "robot";
  robot.setAttribute("src", "/img/robot.png");
  robot.style.position = "absolute";
  robot.style.left = 0;
  robot.style.top = 0;

  //Add robot to screen
  container.appendChild(robot);

  //Event listener
  document.addEventListener("keydown", moveRobot);
}

function moveRobot(e) {
  //check for key press
  const keyCheck = e.keyCode;

  switch (keyCheck) {
    //left key
    case 37:
      moveLeft();
      break;
    //up key
    case 38:
      moveUp();
      break;
    //right key
    case 39:
      moveRight();
      break;
    //down key
    case 40:
      moveDown();
      break;
  }
  //functions for the 4 different directions
  function moveLeft() {
    robotLeft -= 10;
    robot.style.left = robotLeft + "px";
  }
  function moveUp() {
    robotDown -= 10;
    robot.style.top = robotDown + "px";
  }
  function moveRight() {
    robotLeft += 10;
    robot.style.left = robotLeft + "px";
  }
  function moveDown() {
    robotDown += 10;
    robot.style.top = robotDown + "px";
  }
}
makeRobot();