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
// function houseDescriptor({houseColor = 'green', shutterColors = ['red']} = {}) {
//     return `I have a ${houseColor} house with ${shutterColors.join(' and ')} shutters`;
//   }
  
//   houseDescriptor({houseColor:'red',shutterColors:['white','gray','pink']});

// //////
// function buildHouse({floors = 1, color = 'red', walls='brick'} = {}) {
//     return `Your house has ${floors} floor(s) with ${color} ${walls} walls.`;
// }
// console.log(buildHouse()); // Your house has 1 floor(s) with red brick walls.
// console.log(buildHouse({})); // Your house has 1 floor(s) with red brick walls.
// console.log(buildHouse({floors: 3, color: 'yellow'})); // Your house has 3 floor(s) with yellow brick walls.


// ////// javascript classes & class methods
// class Snowpiercer {
//     constructor(numEngine) {
//         this.numEngines = numEngine;
//         this.enginesActive = false;
//     }
//     startEngine() {
//         console.log('start your engine...1001 cars long');
//         this.enginesActive = true;
//     }
// }

// let emilysTrain = new Snowpiercer(1);
// emilysTrain.startEngine();



function Tree(size, leaves) {
    this.size = (typeof size === "undefined")? 10 : size;
    const defaultLeaves = {spring: 'green', summer: 'green', fall: 'orange', winter: null};
    this.leaves = (typeof leaves === "undefined")?  defaultLeaves : leaves;
    this.leafColor;
  }
  
  Tree.prototype.changeSeason = function(season) {
    this.leafColor = this.leaves[season];
    if (season === 'spring') {
      this.size += 1;
    }
  }
  
  function Maple (syrupQty, size, leaves) {
    Tree.call(this, size, leaves);
    this.syrupQty = (typeof syrupQty === "undefined")? 15 : syrupQty;
  }
  
  Maple.prototype = Object.create(Tree.prototype);
  Maple.prototype.constructor = Maple;
  
  Maple.prototype.changeSeason = function(season) {
    Tree.prototype.changeSeason.call(this, season);
    if (season === 'spring') {
      this.syrupQty += 1;
    }
  }
  
  Maple.prototype.gatherSyrup = function() {
    this.syrupQty -= 3;
  }
  
  const myMaple = new Maple(15, 5);
  myMaple.changeSeason('fall');
  myMaple.gatherSyrup();
  myMaple.changeSeason('spring');



class Apple {}
class GrannySmith extends Apple {
  constructor(tartnessLevel, energy) {
    this.tartnessLevel = tartnessLevel; // `this` before `super` will throw an error!
    super(energy); 
  }
}
