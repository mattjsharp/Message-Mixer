// This is for the Message Mixer project on Codecademy.com

let message1 = ["Hi there", "Good morning/afternoon/evening/night", "Hola", "HELLOOOOO!!!!", "Hello", "What is your name person?", "Fantastic day we\'re having", "Buenos dias/tardes/noches", "Glad to see you made it!", "What is uppp"];
let goods = ["GOOD", "GREAT", "FANTASTIC", "WONDERFUL", "EXTATIC", "HAPPY", "GLAD", "SATISFACTORY"];
let bads = ["BAD", "ANGRY", "HORRIBLE", "AWFUL"];
let weekDay = new Date().getDay();
switch(weekDay){
    case 0:
        weekDay = "Sunday";
    break;
    case 1:
        weekDay = "Monday";
    break;
    case 2:
        weekDay = "Tuesday";
    break;
    case 3:
        weekDay = "Wednesday";
    break;
    case 4:
        weekDay = "Thursday";
    break;
    case 5:
        weekDay = "Friday";
    break;
    case 6:
        weekDay = "Saturday";
    break;
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});  

const randoMessage = (a) => {
    let message = Math.floor(Math.random() * message1.length);
    console.log(a[message]);
    setTimeout(() => {
        readline.question(`How is your ${weekDay} going?\nType your answer here: `, () => {
            console.log("wow");
            readline.close();
        })
    }, 2000);
}

randoMessage(message1);