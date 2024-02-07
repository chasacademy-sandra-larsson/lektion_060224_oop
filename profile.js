/* Old school sättet att skapa "klasser på" 
   Det är även så här det ser ut under huven
   med den moderna ES6 class syntaxen då
   JavaScript är ett prototypbaserat programmeringsspråk
*/

// Konstruktorfunktion som används för att skapa
// nya instanser/objekt av SocialMediaProfile
function SocialMediaProfile(username) {
    this.username = username; //username sätts till det värdet vi skickat med när vi skapar kallar på konstruktorfunktionen
    this.friends = []; //array som innehåller användarens vänner - tom när instansen/objektet skapas
    this.posts = [];  // array som innehåller användarens posts - tom när instansen/objektet skapas
}

// Metoder som alla nya instanser/objekt får tillgång till via prototype
SocialMediaProfile.prototype.addFriend = function(friend) {
    this.friends.push(friend)
}

SocialMediaProfile.prototype.postMessage = function(message) {
    this.posts.push(message)
}

SocialMediaProfile.prototype.displayProfile = function() {
    return `Username: ${this.username} 
            Friends: ${this.friends.join(", ")}
            Posts: ${this.posts.join(", ")}`
}

// Här skapar vi en ny instans av SocialMediaProfile och anropar metoderna addFriend och postMessage på objektet
const myProfile = new SocialMediaProfile("coolUser123");
myProfile.addFriend("Torsten");
myProfile.addFriend("Stina");
myProfile.postMessage("Hej min första post!");
myProfile.postMessage("Jag såg en grym rulle igår..")

console.log(myProfile.displayProfile())