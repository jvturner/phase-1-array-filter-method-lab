// Three Functions
//Function #1:  findMatching- Take an array of driver's names; and a string as arguments; returns matching list of drivers case insensitive
// Function #2: fuzzyMatch- Take an array of driver's names; and a string as arguments; query the array, return all names beginning
// with the provided letters.
// Function #3: matchName- Take an array of driver objects; each driver object has two properties: name(1) and hometown(2); return each
// element whose name property matches the provided string argument.

// Function #1---findMatching

// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'] Data is given

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, name){
    return drivers.filter('Bobby')
}
console.log(drivers);

function fuzzyMatch(drivers, name){
    return drivers.filter()
}
 
console.log(drivers);

function fuzzyMatch(drivers, name){
    return drivers.filter(name) => name.startsWith("S")
    }
console.log(drivers);

function matchName(drivers, hometown){
return return drivers.filter(driver: 'Bobby', hometown: 'Pittsburgh','Tampa Bay');
}
    
console.log(drivers, hometown);



 