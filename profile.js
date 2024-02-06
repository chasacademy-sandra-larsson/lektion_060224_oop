
// Konstrukturfunktionen 
function SocialMediaProfile(username) {
    this.username = username;
    this.friends = [];
    this.posts = [];

    // this.test = function() {
    //     return "test test";
    // }
}

// Metoder
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

const myProfile = new SocialMediaProfile("coolUser123");
myProfile.addFriend("Torsten");
myProfile.addFriend("Stina");
myProfile.postMessage("Hej min första post!");
myProfile.postMessage("Jag såg en grym rulle igår..")

console.log(myProfile.displayProfile())