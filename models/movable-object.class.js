class MovableObject {
    x = 0;
    y = 150;
    img;
    width = 200;  // Breite für Character
    height = 245; // Höhe für Character

    loadImage(path) {
        this.img = new Image(); 
        this.img.src = path;
    }

    moveRight() {

    }

    moveLeft() {

    }
}