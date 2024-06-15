class Runner {
    constructor(wrapper, config, canvas) {
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        this.sprite = new Image();
        this.sprite.src = 'images/offline-sprite-2x.png';
        this.config = config || {};
        this.init();
    }

    init() {
        this.canvas.width = this.config.WIDTH || 600;
        this.canvas.height = this.config.HEIGHT || 150;
        this.draw();
    }

    draw() { 
        const sourceX = 848;
        const sourceY = 0;
        const sourceWidth = 44;
        const sourceHeight = 47;
        const canvasX = 50;
        const canvasY = this.canvas.height - sourceHeight - 10;
        const canvasWidth = sourceWidth;
        const canvasHeight = sourceHeight;

        this.context.drawImage(this.sprite, sourceX, sourceY, sourceWidth, sourceHeight, canvasX, canvasY, canvasWidth, canvasHeight);
    }

    onKeyDown(event) {
        if (event.keyCode === 32) {
            this.jump();
        }
    }

    jump() {
        console.log('Jump!');
        // Implement jump logic here
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById('offline-resources-canvas');
    const game = new Runner('.interstitial-wrapper', null, canvas);

    window.addEventListener('keydown', function(event) {
        game.onKeyDown(event);
    });

    window.addEventListener('keyup', function(event) {
        if (event.keyCode === 32) {
            console.log('Key Released');
            // Implement logic for key release if needed
        }
    });
});

