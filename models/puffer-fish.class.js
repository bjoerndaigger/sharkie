class PufferFish extends MovableObject {
    width = 150;
    height = 123;
    y = 230;
   
    IMAGES_SWIMMING = [
        './img/enemies/puffer-fish/swim/swim1.png',
        './img/enemies/puffer-fish/swim/swim2.png',
        './img/enemies/puffer-fish/swim/swim3.png',
        './img/enemies/puffer-fish/swim/swim4.png',
        './img/enemies/puffer-fish/swim/swim5.png'
    ];

    constructor() {
        super().loadImage('./img/enemies/puffer-fish/swim/swim1.png'); // mit super() greife ich auf den Konstruktor der über geordneten Klasse zu (in diesem Fall MovableObject) und sorge dafür, dass dieser zuerst ausgeführt wird, bevor der Konstruktor der untergeordneten Klasse ausgeführt wird
        this.loadImages(this.IMAGES_SWIMMING);
        this.x = 200 + Math.random() * 500;  // Zahl zwischen 200 und 700
        this.speed = 0.05 + Math.random() * 0.25; // gibt Puffer Fishs unterschiedliche Geschwindigkeit
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
         }, 1000/60)

        setInterval(() => {
           this.playAnimation(this.IMAGES_SWIMMING);
        }, 200)
    }

}