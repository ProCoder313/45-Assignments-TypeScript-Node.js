/*  Q-15. Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the
end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with
the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still
in your list. */
var guest_List = ["Ali", "Hamza", "Hassan"];
for (var i = 0; i < guest_List.length; i++) {
    console.log("Dear ".concat(guest_List[i], ",\n\n I would like to invite you to dinner.\n\n Thank You!\n\n"));
}
var absent_Guest = "Hamza";
var new_Guest = "Fahad";
guest_List[1] = new_Guest;
for (var i = 0; i < guest_List.length; i++) {
    console.log("Dear ".concat(guest_List[i], ", I would like to invite you to dinner.\n\nThank You!\n\n"));
}
;
console.log("Mr. ".concat(absent_Guest, " will not join our party."));
