function names(firstName, lastName) {
  const fullName = {
    firstName: firstName,
    lastName: lastName,
  };
  return fullName;
}

names();

module.exports = names;
