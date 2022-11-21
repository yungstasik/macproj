"use strict";

alert('hello');

const result = confirm('Are u here?');
console.log(result);

const answer = prompt("вам есьб 18?", "18");
console.log(answer); 

const answers = [];

answers[0] = prompt('What is ur name?', ''); 
answers[1] = prompt('What is ur surname?', ''); 
answers[2] = prompt('how old are u?', ''); 
 
document.write(answers);