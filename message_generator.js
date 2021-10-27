/* Project aims: For this project, you will build a message generator program. 
Every time a user runs a program, they should get a new, randomized output. 
You’re welcome to take the project in a couple of different forms, like an astrology generator, 
inspirational message, or nonsensical jokes. To make your program truly random, 
the message that it outputs should be made up of at least three different pieces of data. 
Take what you know of JavaScript syntax so far to build the program and customize it to your liking. */

// object containing the texts
/* An array would be a good choice here because you can randomly access an array’s elements. 
Remember, there will be at least 3 sets of data that make up your final message so you might consider 
having multiple arrays. You may want to nest these arrays inside of an object to keep them organized. */

//arrays
let time = ["Today", "Tomorrow", "At the weekend"];
let personAbility = ["you will", "you won't", "you should"];
let action = ["travel to Rome", "clean your home", "sleep a lot"];

console.log(`Your prediction for the near future: ${time[Math.floor(Math.random()*3)]} ${personAbility[Math.floor(Math.random()*3)]} ${action[Math.floor(Math.random()*3)]}.`);