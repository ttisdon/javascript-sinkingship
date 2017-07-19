/**
 * Created by trumaine.tisdon on 7/17/17.
 */

/*
Example of a constructor
 */
function Apple(x, y, color, score) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.score = score;
}

var apple1 = new Apple(5, 4, "brown", 475);
var apple2 = new Apple(49, 42, "yella", 884);

/*
Returns a predetermined name with the 'Captain' title
Uses nested functions
 */
function captainName() {
    var captainInTraining = "Trumaine Tisdon";
    function addCaptainTitle(nameWithoutTitle) {
        return "Captain " + nameWithoutTitle
    }
    return addCaptainTitle(captainInTraining);
}

/*
Returns the first and last name of an object with keys 'firstName' and 'lastName'
 */
function printFirstAndLastName(nameObject) {
    return nameObject.firstName + " " + nameObject.lastName;
}

/*
 An object that is a name
 */
var nameThatWillBePrinted = {firstName: "Baba", lastName : "Ganoush"};

/*
Prints the captain result when called
 */
function printCaptainTest() {
    console.log(
        printFirstAndLastName(nameThatWillBePrinted) + " is a fancy foe, but " + captainName() + " is far superior!"
    )
}


/*
Returns a function
If you just want to print out the method of 'functionObject', do not add ()
If you want to execute 'functionObject', add ()
 */
function returnFunctionObject(functionObject) {
    return functionObject();
}

/*
Prints the returnFunction result when called
 */
function printReturnFunctionTest() {
    console.log(
        returnFunctionObject(function () {
            return "I'm the result of returnFunctionObject. Deal with it."
        })
    )
}



/*
Stringify all the things
 */
var stringifyObject = {
    heads: "shoulders",
    knees: "toes",
    knees2: {
        and: "toes"
    },
    number: 10,
    johnnyFiveStatus: "alive",
    stringifyMeFunctiont: function () {
        return "Stringify Me Pls"
    }
};

function printStringify(){
    console.log("The stringified result: \n" + JSON.stringify(stringifyObject, null, 2))
}



/*
Memory Hoisting example:
console.log() will run memoryHoistingFunction() because it was hoisted above the variable
 */
function memoryHoistingTest() {
    console.log(memoryHoisting, memoryHoistingFunction());
    var memoryHoisting = "I'm a memory hoisted string";
    function memoryHoistingFunction() { return "I'm a memory hoisted function"}
}


/*
Returnable objects have access to .call and other methods
 */
function returnableObject(object) {
    return object;
}

/*
Testing the scope of the 'this' keyword
 */
function globalTest() {
    console.log('from the global', this);
    function sub(){
        console.log('from the sub', this)
    }
    sub();
}


/*
Testing prototyping
__proto__, look that up for a better understanding
 */
var prototypeApple = {
    color: "red",
    width: 200,
    height: 150
};

var eatPrototypeApple = {
  eat: function () {},
  toss: function(){},
  nibble: function () {}
};

/*
The array will have different functions available in the __proto__ compared to the object
 */
var prototypeArray = [
    "fart",
    "real",
    "hard",
    13
];


/*
Constructors with prototypes
 */

function ConstructApple() {

    // this.constructColor = "red";
    // this.constructWidth = 300;
    // this.constructHeight = 250;
    // console.log(this);
}

ConstructApple.prototype = {
  eat: function () {return "EAT ALL THE THINGS"},
  throw: function () {return "THROW ALL THE THINGS"},
  nibble: function() {return "NIBBLE ALL THE THINGS"}
};

var crapple1 = new ConstructApple();
var crapple2 = new ConstructApple();
var crapple3 = new ConstructApple();

