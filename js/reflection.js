"use strict";

let slider = document.getElementById("angle"); //Retreves the slider

slider.oninput = function() //When slider is moved
{
  adjustImg(this.value);
}

function adjustImg(newAngle)
{ 
  let img = document.getElementById("reflections"); //Retrieves the image of the reflaction angle
  
  switch(newAngle) 
  {
    case "0":
    case "10":
    case "20":
    case "30":
    case "40":
    case "50": //If angle is either 0, 10, 20, 30, 40, 50
      img.setAttribute("src", `images/Reflections/${newAngle}DegRl.png`); //Changes image to the one matching the angle
      adjustInfo(newAngle); //Updates the info in the box
      break;
  }
}

function adjustInfo(newAngle)
{
  let iAngle = document.getElementById("iAngle");
  let rAngle = document.getElementById("rAngle");
  let formula = document.getElementById("formula");

  formula.innerHTML = `Law of Reflection is θ${"i".sub()} = θ${"r".sub()}. Since θ${"i".sub()} = ${newAngle}° that makes θ${"r".sub()} = ${newAngle}°.`; //Displays info in right format
  iAngle.innerHTML = `The angle that the laser is firing at is ${newAngle}°.`;
  rAngle.innerHTML = `The angle that the laser is reflecting at is ${newAngle}°.`;
}

window.onload = adjustInfo("0"); //When the page loads add info into the box