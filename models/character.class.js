class Character extends MovableObject {
    speed = 5;
    IMAGES_SWIMMING = [
        './img/sharkie/swim/1.png',
        './img/sharkie/swim/2.png',
        './img/sharkie/swim/3.png',
        './img/sharkie/swim/4.png',
        './img/sharkie/swim/5.png',
        './img/sharkie/swim/6.png',
    ];
    world; // Variable für Zugriff auf world

    constructor() {
        super().loadImage('./img/sharkie/swim/1.png'); // mit super() greife ich auf den Konstruktor der über geordneten Klasse zu (in diesem Fall MovableObject) und sorge dafür, dass dieser zuerst ausgeführt wird, bevor der Konstruktor der untergeordneten Klasse ausgeführt wird
        this.loadImages(this.IMAGES_SWIMMING);

        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT) {
                this.x += this.speed;
                this.otherDirection = false;
            }
            if (this.world.keyboard.LEFT) {
                this.x -= this.speed;
                this.otherDirection = true;
            }
            this.world.camera_x = - this.x; // binden von Character an Hintergrundverschiebung
        }, 1000 / 60);

        setInterval(() => {

            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                // walk animation
                let i = this.currentImage % this.IMAGES_SWIMMING.length; // Modulo Operator (mathematischer Rest um durch Array in Schleife zu iterieren)
                let path = this.IMAGES_SWIMMING[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 50);
    }

    jump() {

    }
}