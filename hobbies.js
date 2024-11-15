const hobbyOne = process.argv[2];
const hobbyTwo = process.argv[3];
const hobbyThree = process.argv[4];

// console.log(hobbyOne, hobbyTwo, hobbyThree);

function hobbiesList(hobbyOne, hobbyTwo, hobbyThree) {
  const listOfHobbies = {
    hobbies: ["hobbyOne", "hobbyTwo", "hobbyThree"],
  };
  return listOfHobbies;
}

// console.log(hobbiesList());

module.exports = hobbiesList;
