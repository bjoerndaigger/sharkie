class MovableObject {
    x = 0;
    y = 150;
    img;
    width = 200;  // Breite für Character
    height = 245; // Höhe für Character
    imageCache = {}; // Objekt für Animationsbilder
    currentImage = 0; // für animate()-Funktion, die die Bilder aufruft
    speed = 0.05; // Geschwindigkeit für Bewegung nach links
    otherDirection = false;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * 
     * @param {array} array - Array enthält bewegte Bilder von Character['img/image1.png', 'img/image2.png', ...]
     */
    loadImages(array) {
        array.forEach((path) => { // iteriert über jedes Element der übergebenen Array
            let img = new Image(); // erzeugt ein neues Image-Objekt
            img.src = path; // weist dem Bild den aktuellen Pfad aus dem Array zu
            this.imageCache[path] = img; // speichert den Bildpfad im imageCache-Objekt
        });
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    // Rectangle (Rahmen für Kollisionen)
    drawFrame(ctx) {
           ctx.beginPath();
           ctx.lineWidth = '5';
           ctx.strokeStyle = 'blue';
           ctx.rect(this.x, this.y, this.width, this.height);
           ctx.stroke();
    }

    playAnimation(images) {
        let i = this.currentImage % images.length; // Modulo Operator (mathematischer Rest um durch Array in Schleife zu iterieren)
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    moveUp() {
        this.y -= this.speed;
    }

    moveDown() {
        this.y += this.speed;
    }
}