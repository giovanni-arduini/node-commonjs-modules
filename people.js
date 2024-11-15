const hobbies = require("./hobbies.js");
const names = require("./names.js");

function person() {
  const namesRes = names("Gigi", "Pigi");
  const hobbiesRes = hobbies("calcio", "surf", "skate");
  return {
    firstName: namesRes.firstName,
    lastName: namesRes.lastName,
    hobbies: hobbiesRes,
  };
}

console.log(person());
