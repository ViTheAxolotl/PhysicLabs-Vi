"use strict";

let slider = document.getElementById("angle");
let output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() 
{
  output.innerHTML = Math.abs(this.value);
  adjustRotation(this.value);
}

function adjustRotation(newAngle)
{ 
  let laserBeamL = document.getElementById("laserBeamL");
  let laser = document.getElementById("laser");
  let laserBeamR = document.getElementById("laserBeamR");
  laser.style.transform = "rotate(" + newAngle + "deg)";

  if(newAngle > 0)
  {
    laserBeamL.setAttribute("class", "invisible");
    laserBeamR.setAttribute("class", "visible center");
    laserBeamR.style.transform = "rotate(" + (-newAngle) + "deg)";
    //Activate Right Lazer and turn
  }

  if(newAngle < 0)
  {
    laserBeamR.setAttribute("class", "invisible");
    laserBeamL.setAttribute("class", "visible center");
    laserBeamL.style.transform = "rotate(" + (-newAngle) + "deg)";
    //Activate Left lazer and turn
  }
}

