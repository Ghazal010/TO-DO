#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];

let condition = true;

while(condition){
    let todoTask = await inquirer.prompt([
        {
        name : "question1",
        type : "input",
        message : chalk.bold.magenta("What task would you like to add to your to-do list?")
    },
    {
        name : "question2",
        type : "confirm",
        message : chalk.bold.yellow("Do you wish to add more tasks?"),
        default : "true"
    }
]);

    todos.push(todoTask.question1);
    console.log(chalk.bold.cyanBright(todos));
    condition = todoTask.question2
}