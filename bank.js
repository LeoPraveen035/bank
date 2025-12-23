const prompt =require("prompt-sync")();
let accountBalance=1000;

//Check Balance
function checkBalance()
{
    console.log("============================");
    console.log("Current Balance: Rs." + accountBalance);
    console.log("============================");
    return accountBalance;
}

function depositAmountFun(amount)
{
    if(amount<=0)
    {
        console.log("**Invalid Input**");
        return false;
    }
    accountBalance=accountBalance+amount;
    console.log("Deposited: Rs." + amount);
    console.log("New Balance: Rs." + accountBalance);
    return true;
}

function withdraw(amount)
{
    if(amount<=0)
    {
        console.log("**Invalid Amount !**");
        return false;
    }
    if(amount > accountBalance)
    {
        console.log("**Insufficient Balance !**");
        return false;
    }
    accountBalance=accountBalance - amount;
    console.log("Withdrawn: Rs." + amount);
    console.log("New Balance: Rs." + accountBalance);
    return true;
}

function calculateInterest(rate = 5, year = 1)
{
    let interest=(accountBalance*rate*year) / 100;
    return interest;
}

function showBankingMenu()
{
    console.log("\n===LEO SCRIPT BANK===");
    console.log("1. Check Balance");
    console.log("2. Deposit Money");
    console.log("3. Withdraw Money");
    console.log("4. Calculate Interest");
    console.log("5. Exit");
    console.log("============================");
}

let choice;
do{
    showBankingMenu();
    choice=prompt("Enter Your Choice: ");

    switch(choice)
    {
        case "1":
            checkBalance();
            break;

        case "2":
            let depositAmount=prompt("Enter Amount to Deposit: ");
            depositAmountFun(depositAmount);
            break;

        case "3":
            let withdrawAmount=prompt("Enter Amount to Withdraw: ");
            withdraw(withdrawAmount);
            break;

        case "4":
        let rate=prompt("Enter Interest Rate (default 5): ");
        let years=prompt("Enter Years (default 1): ");
        let interest=calculateInterest(rate, years);
        console.log("Interest Earned: Rs." + interest.toFixed(2));
        console.log("Total After "+ years +"Years: Rs."+(accountBalance + interest));
        break;

        case "5":
            console.log("Thank you for using LEO SCRIPT BANK!");
            break;

        default:
            console.log("Invalid Choice!");
    }
}
while(choice!=="5");