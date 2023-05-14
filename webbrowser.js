console.log("Hello World!")
VM117:1 Hello World!
undefined
let num = 5
undefined
var mystr = "John"
undefined
console.log(num)
VM245:1 5
undefined
console.log(mystr)
VM326:1 John
undefined
const pi_val = 3.147
undefined
console.log(pi_val)
VM427:1 3.147
undefined
function printMyInput(user_input) {
    console.log("The parameter passed is "+user_input)
}
undefined
printMyInput(9)
VM431:2 The parameter passed is 9
undefined
printMyInput("John")
VM431:2 The parameter passed is John
undefined
let printMyInputES6 = (user_input)=>{
    console.log(user_input)
}
undefined
printMyInput("John")
VM431:2 The parameter passed is John
undefined
printMyInputES6("John")
VM490:2 John
undefined
printMyInputES6(9)
VM490:2 9
undefined
console.log("5 + 3 = ",5+3)
console.log("7 - 3 = ",7-3)
console.log("8 * 2 = ",8*2)
console.log("27 / 3 = ",27/3)
console.log("4 power 3 = ",4 ** 3)
console.log("19 mod 4 = ",19%4)
VM553:1 5 + 3 =  8
VM553:2 7 - 3 =  4
VM553:3 8 * 2 =  16
VM553:4 27 / 3 =  9
VM553:5 4 power 3 =  64
VM553:6 19 mod 4 =  3
undefined
x = 5
console.log("Old value x ",x)
x += 3
console.log("New value x ",x)
VM557:2 Old value x  5
VM557:4 New value x  8
undefined
y = 5
console.log("Old value y = ",y)
y -= 3
console.log("New value y = ",y)
VM572:2 Old value y =  5
VM572:4 New value y =  2
undefined
a = 6
console.log("Old value a ",a)
a *= 3
console.log("New value a ",a)
VM577:2 Old value a  6
VM577:4 New value a  18
undefined
b = 6
console.log("Old value b ",b)
b /= 3
console.log("New value b ",b)

VM581:2 Old value b  6
VM581:4 New value b  2
undefined
c = 6
console.log("Old value c ",c)
c %= 3
console.log("New value c ",c)
VM585:2 Old value c  6
VM585:4 New value c  0
undefined
d = 6
console.log("Old value d ",d)
d **= 3
console.log("New value d ",d)
VM589:2 Old value d  6
VM589:4 New value d  216
undefined
//Checking equality of 5 number type and 5 string type
console.log("5=='5' ", 5=='5')
console.log("5==='5' ", 5==='5')
console.log("5===5 ", 5===5)
VM593:2 5=='5'  true
VM593:3 5==='5'  false
VM593:4 5===5  true
undefined
console.log("5 != 5 ", 5 !== 5)
console.log("5 != 6 ", 5 != 6)
console.log("5 != '5' ", 5 !== '5')
VM597:1 5 != 5  false
VM597:2 5 != 6  true
VM597:3 5 != '5'  true
undefined
console.log("5 > 2 ", 5 > 2)
console.log("5 > 7 ", 5 > 7)
console.log("5 > 5 ", 5 > 5)
VM601:1 5 > 2  true
VM601:2 5 > 7  false
VM601:3 5 > 5  false
undefined
console.log("5 < 7 ", 5 < 7)
console.log("5 < 2 ", 5 < 2)
console.log("5 < 5 ", 5 < 5)
VM605:1 5 < 7  true
VM605:2 5 < 2  false
VM605:3 5 < 5  false
undefined
console.log("5 >= 5 ", 5 >= 5 )
console.log("5 <= 5 ", 5 <= 5 )
VM609:1 5 >= 5  true
VM609:2 5 <= 5  true
undefined
//Accept a input from the user. If it is a number print the multiplication table for the number. Else print the input and the length of the input.

let user_input = prompt('Enter a value');
//check if the user input is not a number
if(isNaN(user_input)) {
    console.log("Your input is ",user_input)
    console.log("The length of your input is ",user_input.length)
} else {
    console.log(user_input, " X 1 = ",user_input*1)
    console.log(user_input, " X 2 = ",user_input*2)
    console.log(user_input, " X 3 = ",user_input*3)
    console.log(user_input, " X 4 = ",user_input*4)
    console.log(user_input, " X 5 = ",user_input*5)
    console.log(user_input, " X 6 = ",user_input*6)
    console.log(user_input, " X 7 = ",user_input*7)
    console.log(user_input, " X 8 = ",user_input*8)
    console.log(user_input, " X 9 = ",user_input*9)
    console.log(user_input, " X 10 = ",user_input*10)
}
VM613:9 10  X 1 =  10
VM613:10 10  X 2 =  20
VM613:11 10  X 3 =  30
VM613:12 10  X 4 =  40
VM613:13 10  X 5 =  50
VM613:14 10  X 6 =  60
VM613:15 10  X 7 =  70
VM613:16 10  X 8 =  80
VM613:17 10  X 9 =  90
VM613:18 10  X 10 =  100
undefined
//Accept a input from the user. If it is a number print the multiplication table for the number. Else print the input and the length of the input.

