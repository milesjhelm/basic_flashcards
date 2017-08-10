var inquirer = require("inquirer");

function BasicCard(front, back) {
 	this.front = front;
 	this.back = back;
 } 


var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");

var poseQuestion = function() {
	inquirer.prompt({
		name: "user_input",
		message: firstPresident.front
	}).then(function(answers){
		if (answers.user_input === firstPresident.back) {
			console.log("Right you are!");
		} else {
			console.log("Wrong. The correct answer is " + firstPresident.back);
		}
	})
}

poseQuestion();