class Lights extends MovableObject {
    y = 0;

    width = 1440;
    height = 405;

    constructor() {
        super().loadImage('img/background/layers/light/completo.png'); // mit super() greife ich auf den Konstruktor der über geordneten Klasse zu (in diesem Fall MovableObject) und sorge dafür, dass dieser zuerst ausgeführt wird, bevor der Konstruktor der untergeordneten Klasse ausgeführt wird

        this.x = Math.random() * 500; // Zahl zwischen 0 und 500

this.animate();
    }

    animate() {
        this.moveLeft();
    }
}