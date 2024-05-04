/* Q-13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
to print a series of statements about these items, such as “I would like to own a Honda motorcycle.” */
let myFavTransportation = ["Car", "Bike", "Bus", "Private Jet"];
let message = "I would like to own a Honda ";
for (let i = 0; i < myFavTransportation.length; i++) {
    console.log(message + myFavTransportation[i]);
}
export {};
