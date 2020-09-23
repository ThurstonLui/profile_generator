const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// const r2 = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });



//  rl.question('What\'s your name? Nicknames are also acceptable :)? ',  (answer1)  =>  {
//   // TODO: Log the answer in a database
  
//   console.log(`Thank you for your valuable feedback: ${answer1}`);

//   rl.close();
  
  
// });
rl.question('What\'s your name? Nicknames are also acceptable :)? ',  (answer1)  =>  {
rl.question('What\'s an activity you like doing? ',  (answer2)  =>  {
rl.question('What do you listen to while doing that?  ',  (answer3)  =>  {
rl.question('What\'s your favourite thing to eat for that meal? ',  (answer4)  =>  {
rl.question('Which sport is your absolute favourite?',  (answer5)  =>  {
rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)',  (answer6)  =>  {
rl.question('What is your superpower? In a few words, tell us what you are amazing at!',  (answer7)  =>  {
  // TODO: Log the answer in a database
  
  console.log(`Thank you for your valuable feedback: ${answer1} ${answer2} ${answer3} ${answer4} ${answer5}
  ${answer6} ${answer7}`);

  rl.close();
});  
});  
});
});  
});  
});
});  



// r2.question('What\'s an activity you like doing? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });
