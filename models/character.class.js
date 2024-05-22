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
    swimming_sound = new Audio('audio/swimming.mp3');


    constructor() {
        super().loadImage('./img/sharkie/swim/1.png'); // mit super() greife ich auf den Konstruktor der über geordneten Klasse zu (in diesem Fall MovableObject) und sorge dafür, dass dieser zuerst ausgeführt wird, bevor der Konstruktor der untergeordneten Klasse ausgeführt wird
        this.loadImages(this.IMAGES_SWIMMING);

        this.animate();
    }

    animate() {
        setInterval(() => {
            this.swimming_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) { 
                this.x += this.speed;
                this.otherDirection = false;
                this.swimming_sound.play();
            }
            if (this.world.keyboard.LEFT && this.x > 0) { // > 0, damit Character nicht in den Minus Bereich läuft
                this.x -= this.speed;
                this.otherDirection = true;
                this.swimming_sound.play();
            }
            this.world.camera_x = - this.x + 100; // binden von Character an Hintergrundverschiebung (+100 verschiebt Character nach rechts)
        }, 1000 / 60);

        setInterval(() => {

            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                // walk animation
                this.playAnimation(this.IMAGES_SWIMMING);
            }
        }, 50);
    }

    jump() {

    }
}