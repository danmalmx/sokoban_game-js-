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
