class Character extends MovableObject {
    speed = 4;
    IMAGES_SWIMMING = [
        './img/sharkie/swim/1.png',
        './img/sharkie/swim/2.png',
        './img/sharkie/swim/3.png',
        './img/sharkie/swim/4.png',
        './img/sharkie/swim/5.png',
        './img/sharkie/swim/6.png',
    ];
    IMAGES_IDLE = [
        'img/sharkie/idle/1.png',
        'img/sharkie/idle/2.png',
        'img/sharkie/idle/3.png',
        'img/sharkie/idle/4.png',
        'img/sharkie/idle/5.png',
        'img/sharkie/idle/6.png',
        'img/sharkie/idle/7.png',
        'img/sharkie/idle/8.png',
        'img/sharkie/idle/9.png',
        'img/sharkie/idle/10.png',
        'img/sharkie/idle/11.png',
        'img/sharkie/idle/12.png',
        'img/sharkie/idle/13.png',
        'img/sharkie/idle/14.png',
        'img/sharkie/idle/15.png',
        'img/sharkie/idle/16.png',
        'img/sharkie/idle/17.png',
        'img/sharkie/idle/18.png',
    ];
    world; // Variable für Zugriff auf world
    swimming_sound = new Audio('audio/swimming.mp3');


    constructor() {
        super().loadImage(this.IMAGES_IDLE[0]); // mit super() greife ich auf den Konstruktor der über geordneten Klasse zu (in diesem Fall MovableObject) und sorge dafür, dass dieser zuerst ausgeführt wird, bevor der Konstruktor der untergeordneten Klasse ausgeführt wird
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SWIMMING);

        this.animate();
    }

    animate() {
        setInterval(() => {
            this.swimming_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.swimRight();
            }
            if (this.world.keyboard.LEFT && this.x > 0) { // > 0, damit Character nicht in den Minus Bereich läuft
                this.swimLeft();
            }
            if (this.world.keyboard.UP && this.y > -100) {
                this.swimUp();
            }
            if (this.world.keyboard.DOWN && this.y < 200) {
                this.swimDown();
            }

            this.world.camera_x = - this.x + 100; // binden von Character an Hintergrundverschiebung (+100 verschiebt Character nach rechts)
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
                this.playAnimation(this.IMAGES_SWIMMING); // swim animation
            } else {
                this.playAnimation(this.IMAGES_IDLE);
            }
        }, 125);
    }

    swimRight() {
        this.x += this.speed;
        this.otherDirection = false;
        this.swimming_sound.play();
    }
    
    swimLeft() {
        this.x -= this.speed;
        this.otherDirection = true;
        this.swimming_sound.play();
    }
    swimUp() {
        this.y -= this.speed;
        this.swimming_sound.play();
    }

    swimDown() {
        this.y += this.speed;
        this.swimming_sound.play();
    }
}