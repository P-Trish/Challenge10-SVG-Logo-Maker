# Challenge10-SVG-Logo-Maker


## Description

This project is a SVG Logo Maker that utilizes the command-line application. It also uses the NPM Inquirer package, its required dependencies, and Jest. This application also demonstrates how to test the shapes classes using Jest. 

The motivation for this project was to respond to the user story of 
"AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer." 
Additionally I'd like to demonstrate how to generate the logo through the command-line application with the inquirer node module.  

This project was built as a tool to generate simple graphics such as a SVG logo so that developers could save on having to hire a separate graphic desiginer for such an incomplex task.  

This solves the problem for freelance developers that would like to save on having to hire graphic designers when they could create graphics from their command line.  

By creating this project, I learned how to explore and utilize the Node Package Manager (NPM) Inquirer package, the module.exports method in exporting a file and the require method for including packages needed for an application. I also learned how to run and pass tests prior to writing the code.  

LINK TO SVG LOGO MAKER DEMO: 
https://drive.google.com/file/d/1WdkanXUzjkWRTQ5qYL2wA3vYhaK61eFp/view  

## Installation

In order to install project dependencies, I ran 'npm i -y' in the project root directory to install the node modules folder & package JSON that includes everything the application is dependent on to run.

To use the Inquirer packagem I ran 'npm i inquirer@8.2.4'.

To install JEST, I ran 'npm install --save-dev jest' in the terminal.

## Usage


The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a .svg file.`

Each shape class was tested for a render() method that returned a string for the corresponding SVG file with the given shape color.

 Classes created for each of the shapes used inheritance so that code is not repeated.  

This application receives user input to generate the logo as a 'logo.svg' file. 

   
![alt text](./images/HW%209%20PASSED%20TESTS.png)
![alt text](./images/HW%209%20PROMPTED%20QUESTIONS.png)
![alt text](./images/HW%209%20SVG%20FILE.png)

## Credits

Emma Daily
Michael R
Michael H


## License
N/A

## Tests

