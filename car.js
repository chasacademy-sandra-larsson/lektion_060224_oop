// "Old school" sättet att skapa en klass

// Klassen Car

// Konstrukturfunktion - en funktion som man kan skapa nya instanser/objekt

function Car(name, color) {
    this.name = name; // name sätt till det värde vi skickar med när vi skapar instansen/objektt när vi kallar på konstrukturfunktion
    this.color = color; 

    // Går också att skapa en metod i konstrukturn
    // this.prototype.fuel = function() {

    // }
}

// Skapa en metod för Car genom att "hakar" på dess prototype
Car.prototype.start = function() {
    return `engine of ${this.name} has started`
}

Car.prototype.speak = function() {
    return "Honk, honk"
}

const car1 = new Car("Volksvagen", "red"); // Skapar instansen/objektet med dess grundegenskapar
const car2 = new Car("Skoda", "black")

console.log(car1.start())
console.log(car1.speak())

console.log(car1);
console.log(car2)