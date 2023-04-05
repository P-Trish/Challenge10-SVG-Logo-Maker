//  Include packages needed 

const inquirer = require('inquirer');
const fs = require('fs');
const svgFile = require('./lib/svg');
const shapesFile = require('./lib/shapes');

// Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'Text Color',
        message: 'Please input the color keyword or hexidecimal number you would like your logo text to be.',
    },
    {
        type: 'list',
        name: 'Shape',
        message: 'Please choose the shape you would like your logo to be.',
        choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        type: 'input',
        name: 'Shape Color',
        message: 'Please input the color keyword or hexidecimal number you would like your logo shape color to be.'
    },
]



// TODO: Create a function to write shapes file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.err(err) : console.log('outputReadme.md Created!')
    })
}

// TODO: Create a function to write SVG file 

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            const generateMarkdown = markdownFile(response);
            writeToFile("outputReadme.md", generateMarkdown);
        })
        .catch((err) => console.error(err));
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