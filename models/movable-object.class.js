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
    energy = 100;

    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };

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
        if (this instanceof Character || this instanceof PufferFish) { // sorgt dafür, dasss Rahmen nur um die entsprechenden Instanzen angezeigt wird 
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
            ctx.beginPath(); // offset frame
            ctx.lineWidth = '3'; 
            ctx.strokeStyle = 'red'; 
            ctx.rect(this.x + this.offset.left, this.y + this.offset.top, this.width - this.offset.right - this.offset.left, this.height - this.offset.top - this.offset.bottom);
            ctx.stroke(); 
        }
    }

    // character.isColliding(chicken)
    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
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