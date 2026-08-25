let message = "HELLO";                    //declare and initialze 

let result = "";                           //empty result

for (let i = 0; i < message.length; i++) {

    let letter = message[i];

    let number = letter.charCodeAt(0);
    console.log(number)

    number = number + 1;

    let newLetter = String.fromCharCode(number);

    result = result + newLetter;
}
typeof(null)

console.log(result);