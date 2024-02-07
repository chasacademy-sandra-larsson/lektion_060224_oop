/* Med ES6 kom ny syntax som gör att vi kan
    skapa mer klassiska class filer med JavaScript

    Detta liknar sättet många OOP programmringsspråk
    som t.ex. Java, C++ och C# fungerar.

    Detta är dock syntaxiskt socker i bakgrunden är
    fortfarande JavaScript ett prototypbaserat språk
*/

//vi skriver class följt av klassens namn som börjar med versal
class SocialMediaProfile {
     // Med ES6 skriver constructor istället för function 
    //för att underlätta kodens läsbarhet
    constructor(username) {
        this.username = username;
        this.friends = [];
        this.posts = [];
    }
    //Metoder i ES6
    // vi kan strunta i att skriva KlassensNamn.prototype innan metoderna 
    // som våra instanser ska ha tillgång till.
    addFriend(friend) {
        this.friends.push(friend);
    }

    postMessage(message) {
        this.posts.push(message)
    } 

    displayProfile() {
        return `Username: ${this.username} Friends: ${this.friends.join(", ")} Posts: ${this.posts.join(", ")}`
    }
}

// Här skapar vi en instans av vår klass
// denna kod ska egentligen inte ligga i denna fil
// då vi vill hålla våra klass moduler/filer till endast klassbeskrivning (som exporteras)
const myProfile = new SocialMediaProfile("coolUser");
myProfile.addFriend("Torsten");
myProfile.addFriend("Stina");
myProfile.postMessage("hey hey");
myProfile.postMessage("did you learn about new cool OOP?")

console.log(myProfile.displayProfile());