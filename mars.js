alert ('Hello!')
alert ('Starting your journey to Mars!')
alert ('Gearing Up..')
alert ('All systems firing!')
alert ("Let's go!")
let username = prompt('Hi there, whats your name?')
alert (`Hi ${username}--welcome to the mars adventure game!`)
alert ('Yesterday, you received a call from your good friend at NASA')
alert ("They need someone to go to Mars this weekend, and You've been chosen!")
let answer = prompt('Are you excited? (Type Y or N)')
answer = answer.toUpperCase()
if (answer === 'Y' ) {
alert ("I knew you would say that. It's so cool that you're going to mars!")
} else if (answer === 'N') {
alert ("well, it's too late to back out now")
}
alert ("It's time to pack for your trip to mars.")
let numSuitcases = prompt ('How many suitcases do you plan to bring?')
numSuitcases=Number(numSuitcases)
if (numSuitcases>2) {
    alert ("That's way too many suitcases! You'll have to pack more lightly")
} else {
    alert ("Perfect, you'll certainly fit in the spaceship")
}

alert("You're allowed to bring one companion animal with you.")
const companionType = prompt("What kind of animal would you like to bring?")
let companionName = prompt("What is your companion's name?")
let firstLetter = companionName[0]
firstLetter = firstLetter.toUpperCase()
let otherLetters = companionName.slice(1)
otherLetters = otherLetters.toLowerCase()
companionName = firstLetter + otherLetters
alert (`Cool, so you're bringing ${companionName} the ${companionType}.`)
alert('NASA has a interior design team offering to outfit your space ship.');
alert(`You have a couple of options for the interior decor of your ship. Your options are:
A  Sleek, modern minimalism
B  Retro/vintage space age
C  Victorian-era steampunk
`);

let decorChoice = prompt("Type A, B, or C")
decorChoice = decorChoice.toUpperCase()
let decor
if (decorChoice === 'A') {
decor = 'modern minimalist'
} else if (decorChoice === 'B' ) {
}
    else {
        decor = 'steampunk'
    }
alert (`${username} and ${companionName}, surfing the celestial abyss, in a ${decor} spaceship. `)
let timer = 5
while (timer>0) {
    alert (`${timer}...`)
    timer -= 1
}
alert ('*** LIFTOFF ***')
