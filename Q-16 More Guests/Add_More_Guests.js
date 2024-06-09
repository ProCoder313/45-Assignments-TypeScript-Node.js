let guest_List = ["Ali", "Hamza", "Hassan"];
// for (let i = 0; i < guest_List.length; i++) {
//        console.log(`Dear ${guest_List[i]},\n\n I would like to invite you to dinner.\n\n Thank You!\n\n`);
//     }
let absent_Guest = "Hamza";
let new_Guest = "Fahad";
guest_List[1] = new_Guest;
for (let i = 0; i < guest_List.length; i++) {
    console.log(`Dear ${guest_List[i]}, \n\nI would like to invite you to dinner.\n\nThank You!\n\n`);
}
;
console.log(`Mr. ${absent_Guest} will not join our party.`);
/* Q-16. More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.
• Use push() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/
// informing people that we found a bigger dinner table.
console.log("Great news! We have found a bigger dinner table. Now we will invite three more friends!");
guest_List.unshift("Abrar"); // Add one new guest to the beginning of our array.
guest_List.splice(2, 0, "Waqar"); // Add second new guest to the middle of our array.
guest_List.push("Sarfaraz"); // add third new guest to the end of our list.
console.log(guest_List); // Here is the updated invitation list.
// Print a new set of invitation messages, one for each person in list.
for (let i = 0; i < guest_List.length; i++) {
    console.log(`Dear  ${guest_List[i]} \n\nI would like to invite you to dinner.\n\nThank You!\n\n`);
}
export {};
