class MovableObject {
    x = 0;
    y = 150;
    img;
    width = 200;  // Breite für Character
    height = 245; // Höhe für Character
    imageCache = {}; // Objekt für Animationsbilder
    currentImage = 0; // für animate()-Funktion, die die Bilder aufruft
    speed = 0.05; // Geschwindigkeit für Bewegung nach links

    loadImage(path) {
        this.img = new Image(); 
        this.img.src = path;
    }

    /**
     * 
     * @param {array} array - Arrayb enthält bewegte Bilder von Character['img/image1.png', 'img/image2.png', ...]
     */
    loadImages(array) { 
        array.forEach((path) => { // iteriert über jedes Element der übergebenen Array
            let img = new Image(); // erzeugt ein neues Image-Objekt
            img.src = path; // weist dem Bild den aktuellen Pfad aus dem Array zu
            this.imageCache[path] = img; // speichert den Bildpfad im imageCache-Objekt
        });  
    }

    moveRight() {

    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }
}