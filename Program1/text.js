let fs = require('fs');
//read the file
let text = fs.readFileSync('aTeam.txt', 'utf8');
console.log('-------------------------------------');
console.log('Original Text');
console.log('-------------------------------------');
//output the text from the file to the console
console.log(text);
//turn the text into an array using split at new line and \r
let unchangedText = text.split('\r\n');
let final = [];
//loop through the lines of the splitted text
for (let i = 0; i < unchangedText.length; i++) {
    //define prepending, iteration turn + 1 to create orderd list
    let prependValue = i + 1;
    let prependedline = prependValue + ': ' + unchangedText[i];
    //define condition: lines of text that are longer than 20 chars should be all lower case
    if (prependedline.length > 20) {
        let lower = prependedline.toLowerCase();
        final.push(lower);
    } else { //lines shorter than 20 are uppercased
        let upped = prependedline.toUpperCase();
        final.push(upped);
    }
}
//omit a random line, replace with empty line
let randomSelectLine = Math.floor(Math.random() * final.length);
final.splice(randomSelectLine, 1, " ")[0];
console.log('\n');
//print the altered text
console.log('-------------------------------------');
console.log('Altered Text');
console.log('-------------------------------------');
let alteredText = '';
//loop the final text version and log to the console add a line break
for (let i = 0; i < final.length; i++) {
    alteredText += final[i] + '\n';
};
console.log(alteredText);
//save the aletredText to the file called file.txt
fs.writeFile('file.txt', alteredText, (err) => {
    if (err) {
        throw err;
    }
});




