# Challenge10-SVG-Logo-Maker


## Description

This project is a SVG Logo Maker that utilizes the command-line application. It also uses the NPM Inquirer package, its required dependencies, and Jest. This application also demonstrates how to test the shapes classes using Jest. 

The motivation for this project was to respond to the user story of 
"AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer." 
Additionally I'd like to demonstrate how to generate the logo through the command-line application with the inquirer node module but to first run the tests to make sure they pass beforehand.

This project was built as a tool to generate simple graphics such as a SVG logo so that developers could save on having to hire a separate graphic desiginer for such an incomplex task.  

This solves the problem for freelance developers that would like to save on having to hire graphic designers when they could create graphics from their command line.  

By creating this project, I learned how to explore and utilize the Node Package Manager (NPM) Inquirer package, the module.exports method in exporting a file and the require method for including packages needed for an application. I also learned how to run and pass tests prior to writing the code.  

LINK TO SVG LOGO MAKER DEMO: 
https://drive.google.com/file/d/1rQij95m_qsZ71s2WCvnCFkazI8LliGem/view

## Installation

In order to install project dependencies, I ran 'npm i -y' in the project root directory to install the node modules folder & package JSON that includes everything the application is dependent on to run.

To use the Inquirer packagem I ran 'npm i inquirer@8.2.4'.

To install JEST, I ran 'npm install --save-dev jest' in the terminal.

## Usage

To create a logo.SVG file, the command 'node index.js' is used in the command line to initiate the application from the project root directory.  The application uses inquirer and prompts the user to select 3 characters, a color, shape, and text color for the logo, and then saves the generated SVG to a .svg file.  

![alt text](./images/HW%2010%20PROMPTED%20QUESTIONS.png)

Each shape class was tested for a render() method that returned a string for the corresponding SVG file with the given shape, shape color, and text color.

![alt text](./images/HW%2010%20String%20Output.png)

Classes created for each of the shapes used inheritance so that code is not repeated. 

![alt text](./images/HW%2010%20SVG%20FILE.png)

## Credits

I'd like to give credit to my study group who I've worked alongside with for this project as we share and check that our code works properly: Emma Daily, Michael Rader, and Michael Huang.

I'd also like to thank my instructor Bryan Swarthout and TA Shawn Tschoepe for his guidance and encouragement. 

## License
N/A

## Tests

![alt text](./images/HW%2010%20PASSED%20TESTS.png)

Please see tests files provided in repo. 

## Questions

If you have any questions, please contact me directly at pkfalberto@gmail.com.  


