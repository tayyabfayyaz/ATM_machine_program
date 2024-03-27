#! /usr/bin/env node

import inquirer from "inquirer";

let myBalence = 10000; // In Dollar

let myPin = 2314;

let userPin = await inquirer.prompt(
    {
        name: "enterPin",
        message: "Enter your Pin Number:",
        type: "number"
    }
)

if (userPin.enterPin === myPin) {
    console.log(`Your Pin number is correct!!!`);

    let whatProcess = await inquirer.prompt(
        {
            name: "userAnswer",
            message: "What you want:",
            type: "list",
            choices: ["Withdrawal", "Fast Cash", "Check Balence"]
        }
    )

    if (whatProcess.userAnswer === "Withdrawal") {
        
        let WithdrawalTransaction = await inquirer.prompt(
            {
                name: "enterAmount",
                message: "Enter amount:",
                type: "number"
            }
        )
        if (WithdrawalTransaction.enterAmount > myBalence) {
            console.log(`${myBalence} Your account balence is low!!`);
        }else {
            myBalence -= WithdrawalTransaction.enterAmount;
        console.log(`Remaining balence in your account: ${myBalence}`);
        }
    } else

    if (whatProcess.userAnswer === "Fast Cash") {

        let fastCashTransaction = await inquirer.prompt(
            {
                name: "fastEnterAmount",
                message: "How many ammount you want to withdrawal:",
                type: "list",
                choices: ["2000", "4000", "6000", "8000", "10000"]
            }
        )
        myBalence -= fastCashTransaction.fastEnterAmount;
        console.log(`Your remaining ammount in your account after Fast Trasaction: ${myBalence}`);
    }else 
    if (whatProcess.userAnswer === "Check Balence") {

        console.log(`Your current balence in your account is: ${myBalence}`);
    }

}else {
    console.log(`Incorrect Pin number!!!`);
}

