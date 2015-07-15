// define variable for question
var question = 'Would you like to slay a dragon?';

// define variable for prompt / user answer
var answer = prompt(question);

// define variable to check user's answer 
var message = checkAnswer(answer);

// define variable to add question to h1
var questionElem = document.getElementById('question');
questionElem.innerHTML = question;

// define variable to add user's answer to h2
var answerElem = document.getElementById('answer');
answerElem.innerHTML = answer;

// define variable to add message response 
var messageElem = document.getElementById('message');
messageElem.innerHTML = message;

function checkAnswer(answer) {
	if (answer.toLowerCase() == 'yes') {
		return ('Aiiiight, let\'s slay dat proverbial dragon.');
	} else if (answer.toLowerCase() == 'no'){
		return ('Das cool, we\'ll chill instead.');
	} else {
		return ('Hmmm...I\'m not so sure what you wanna do; let\'s grab some bevies and mull it over.');
	}
}

checkAnswer(answer);