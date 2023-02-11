"use strict";

let slider = document.getElementById("angle"); //Retreves the slider
let n1 = 1.33; //Index of Refraction of water
let n2 = 1; //Index of Refraction of air
let radToDeg = 180/Math.PI; //Used to convert Radians to Degrees
let degToRad = Math.PI/180; //Used to convert Degrees to Radians

function init() //Runs when website is loaded
{
    let snellsLaw = document.getElementById("snellsLaw"); //Retreves the paragraph element for displaying Snell's Law
    let formula = document.getElementById("formula");
    
    snellsLaw.innerHTML = `To get the refracted angle we use Snell's Law: n${"1".sub()}sin(θ${"1".sub()}) = n${"2".sub()}sin(θ${"2".sub()}).</p>
        Where n${"1".sub()}, 1.33, is the index of refraction of water and n${"2".sub()}, around 1, is the index of refraction of air.`; //Displays Snells Law
    formula.innerHTML = `We rearange the fromulat to find the θ${"2".sub()}. The new equation is: θ${"2".sub()} = sin${"-1".sup()}((n${"1".sub()}sin(θ${"1".sub()}))/n${"2".sub()}).</p> 
        Or in our case: θ${"2".sub()} = sin${"-1".sup()}((1.33*sin(θ${"1".sub()}))/1).`; //Displays formula we use to calculate the refracted angle
    adjustInfo("0", "0"); //Sets the info to 0
}

slider.oninput = function() //When slider is moved
{
    adjustImg(this.value);
}

function adjustImg(newAngle)
{ 
    let img = document.getElementById("refractions"); //Retrieves the image of the refraction angle
    let refractedAngle = (radToDeg * Math.asin((n1 * Math.sin(newAngle * degToRad))/n2)).toFixed(2); //Calculates the refracted angle from the incedent angle

    switch(newAngle) 
    {
        case "0":
        case "10":
        case "20":
        case "30":
        case "40": //If angle is either 0, 10, 20, 30, 40
            img.setAttribute("src", `images/Refractions/${parseInt(refractedAngle)}DegRR.png`); //Changes image to the one matching the angle
            adjustInfo(newAngle, refractedAngle); //Updates the info in the box
            break;
        case "50": 
        case "60": //If angle is either 50 or 60
            img.setAttribute("src", `images/Refractions/${newAngle}DegRl.png`); //Changes image to the Total Reflection Img
            adjustInfo(newAngle, refractedAngle); //Updates the info in the box
            break;
    }
}

function adjustInfo(newAngle, refractedAngle)
{
    let angles = document.getElementById("angles");
    let rlAngle = document.getElementById("rlAngle");
    
    angles.innerHTML = `Since the angle the laser is firing at is ${newAngle}°, the refracted angle is ${refractedAngle}°.`;
    rlAngle.innerHTML = ``;

    if(parseInt(newAngle) > 40) //Converts the angle to an int then sees if it is more then 40
    {
        let criticalAngle = (Math.asin(n2/n1)*radToDeg).toFixed(2);
        angles.innerHTML = `Since the angle the laser is firing at is ${newAngle}°, there is no refracted angle, Total Internal Reflection takes place.`
        rlAngle.innerHTML = `Total Internal Reflection occurs when the angle is bigger than the critical angle. </p>
            The critical angle equation: sin${"-1".sup()}(n${"2".sub()}/n${"1".sub()}) In our case the critical angle is ${criticalAngle}°.</p>
            The Total Internal Reflection angle is ${newAngle}°.` //Displays the critical angle and Internal Reflection angle.
    }
}

window.onload = init; //When the page loads add load init