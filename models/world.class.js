class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0; // Startposition für Verschiebung der Camera (Hintergrund) während des bewegens des Characters nach links oder rechts

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
    }

    setWorld() {
        this.character.world = this; //durch this hat Character Objekt nun Referez auf World Objekt
    }

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach( (enemy) => {
               if (this.character.isColliding(enemy)) {
                
                this.character.energy -= 5;
                console.log('Collision with character, energy ', this.character.energy);
               } 
            }  );
        }, 200);
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // clearRect löscht canvas

        this.ctx.translate(this.camera_x, 0); // verschieben von Hintergrund mit Character

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.lights);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);

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
            this.flipImage(movableObject);
        }

        movableObject.draw(this.ctx);
        movableObject.drawFrame(this.ctx);

        if (movableObject.otherDirection) { // Rückgängigmachen der Transformationen bei Bedarf
            this.flipImageBack(movableObject);
        }
    }

    flipImage(movableObject) {
        this.ctx.save(); // Speichert den aktuellen Zustand des Zeichenkontexts, damit Änderungen rückgängig gemacht werden können
        this.ctx.translate(movableObject.width, 0); // Verschiebt den Ursprung des Koordinatensystems um die Breite des beweglichen Objekts nach rechts
        this.ctx.scale(-1, 1) // Spiegelt das Objekt horizontal, um die andere Richtung darzustellen
        movableObject.x = movableObject.x * -1; // Passt die x-Position des Objekts an, um es an der richtigen Stelle zu zeichnen
    }

    flipImageBack(movableObject) {
        movableObject.x = movableObject.x * -1;
        this.ctx.restore();
    }
}