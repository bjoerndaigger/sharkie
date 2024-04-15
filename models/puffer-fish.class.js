class PufferFish extends MovableObject {
    width = 150;
    height = 123;
    y = 230;
  
    constructor() {
        super().loadImage('img/enemies/puffer-fish/swim/1.swim1.png'); // mit super() greife ich auf den Konstruktor der über geordneten Klasse zu (in diesem Fall MovableObject) und sorge dafür, dass dieser zuerst ausgeführt wird, bevor der Konstruktor der untergeordneten Klasse ausgeführt wird
       
        this.x = 200 + Math.random() * 500;  // Zahl zwischen 200 und 700
    }
}