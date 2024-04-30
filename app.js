#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "userNumberguessing",
        message: "guess the number between 1-10"
    },
]);
console.log(randomNumber);
if (answers.userNumberguessing === randomNumber) {
    console.log("you win");
}
else {
    console.log("you lose");
}
