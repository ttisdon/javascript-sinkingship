/**
 * Created by trumaine.tisdon on 7/17/17.
 */

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
    );
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
    );
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
    johnnyFiveStatus: "alive"
};

function printStringify(){
    console.log("The stringified result: \n" + JSON.stringify(stringifyObject, null, 5))
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





