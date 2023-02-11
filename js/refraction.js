//Critical Angle is: θc = sin-1(n2/n1)
//Law of Refraction is: n1sin(θ1) = n2sin(θ2)
"use strict";

let slider = document.getElementById("angle"); //Retreves the slider
let n1 = 1.33;
let n2 = 1;
let radToDeg = 180/Math.PI;
let degToRad = Math.PI/180;

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
        case "50": 
        case "60": //If angle is either 0, 10, 20, 30, 40, 50, 60
        //img.setAttribute("src", `images/Reflections/${newAngle}DegRl.png`); //Changes image to the one matching the angle
        adjustInfo(newAngle); //Updates the info in the box
        break;
    }
}

function adjustInfo(newAngle)
{
    let iAngle = document.getElementById("iAngle");
    let rAngle = document.getElementById("rAngle");
    let formula = document.getElementById("formula");
    let refractedAngle =  (radToDeg * Math.asin((n1 * Math.sin(newAngle * degToRad))/n2)).toFixed(2);

    formula.innerHTML = ``; //Displays info in right format
    iAngle.innerHTML = `The angle that the laser is firing at is ${newAngle}°.`;
    rAngle.innerHTML = `The angle that the laser is refracted at is ${refractedAngle}°.`;
}

window.onload = adjustInfo("0"); //When the page loads add info into the box