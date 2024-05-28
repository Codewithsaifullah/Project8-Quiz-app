#!/usr/bin/env node

import inquirer from "inquirer";

console.log("Welcome to the Quiz! Devleoped by Saifullah");
console.log("Choose the correct answer. Each question carry one Mark.");

const studentData = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "What is your name?:"
})

const quiz:{
    question1: string,
    question2: string,
    question3: string,
    question4: string,
    question5: string,
    question6: string,
    question7: string,
    question8: string,
    question9: string,
    question10: string
} = await inquirer.prompt([
        {
            type: "list",
            name: "question1",
            message: "Q1: Which of the following is a valid way to declare a variable in TypeScript?",
            choices: [
                "a. var variableName: type = value;",
                "b. let variableName: type = value;",
                "c. const variableName: type = value;",
                "d. All of the above"
            ]
        },
        {
            type: "list",
            name: "question2",
            message: "Q2: What is the output of the following TypeScript code?\nlet isDone: boolean = false;\nconsole.log(typeof isDone);",
            choices: [
                "a. boolean",
                "b. string",
                "c. undefined",
                "d. number"
            ]
        },
        {
            type: "list",
            name: "question3",
            message: "Q3: Which keyword is used to define an interface in TypeScript?",
            choices: [
                "a. class",
                "b. interface",
                "c. module",
                "d. enum"
            ]
        },
        {
            type: "list",
            name: "question4",
            message: "Q4: How do you specify an optional parameter in a TypeScript function?",
            choices: [
                "a. By appending a question mark (?) to the parameter name",
                "b. By using the optional keyword before the parameter name",
                "c. By appending an exclamation mark (!) to the parameter name",
                "d. By using the @Optional decorator"
            ]
        },
        {
            type: "list",
            name: "question5",
            message: "Q5: What is the correct way to declare a tuple in TypeScript?",
            choices: [
                "a. let myTuple: [number, string] = [5, \"hello\"];",
                "b. let myTuple: (number, string) = (5, \"hello\");",
                "c. let myTuple: Array<number, string> = [5, \"hello\"];",
                "d. let myTuple: number, string = [5, \"hello\"];"
            ]
        },
        {
            type: "list",
            name: "question6",
            message: "Q6: Which TypeScript feature allows you to restrict the types of elements in an array?",
            choices: [
                "a. Interfaces",
                "b. Tuples",
                "c. Generics",
                "d. Enums"
            ]
        },
        {
            type: "list",
            name: "question7",
            message: "Q7: What is the purpose of the never type in TypeScript?",
            choices: [
                "a. It represents a type that always contains a value.",
                "b. It represents a type that is used for functions that never return.",
                "c. It represents a type that can hold any value.",
                "d. It represents a type that is null or undefined."
            ]
        },
        {
            type: "list",
            name: "question8",
            message: "Q8: How do you specify the type of an array of numbers in TypeScript?",
            choices: [
                "a. let numbers: number[];",
                "b. let numbers: Array[number];",
                "c. let numbers: number<>;",
                "d. let numbers: Array of number;"
            ]
        },
        {
            type: "list",
            name: "question9",
            message: "Q9: What is the correct syntax to import a single export from a module in TypeScript?",
            choices: [
                "a. import { myExport } from \"myModule\";",
                "b. import myExport from \"myModule\";",
                "c. require(\"myModule\").myExport;",
                "d. include { myExport } from \"myModule\";"
            ]
        },
        {
            type: "list",
            name: "question10",
            message: "Q10: Which of the following is true about TypeScript?",
            choices: [
                "a. TypeScript is a statically typed superset of JavaScript.",
                "b. TypeScript is a dynamically typed superset of JavaScript.",
                "c. TypeScript is a programming language developed by Google.",
                "d. TypeScript does not support object-oriented programming."
            ]
        }
    ]);

    let obtainedMarks:number = 0;
    let totalMarks:number = 10;

    switch (quiz.question1) {
        case "d. All of the above":
            console.log("1. Correct");
            obtainedMarks += 1;
            break;
        default:
            console.log("1. Incorrect");
    }
    
    switch (quiz.question2) {
        case "a. boolean":
            console.log("2. Correct");
            obtainedMarks += 1;
            break;
        default:
            console.log("2. Incorrect");
    }
    
    switch (quiz.question3) {
        case "b. interface":
            console.log("3. Correct");
            obtainedMarks += 1;
            break;
        default:
            console.log("3. Incorrect");
    }
    
    switch (quiz.question4) {
        case "a. By appending a question mark (?) to the parameter name":
            console.log("4. Correct");
            obtainedMarks += 1;
            break;
        default:
            console.log("4. Incorrect");
    }
    
    switch (quiz.question5) {
        case "a. let myTuple: [number, string] = [5, \"hello\"];":
            console.log("5. Correct");
            obtainedMarks += 1;
            break;
        default:
            console.log("5. Incorrect");
    }
    
    switch (quiz.question6) {
        case "c. Generics":
            console.log("6. Correct");
            obtainedMarks += 1;
            break;
        default:
            console.log("6. Incorrect");
    }
    
    switch (quiz.question7) {
        case "b. It represents a type that is used for functions that never return.":
            console.log("7. Correct");
            obtainedMarks += 1;
            break;
        default:
            console.log("7. Incorrect");
    }
    
    switch (quiz.question8) {
        case "a. let numbers: number[];":
            console.log("8. Correct");
            obtainedMarks += 1;
            break;
        default:
            console.log("8. Incorrect");
    }
    
    switch (quiz.question9) {
        case "a. import { myExport } from \"myModule\";":
            console.log("9. Correct");
            obtainedMarks += 1;
            break;
        default:
            console.log("9. Incorrect");
    }
    
    switch (quiz.question10) {
        case "a. TypeScript is a statically typed superset of JavaScript.":
            console.log("10. Correct");
            obtainedMarks += 1;
            break;
        default:
            console.log("10. Incorrect");
    }

    console.log(studentData.name +"!" + " You have scored " + obtainedMarks + " out of " + totalMarks + " marks.");

    if (obtainedMarks === 10) {
        console.log("You have gotten first position.");
    } else if (obtainedMarks === 9) {
        console.log("You have gotten second position.");
    } else if (obtainedMarks === 3) {
        console.log("You have gotten third position.");
    } else if (obtainedMarks >= 4 && obtainedMarks <= 7) {
        console.log("You are pass.");
    } else {
        console.log("You are fail.");
    }


    