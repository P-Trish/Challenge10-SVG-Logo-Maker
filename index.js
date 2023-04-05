

// Include packages needed 
const inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for user input
const questions = [
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
  fs.writeFile('output.svg', data, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log('output.svg created!');
    }
  });
}

// Function to generate SVG code based on user input
function generateSvg(responses) {
  const { shape, shapeColor } = responses;
  let svgCode;

  if (shape === 'Circle') {
    svgCode = `<svg width="200" height="200"><circle cx="100" cy="100" r="80" fill="${shapeColor}" /></svg>`;
  } else if (shape === 'Square') {
    svgCode = `<svg width="200" height="200"><rect x="40" y="40" width="120" height="120" fill="${shapeColor}" /></svg>`;
  } else if (shape === 'Triangle') {
    svgCode = `<svg width="200" height="200"><polygon points="100,20 20,180 180,180" fill="${shapeColor}" /></svg>`;
  }

  return svgCode;
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    const svgCode = generateSvg(responses);
    writeToFile(svgCode);
  }).catch((err) => console.error(err));
}

// Function call to initialize app
init();








// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters

// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)

// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square

// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)


// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line (pass through as a parameter and call upon it when initializing )

// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered