const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let output = {};
rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  output.name = answer;
  rl.question("What's an activity you like doing?", (answer) => {
    output.activity = answer;
    rl.question("What do you listen to while doing that?", (answer) => {
      output.listen = answer;
      rl.question(
        "Which meal is your favourite (eg: dinner, brunch, etc.)",
        (answer) => {
          output.meal = answer;
          rl.question(
            "What's your favourite thing to eat for that meal?",
            (answer) => {
              output.food = answer;
              console.log(
                `${output.name} likes ${output.activity}, listen ${output.listen} while doing the ${output.activity}, faviour meal is ${output.meal}, and favourite food is ${output.food} `
              );
              rl.close();
            }
          );
        }
      );
    });
  });
});
