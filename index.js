// Include packages needed 
const inquirer = require('inquirer');
const fs = require('fs');
const SVG = require('./lib/svg');
const {Circle, Triangle, Square} = require('./lib/shapes');

// Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'logoLetters',
    message: 'Enter up to (3) characters for logo.'
},
{
    type: 'input',
    name: 'textColor',
    message: 'Please input the color keyword or hexidecimal number you would like your logo text to be.',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Please choose the shape you would like your logo to be.',
    choices: ['Circle', 'Triangle', 'Square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Please input the color keyword or hexidecimal number you would like your logo shape color to be.'
  },
];

// Function to write SVG data to a file
function writeToFile(data) {
  fs.writeFile('logo.svg', data, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Generated logo.svg!');
    }
  });
}

// Function to generate SVG code based on user input
function generateSvg(responses) {
  const { shape, shapeColor, logoLetters, textColor } = responses;
  let svgCode;
  const svg = new SVG()
  svg.setText(logoLetters, textColor);

  if (shape === 'Circle') {
    const circle = new Circle();
    circle.setColor(shapeColor);
    svg.setShape(circle);
    svgCode = svg.render();
    console.log(svgCode);

  } else if (shape === 'Square') {
    const square = new Square();
    square.setColor(shapeColor);
    svg.setShape(square);
    svgCode = svg.render();
    console.log(svgCode);

  } else if (shape === 'Triangle') {

    const triangle = new Triangle();
    triangle.setColor(shapeColor);
    svg.setShape(triangle);
    svgCode = svg.render();
    console.log(svgCode);
  }

  return svgCode;
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    if (responses.logoLetters.length > 3){
        console.error("Text must not exceed 3 characters.");
     init ();  
    }
    else {const svgCode = generateSvg(responses);
    writeToFile(svgCode);}
  }).catch((err) => console.error(err));
}

// Function call to initialize app
init();

