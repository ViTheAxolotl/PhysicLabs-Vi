"use strict";

let slider = document.getElementById("angle");
let output = document.getElementById("demo");
let laserRow = document.getElementById("lasersRow");
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
  let laserRect = laser.getBoundingClientRect();
  laserRow.setAttribute("height", (laserRect["height"]) + "px");

  for (const key in laserRect) 
  {
    if (typeof laserRect[key] !== 'function') 
    {
      let para = document.createElement('p');
      para.textContent = `${key} : ${laserRect[key]}`;
      output.appendChild(para);
    }
  }

  if(newAngle > 0) //If the angle is pointing to the right, activate Right lazer and turn it
  {
    laserBeamL.setAttribute("class", "invisible");
    laserBeamR.setAttribute("class", "visible center");
    laserBeamR.style.transform = "rotate(" + (-newAngle) + "deg)";
  }

  if(newAngle < 0) //If the angle is pointing to the left, activate Left lazer and turn it
  {
    laserBeamR.setAttribute("class", "invisible");
    laserBeamL.setAttribute("class", "visible center");
    laserBeamL.style.transform = "rotate(" + (-newAngle) + "deg)";
  }
}

