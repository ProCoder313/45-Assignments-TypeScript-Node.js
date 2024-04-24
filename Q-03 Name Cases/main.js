// Q - 3. Name Cases:Store a person`s name in a variable, and then print that person`s name in lowercase,uppercase,and titlecase.
let personName = "mukhtar Ahmed";
console.log('lowercase: ', personName.toLowerCase()); //lowercase
console.log('uppercase: ', personName.toUpperCase()); //uppercase
console.log('titlecase: ', personName.replace(/\b\w/g, c => c.toUpperCase())); //titlecase
export {};
