class Character extends MovableObject {
    IMAGES_SWIMMING = [
        './img/sharkie/swim/1.png',
        './img/sharkie/swim/2.png',
        './img/sharkie/swim/3.png',
        './img/sharkie/swim/4.png',
        './img/sharkie/swim/5.png',
        './img/sharkie/swim/6.png',
    ]

    constructor() {
        super().loadImage('./img/sharkie/swim/1.png'); // mit super() greife ich auf den Konstruktor der über geordneten Klasse zu (in diesem Fall MovableObject) und sorge dafür, dass dieser zuerst ausgeführt wird, bevor der Konstruktor der untergeordneten Klasse ausgeführt wird
        this.loadImages(this.IMAGES_SWIMMING);

        this.animate();
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_SWIMMING.length; // Modulo Operator (mathematischer Rest um durch Array in Schleife zu iterieren)
            let path = this.IMAGES_SWIMMING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 100)
    }

    jump() {

    }
}