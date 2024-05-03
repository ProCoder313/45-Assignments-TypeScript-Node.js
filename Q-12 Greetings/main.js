/* Q-12.Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
should be the same, but each message should be personalized with the person’s name. */
var names = ["Abrar", "Waqar", "Sarfaraz", "Kashif"];
var message = "nice to meet you";
for (var i = 0; i < names.length; i++) {
    console.log("".concat(message, " ").concat(names[i]));
}
