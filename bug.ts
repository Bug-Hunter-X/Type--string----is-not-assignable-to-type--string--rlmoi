function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User"];

console.log(greeter(user)); //This will cause an error because the function is expecting a string but it gets an array of strings