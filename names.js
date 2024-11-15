const firstName = process.argv[2];
const lastName = process.argv[3];

function names(firstName, lastName) {
  console.log(firstName, lastName);
}

module.exports = names;
