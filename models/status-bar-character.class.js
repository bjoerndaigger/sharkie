class StatusBarCharacter extends MovableObject {
    x = 20;
    y = 0;
    width = 200;
    height = 53;

    IMAGES_STATUSBAR_CHARACTER = [
        'img/status-bar/life/0.png',
        'img/status-bar/life/20.png',
        'img/status-bar/life/40.png',
        'img/status-bar/life/60.png',
        'img/status-bar/life/80.png',
        'img/status-bar/life/100.png'
    ];

    percentage = 100;
    constructor() {
        super();
        this.loadImages(this.IMAGES_STATUSBAR_CHARACTER);
        this.setPercentage(100);
    }

    setPercentage(percentage) {
        this.percentage = percentage; // => 0...5
        let path = this.IMAGES_STATUSBAR_CHARACTER[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        }
        else if (this.percentage > 60) {
            return 3;
        }
        else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1
        } else {
            return 0
        }
    }
}
