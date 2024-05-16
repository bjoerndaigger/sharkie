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
        new BackgroundObject('img/background/layers/water/d2.png', -720),
        new BackgroundObject('img/background/layers/fondo2/d2.png', -720),
        new BackgroundObject('img/background/layers/fondo1/d2.png', -720),
        new BackgroundObject('img/background/layers/floor/d2.png', -720),
        new BackgroundObject('img/background/layers/water/d1.png', 0),
        new BackgroundObject('img/background/layers/fondo2/d1.png', 0),
        new BackgroundObject('img/background/layers/fondo1/d1.png', 0),
        new BackgroundObject('img/background/layers/floor/d1.png', 0),
        new BackgroundObject('img/background/layers/water/d2.png', 720),
        new BackgroundObject('img/background/layers/fondo2/d2.png', 720),
        new BackgroundObject('img/background/layers/fondo1/d2.png', 720),
        new BackgroundObject('img/background/layers/floor/d2.png', 720),
        new BackgroundObject('img/background/layers/water/d1.png', 1440),
        new BackgroundObject('img/background/layers/fondo2/d1.png', 1440),
        new BackgroundObject('img/background/layers/fondo1/d1.png', 1440),
        new BackgroundObject('img/background/layers/floor/d1.png', 1440),
        new BackgroundObject('img/background/layers/water/d2.png', 2160),
        new BackgroundObject('img/background/layers/fondo2/d2.png', 2160),
        new BackgroundObject('img/background/layers/fondo1/d2.png', 2160),
        new BackgroundObject('img/background/layers/floor/d2.png', 2160),
    ];
    canvas;
    ctx;
    keyboard;
    camera_x = 0; // Startposition für Verschiebung des Hintergrundes

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld() {
        this.character.world = this; //durch this hat Character Objekt nun Referez auf World Objekt
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // clearRect löscht canvas

        this.ctx.translate(this.camera_x, 0); // verschieben von Hintergrund mit Character

        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.lights);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);

        this.ctx.translate(-this.camera_x, 0);

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
        if (movableObject.otherDirection) { // Überprüft, ob das bewegliche Objekt in die andere Richtung zeigen soll
            this.ctx.save(); // Speichert den aktuellen Zustand des Zeichenkontexts, damit Änderungen rückgängig gemacht werden können
            this.ctx.translate(movableObject.width, 0); // Verschiebt den Ursprung des Koordinatensystems um die Breite des beweglichen Objekts nach rechts
            this.ctx.scale(-1, 1) // Spiegelt das Objekt horizontal, um die andere Richtung darzustellen
            movableObject.x = movableObject.x * -1; // Passt die x-Position des Objekts an, um es an der richtigen Stelle zu zeichnen
        }

        this.ctx.drawImage(movableObject.img, movableObject.x, movableObject.y, movableObject.width, movableObject.height);

        if (movableObject.otherDirection) { // Rückgängigmachen der Transformationen bei Bedarf
            movableObject.x = movableObject.x * -1;
            this.ctx.restore();
        }
    }
}