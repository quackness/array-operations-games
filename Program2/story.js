let fs = require('fs');
let readlineSync = require('readline-sync');

//read the csv file
let optionsFile = fs.readFileSync(__dirname + "/the_choices_file.csv", 'utf8');
//split the content read from the file into array
let optionsArray = optionsFile.split(/\r?\n|\r|\n/g);
let grid = []
let selections = [];
let options;
let letters = ["a","b","c","d","e"];
let selection;
//create a function which is responsible to take the input from then command line and add it to an array called selections
const createSelectionArray = function () {
  if (letters.includes(selection)) {
    //push the option value selected by the user into selections array
    selections.push(options[letters.indexOf(selection)]);
  }
}


//loop through each line and turn it into an array, use a comma as a seperator
for (let i = 0; i < optionsArray.length; i++) {
  let line = optionsArray[i].split(',');
  //push it into an array to create a grid
  grid.push(line);
  let question = grid[i][0];
  //slice off a part of the array which holds options which user whill be able to select from, save it in a var
  options = grid[i].slice(1);
  //Print to console instructions
  console.log(`Please choose ${question}:`)
  //loop the options from the array we proviously sliced off
  for (let k = 0; k < options.length; k++) {
    //display the options to the console
    console.log(`${letters[k]}: ${options[k]}`)
  }

  do {
    //prompt the user to select the option
    selection = readlineSync.question("Enter choice (a-e): ")
    //invoke the function
    createSelectionArray();
  } while (!letters.includes(selection));//invalid entry handling
};
//read in the story from txt file
let alteredStory = fs.readFileSync(__dirname + "/the_story_file.txt", 'utf8');
//loop through the received selections
for (let z = 0; z < selections.length; z++) {
  //replace strings like: _number_ with what user selected and uppercase it
  alteredStory = alteredStory.replaceAll(`_${z+1}_`, selections[z].toUpperCase());
};
//print the altered story
console.log(alteredStory)


