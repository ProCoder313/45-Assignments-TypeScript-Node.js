let guest_List = ["Ali", "Hamza", "Hassan"];
// for (let i = 0; i < guest_List.length; i++) {
//        console.log(`Dear ${guest_List[i]},\n\n I would like to invite you to dinner.\n\n Thank You!\n\n`);
//     }
// let absent_Guest:string = "Hamza";  // abscent guest
// let new_Guest:string = "Fahad";  // new guest
// guest_List[1] = new_Guest; // 
// for (let i = 0; i < guest_List.length; i++) {
//     console.log(`Dear ${guest_List[i]}, \n\nI would like to invite you to dinner.\n\nThank You!\n\n`);
//  };
//  console.log(`Mr. ${absent_Guest} will not join our party.`);
/* Q-16. More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
bigger dinner table.

• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use push() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list. */
// informing people that we found a bigger dinner table.
console.log("Great news! We have found a bigger dinner table. Now we will invite three more friends!");
guest_List.unshift("Abrar"); // Add one new guest to the beginning of our array.
guest_List.splice(2, 0, "Waqar"); // Add second new guest to the middle of our array.
guest_List.push("Sarfaraz"); // add third new guest to the end of our list.
console.log(guest_List); // Here is the updated invitation list.
//Print a new set of invitation messages, one for each person in list.
for (let i = 0; i < guest_List.length; i++) {
    console.log(`Dear  ${guest_List[i]}, \n\nI would like to invite you to dinner.\n\nThank You!\n\n`);
}
//   Q-17 :-
//   Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for
//   only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list,
//   print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list
//   at the end of your program.
// add a new line that prints a msg saying that you can invite only two people for dinner.
console.log(`\nsorry we can not arrange big table, only two people will be invited for dinner.`);
//  Remove guests from your list one at a time until only two names remain in your list. Each time
//  you pop a name from your list, print a message to that person letting them know you’re sorry you
//  can’t invite them to dinner.
while (guest_List.length > 2) {
    let remove_Guest = guest_List.pop();
    console.log(`Sorry Mr. ${remove_Guest}, you are not invited for dinner.`);
}
// Print a message to each of the two people still on your list, letting them know they’re still invited.
for (let i = 0; i < guest_List.length; i++) {
    console.log(`Dear Mr.  ${guest_List[i]},\n\n You are still invited.\n\nThank You!\n\n`);
}
// Remove the last two names from your list, so you have an empty list.
guest_List.splice(0, 2);
// Print your list to make sure you actually have an empty list at the end of your program.
console.log(guest_List);
export {};
