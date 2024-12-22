function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User"];

// Solution 1: Access the first element of the array
console.log(greeter(user[0]));

// Solution 2: Modify the function to handle arrays
function greeterArray(people: string[]): string {
  return "Hello, " + people.join(", ");
}
console.log(greeterArray(user));

// Solution 3: Use a type guard to check for array and string
function greeterTypeGuard(person: string | string[]): string {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return "Hello, " + person.join(", ");
  }
}
console.log(greeterTypeGuard(user));
console.log(greeterTypeGuard("Jane User"));