let user_input = prompt('Enter a value');
//check if the user input is not a number
if(isNaN(user_input)) {
    console.log("Your input is ",user_input)
    console.log("The length of your input is ",user_input.length)
} else {
    console.log(user_input, " X 1 = ",user_input*1)
    console.log(user_input, " X 2 = ",user_input*2)
    console.log(user_input, " X 3 = ",user_input*3)
    console.log(user_input, " X 4 = ",user_input*4)
    console.log(user_input, " X 5 = ",user_input*5)
    console.log(user_input, " X 6 = ",user_input*6)
    console.log(user_input, " X 7 = ",user_input*7)
    console.log(user_input, " X 8 = ",user_input*8)
    console.log(user_input, " X 9 = ",user_input*9)
    console.log(user_input, " X 10 = ",user_input*10)
}
VM617:6 Your input is  kjguuuh
VM617:7 The length of your input is  7
undefined
//Accept a input from the user. If it is a number print the multiplication table for the number. 

let user_input = prompt('Enter a number');
//check if the user input is not a number
if(!isNaN(user_input)) {
    //Using for loop for the repitive statement
    for (let i=0;i<10;i++) {
        console.log(user_input, " X ",i," = ",user_input*i)
    }
}
undefined
//Accept a input from the user. If it is a number print the multiplication table for the number. 

let user_input = prompt('Enter a number');
//check if the user input is not a number
if(!isNaN(user_input)) {
    //Using for loop for the repitive statement
    for (let i=0;i<10;i++) {
        console.log(user_input, " X ",i," = ",user_input*i)
    }
}
VM625:8 5  X  0  =  0
VM625:8 5  X  1  =  5
VM625:8 5  X  2  =  10
VM625:8 5  X  3  =  15
VM625:8 5  X  4  =  20
VM625:8 5  X  5  =  25
VM625:8 5  X  6  =  30
VM625:8 5  X  7  =  35
VM625:8 5  X  8  =  40
VM625:8 5  X  9  =  45
undefined
//Accept a input from the user. If it is a number print the multiplication table for the number. 

let user_input = prompt('Enter a number');
//check if the user input is not a number
if(!isNaN(user_input)) {
    //Using for loop for the repitive statement
    for (let i=0;i<=10;i++) {
        console.log(user_input, " X ",i," = ",user_input*i)
    }
}
VM632:8 5  X  0  =  0
VM632:8 5  X  1  =  5
VM632:8 5  X  2  =  10
VM632:8 5  X  3  =  15
VM632:8 5  X  4  =  20
VM632:8 5  X  5  =  25
VM632:8 5  X  6  =  30
VM632:8 5  X  7  =  35
VM632:8 5  X  8  =  40
VM632:8 5  X  9  =  45
VM632:8 5  X  10  =  50
undefined
//The code below is to find the length of the words the user is entering. The loop will go on and on until the user chooses not to continue by pressing 'n'

let do_more = true

while(do_more) {
    //Accept a input from the user. 
    let user_input = prompt('Enter a word');
    //check if the user input is not a number and then print the length of the input
    if(isNaN(user_input)) {
        console.log("Length of the word you entered is "+user_input.length)
    } else {
        console.log("You entered a number. Only words are allowed")
    }
    let should_continue = prompt("Do you want to continue. Press n to stop")
    
    if(should_continue === "n") {
        do_more = false
    }
}
VM636:12 You entered a number. Only words are allowed
false
//The code below is to find the length of the words the user is entering. The loop will go on and on until the user chooses not to continue by pressing 'n'

let do_more = true

while(do_more) {
    //Accept a input from the user. 
    let user_input = prompt('Enter a word');
    //check if the user input is not a number and then print the length of the input
    if(isNaN(user_input)) {
        console.log("Length of the word you entered is "+user_input.length)
    } else {
        console.log("You entered a number. Only words are allowed")
    }
    let should_continue = prompt("Do you want to continue. Press n to stop")
    
    if(should_continue === "n") {
        do_more = false
    }
}
VM640:10 Length of the word you entered is 2
VM640:10 Length of the word you entered is 8
VM640:10 Length of the word you entered is 4
false
let user_input = prompt('Enter a number between 1 to 7');

//Using logical OR operator to check if the input is a number and it is between 1 to 7
if(isNaN(user_input) || user_input< 1 || user_input>7) {
    console.log("Invalid input")
} else {
    user_input = parseInt(user_input)
    switch(user_input){
        case 1: console.log("Sunday");break;
        case 2: console.log("Monday");break;
        case 3: console.log("Tuesday");break;
        case 4: console.log("Wednesday");break;
        case 5: console.log("Thursday");break;
        case 6: console.log("Friday");break;
        case 7: console.log("Saturday");break;
        default: console.log("Invalid entry");
    }
}
VM644:5 Invalid input
undefined
let user_input = prompt('Enter a number between 1 to 7');

//Using logical OR operator to check if the input is a number and it is between 1 to 7
if(isNaN(user_input) || user_input< 1 || user_input>7) {
    console.log("Invalid input")
} else {
    user_input = parseInt(user_input)
    switch(user_input){
        case 1: console.log("Sunday");break;
        case 2: console.log("Monday");break;
        case 3: console.log("Tuesday");break;
        case 4: console.log("Wednesday");break;
        case 5: console.log("Thursday");break;
        case 6: console.log("Friday");break;
        case 7: console.log("Saturday");break;
        default: console.log("Invalid entry");
    }
}
VM648:13 Thursday
undefined
let myArray = ["Jack","Jill",4,5,true,"John"]

console.log(myArray[0]);
console.log(myArray[5]);
VM652:3 Jack
VM652:4 John
undefined
let myMap = new Map();

//Here name is key and John is the value. 
myMap.set("name","John")

//Here age is the key and 22 is the value.
myMap.set("Age",22)

myMap.forEach((val,key) => {
    console.log(key," - ",val)
})
VM656:10 name  -  John
VM656:10 Age  -  22
undefined
