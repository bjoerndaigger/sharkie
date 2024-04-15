class World {
    character = new Character();
    enemies = [
        new PufferFish(),
        new PufferFish(),
        new PufferFish(),
    ];
    lights = [
        new Lights()
    ];
    backgroundObjects = [
        new BackgroundObject('img/background/layers/water/d1.png', 0),
        new BackgroundObject('img/background/layers/fondo2/d1.png', 0),
        new BackgroundObject('img/background/layers/fondo1/d1.png', 0),
        new BackgroundObject('img/background/layers/floor/d1.png', 0),
    ];
    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // clearRect löscht canvas
        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.lights);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);

        let self = this; // Hilfsvariable weil this in requestAnimationFrame nicht funktioniert
        requestAnimationFrame(function () { // draw() wird mit callback function immer wieder aufgerufen
            self.draw();
        });
    };

    addObjectsToMap(objects) { // für Arrays
        objects.forEach(object => {
            this.addToMap(object);
        })
    }

    addToMap(movableObject) {
        this.ctx.drawImage(movableObject.img, movableObject.x, movableObject.y, movableObject.width, movableObject.height);
    }
}