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

    this.constructColor = "red";
    this.constructWidth = 300;
    this.constructHeight = 250;
    console.log(this);
}

ConstructApple.prototype = {
  eat: function () {return "EAT ALL THE THINGS"},
  throw: function () {return "THROW ALL THE THINGS"},
  nibble: function() {return "NIBBLE ALL THE THINGS"}
};

var crapple1 = new ConstructApple();
var crapple2 = new ConstructApple();
var crapple3 = new ConstructApple();



/*
Conditional functions
 */
function conditional(){
    if(5 > 2){
        return "This will be true";
    }
}

var check = "cake";


if (check === "cake" || check === "cupcake") {

    score = 1;
    console.log("Correct your score is now " + 1);
} else {
    score = 0;
}


/*
For loops
 */
var loopArray = [];

/*
Incremental push
 */
for (var i = 0; i < 10; i++){
    loopArray.push(i)
}

/*
Decremental loop
 */
for (var n = 10; n > 0; n-- ) {
    loopArray.push(n);
}

var helloArray = [
    "hello",
    "my baby",
    "hello",
    "my darling"
];

for (var h = 0; h < helloArray.length; h++) {
    console.log(helloArray[h] + " is in the " + h + " index.");
}

/*
An object with key:value pairs
 */
var colorObj = {color : "red", width: 200, height: 800};

/*
Gets colorObjs keys and stores them in an array
 */
var objKeyArray = Object.keys(colorObj);

/*
Prints out the values of colorObj using objKeyArray for the keys
 */
for(var o = 0; o < objKeyArray.length; o++){
    console.log(colorObj[objKeyArray[o]]);
}


/*
Function used in the eventListener and onClick tests
 */
var alertFunction = function () {
    alert('YA DUN GOOD CLICKIN DERE!')
};

/*
Finds the element with the id 'eventClick' and on click an alert appears that says "TEST ALL THE THINGS BRUH"
 */
document.getElementById('eventClick').onclick = function () {
    alert("SHHIIIIAAAAT YA CLICKED!")
};

/*
Listens for the onClick function for the listenerClick button then alerts with DIS DAT LISTENER when clicked
addEventListener is faster than regular onClick
 */
document.getElementById('listenerClick').addEventListener('click', alertFunction);
document.getElementById('listenerClick').addEventListener('click', function() {
    alert("Take that and rewind it back!")
});
document.getElementById('removeAlerts').addEventListener('click', function() {
    alert("CLICK ON DAT IS OH SO FRESH AND OH SO MOTHERFUCKIN CLEAN");
    document.getElementById('listenerClick').removeEventListener('click', alertFunction)
});


/*
Testing with this keyword
 */

var thisObj = {
    name : "Totes",
    name2: "MaGotes",
    inner: {
        innerName: "Celery",
        innerName2: "Man",
        innerThis: function () {
            console.log(this)
        }
    },
    outerThis: function() {
        console.log(this)
    }
};

thisObj.inner.innerThis();
thisObj.outerThis();

document.getElementById('thisButton').addEventListener('click', function(){
   console.log(this);
   console.dir(this);
});