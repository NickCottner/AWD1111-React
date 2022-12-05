"use strict";
const MINHEIGHT = 12;
const MAXHEIGHT = 96;
const MINWEIGHT = 1;
const MAXWEIGHT = 777;

const MAXUNDER = 18.5;
const MAXOPTIMAL = 25.0;
const MAXOVER = 30.0;

const img = document.querySelector("img");

//Create an alias for getElementById
const $ = (id) => document.getElementById(id);

let processEntries = () =>
{
    let height = parseFloat($("height").value);
    let weight = parseFloat($("weight").value);
    let isValid = true

    //Validate Height Inputted
    if(isNaN(height))
    {
        $("height").nextElementSibling.firstChild.nodeValue = "Numeric Input Required!";
        isValid = false;
    }
    else if ((height < MINHEIGHT) || (height > MAXHEIGHT))
    {
        $("height").nextElementSibling.firstChild.nodeValue = "Height Inputted is Out of Range!";
        isValid = false;
    }

     //Validate Weight Inputted
     if(isNaN(weight))
     {
         $("weight").nextElementSibling.firstChild.nodeValue = "Numeric Input Required!";
         isValid = false;
     }
     else if ((weight < MINWEIGHT) || (weight > MAXWEIGHT))
     {
         $("weight").nextElementSibling.firstChild.nodeValue = "Weight Inputted is Out of Range!";
         isValid = false;
     }

     //Check if isValid flag is true or not
     if(isValid)
     {
         calculateBMI(height, weight);
     }
     else
     {
         triggerReset();
     }
};

let calculateBMI = (h,w) => 
{
    let bmi = ((w/Math.pow(h , 2)) * 703).toFixed(2);
    $("bmi").value = bmi;
    calculateBMIStatus(bmi);
};

let calculateBMIStatus = (bmi) =>
{
    {
        let s = "";

    if (bmi < MAXUNDER)
    {
        s = "Underweight: " + bmi + "<img src='./images/undr.jpg'";
    }
    else if (bmi < MAXOPTIMAL)
    {
        s = "Optimal Weight: " + bmi + "<img src='./images/optimal.jpg'";
    }
    else if (bmi < MAXOVER)
    {
        s = "Overweight: " + bmi + "<img src='./images/over.jpg'";
    }
    else
    {
        s = "Obese: " + bmi + "<img src='./images/obese.jpg'";

    }

    $("bmiStatus").value = s;
    }
    triggerReset();
};

let resetTheForm = () =>
{
    $("height").value = "";
    $("weight").value = "";
    $("bmi").value = "";
    $("bmiStatus").value = "";

    $("height").nextElementSibling.firstChild.nodeValue = "*";
    $("weight").nextElementSibling.firstChild.nodeValue = "*";
    $("height").focus();
};
let triggerReset = () => 
{
    resetTheForm = setTimeout(resetTheForm, 2000);
};

window.onload = () =>
{
    $("calculate").onclick = processEntries;
    $("reset").onclick = resetTheForm;
    $("resetAll").onclick = resetAll;
    $("height").focus();
}