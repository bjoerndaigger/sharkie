class DrawableObject {
    img;
    imageCache = {}; // Objekt für Animationsbilder
    currentImage = 0; // für animate()-Funktion, die die Bilder aufruft
    x = 0;
    y = 150;
    width = 200;  // Breite für Character
    height = 245; // Höhe für Character

    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };

    // Rectangle (Rahmen für Kollisionen)
    drawFrame(ctx) {
        if (this instanceof Character || this instanceof PufferFish) { // sorgt dafür, dasss Rahmen nur um die entsprechenden Instanzen angezeigt wird 
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'transparent';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
            ctx.beginPath(); // offset frame
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x + this.offset.left, this.y + this.offset.top, this.width - this.offset.right - this.offset.left, this.height - this.offset.top - this.offset.bottom);
            ctx.stroke();
        }
    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
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
}