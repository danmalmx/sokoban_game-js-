let container;
let robot;

let left = 0;
let up = 0;

let robotLeft = "5px";
let robotDown = "5px";

// Add robot to screen
function addRobot() {
  container = document.querySelector("#container");

  robot = document.createElement("img");
  robot.setAttribute("src", "/img/robot.png");
  robot.style.position = "relative";
  robot.style.left = "5px";
  robot.style.top = "5px";
  container.appendChild(robot);

  console.log(robot);
}
addRobot();
