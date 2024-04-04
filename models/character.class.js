class Character extends MovableObject {

    constructor() {
        super().loadImage('img/sharkie/swim/1.png'); // mit super() greife ich auf den Konstruktor der über geordneten Klasse zu (in diesem Fall MovableObject) und sorge dafür, dass dieser zuerst ausgeführt wird, bevor der Konstruktor der untergeordneten Klasse ausgeführt wird
    }
    
    jump() {

    }
}