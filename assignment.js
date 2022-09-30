
function jogTime() {
    const prompt = require("prompt-sync")()
    let user = prompt("What is your name? ")

    //Greet User
    let getDATE = new Date()
    let Hours = getDATE.getHours()

    if (Hours > 1 && Hours < 12)
        console.log(`Good Morning ${user}`)
    else if (Hours > 12 && Hours < 18)
        console.log(`Good Afternoon ${user}`)
    else {
        console.log(`Good evening ${user}`)
    }

    //JogTime
    let jogArr = []
    let FirstSess = parseInt(prompt("How long would you like to jog for? "))
    jogArr.push(FirstSess)

    const askAgain = prompt("Your first jog session ellapsed. would you like to continue? y/n ")
    if (askAgain === "y" || askAgain === "Y") {
        //second session
        let SecondSess = parseInt(prompt("2nd lap: How long would you like to jog for? "))
        jogArr.push(SecondSess)
    } else
        console.log(`your total jog time is ${FirstSess} minutes.`)
    

    //third sess
    const askAgain2 = prompt("Your second jog session ellapsed. would you like to continue? y/n ")
    if (askAgain === "y" || askAgain === "Y") {
        let Thirdsess = parseInt(prompt("3rd lap: How long would you like to jog for? "))
        jogArr.push(Thirdsess)

    } else if(askAgain === "n" || askAgain === "N")
        console.log(`your total jog time is ${jogArr.reduce((a, b) => {
            return a + b
        })} minutes.`)
    
    //fourth sess
    const askAgain3 = prompt("Your third jog session ellapsed. would you like to continue? y/n ")
    if (askAgain === "y" || askAgain === "Y") {
        let fourthSess = parseInt(prompt("4th lap: How long would you like to jog for? "))
        jogArr.push(fourthSess)
    } else if(askAgain === "n" || askAgain === "N")
        console.log(`your total jog time is ${jogArr.reduce((a, b) => {
            return a + b
        })} minutes.`)
    
    //fifth sess
    const askAgain4 = prompt("Your fourth jog session ellapsed. would you like to continue? y/n ")
    if (askAgain === "y" || askAgain === "Y") {
        let fifthSess = parseInt(prompt("5th lap: How long would you like to jog for? "))
        jogArr.push(fifthSess)

    } else if(askAgain === "n" || askAgain === "N")
        console.log(`your total jog time is ${jogArr.reduce((a, b) => {
            return a + b
        })} minutes.`)
    
    //sixth sess
    const askAgain5 = prompt("Your Fifth jog session ellapsed. would you like to continue? y/n ")
    if (askAgain === "y" || askAgain === "Y") {
        let sixSess = parseInt(prompt("6th lap: How long would you like to jog for? "))
        jogArr.push(sixSess)
    } else if(askAgain === "n" || askAgain === "N")
        console.log(`your total jog time is ${jogArr.reduce((a, b) => {
            return a + b
        })} minutes.`)
    
    //seventh sess
    const askAgain6 = prompt("Your sixth jog session ellapsed. would you like to continue? y/n ")
    if (askAgain === "y" || askAgain === "Y") {
        let sixSess = parseInt(prompt("7th lap: How long would you like to jog for? "))
        jogArr.push(sixSess)
        console.log(`your total jog time is ${jogArr.reduce((a, b) => {
            return a + b
        })} minutes.`)
    }


    console.log(`your total jog time is ${jogArr.reduce((a, b) => {
        return a + b
    })} minutes.`)
}
jogTime()
