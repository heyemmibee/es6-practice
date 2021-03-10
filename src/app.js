// ///////
// const squares = [1,2,3,4,5,6,7,8,9,10].map(square => square * square);
// console.log(...squares);
// //////

function createSundae({scoops = 1, toppings = ['Hot Fudge']} = {}) {
    const scoopText = scoops === 1 ? 'scoop' : 'scoops';
    return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`;
  }
console.log (createSundae);
//////
