// ///////
// const squares = [1,2,3,4,5,6,7,8,9,10].map(square => square * square);
// console.log(...squares);


// //////
// function createSundae({scoops = 1, toppings = ['Hot Fudge']} = {}) {
//     const scoopText = scoops === 1 ? 'scoop' : 'scoops';
//     return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`;
//   }
// console.log (createSundae);

//////
function houseDescriptor({houseColor = 'green', shutterColors = ['red']} = {}) {
    return `I have a ${houseColor} house with ${shutterColors.join(' and ')} shutters`;
  }
  
  houseDescriptor({houseColor:'red',shutterColors:['white','gray','pink']});

//////
function buildHouse({floors = 1, color = 'red', walls='brick'} = {}) {
    return `Your house has ${floors} floor(s) with ${color} ${walls} walls.`;
}
console.log(buildHouse()); // Your house has 1 floor(s) with red brick walls.
console.log(buildHouse({})); // Your house has 1 floor(s) with red brick walls.
console.log(buildHouse({floors: 3, color: 'yellow'})); // Your house has 3 floor(s) with yellow brick walls.


////// javascript classes & class methods
class Snowpiercer {
    constructor(numEngine) {
        this.numEngines = numEngine;
        this.enginesActive = false;
    }
    startEngine() {
        console.log('start your engine...1001 cars long');
        this.enginesActive = true;
    }
}

let emilysTrain = new Snowpiercer(1);
emilysTrain.startEngine();