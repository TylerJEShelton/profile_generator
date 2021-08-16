const readline = require('readline');

// create an empty string that will store the sentences with the user defined inputs
let response = "";
// create and empty string that will store the user defined name
let name = "";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// async nested questions that store responses into a string.  The paragraph is the printed to the console.
rl.question("What's your name? Nicknames are also acceptable :)? ", (answer) => {
  name += answer;
  rl.question("What's an activity you like doing? ", (answer) => {
    response += `${name} really enjoys ${answer} and `;
    rl.question("What do you listen to while doing that? ", (answer) => {
      response += `listening to ${answer} in their spare time. `;
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        response += `For ${answer}, ${name} prefers to have `;
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          response += `${answer} if it was up to them. `;
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            response += `${name}'s favourite sport is ${answer}. `;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              response += `${name} feels that their superpower is "${answer}". `;
              rl.close();
              console.log(response);
            });
          });
        });
      });
    });
  });
});