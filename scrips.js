document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    let dino = {
        x: 50,
        y: canvas.height - 40,
        width: 20,
        height: 40,
        vy: 0,
        gravity: 0.6,
        jumpStrength: -12,
        grounded: true
    };

    let obstacles = [];
    let frame = 0;
    let gameSpeed = 3;
    let keys = {};

    document.addEventListener('keydown', (e) => {
        keys[e.code] = true;
    });

    document.addEventListener('keyup', (e) => {
        keys[e.code] = false;
    });

    function spawnObstacle() {
        let obstacle = {
            x: canvas.width,
            y: canvas.height - 30,
            width: 20,
            height: 30
        };
        obstacles.push(obstacle);
    }

    function handleObstacles() {
        for (let i = 0; i < obstacles.length; i++) {
            let obs = obstacles[i];
            obs.x -= gameSpeed;

            if (obs.x + obs.width < 0) {
                obstacles.splice(i, 1);
                i--;
            }

            if (dino.x < obs.x + obs.width &&
                dino.x + dino.width > obs.x &&
                dino.y < obs.y + obs.height &&
                dino.y + dino.height > obs.y) {
                resetGame();
            }
        }
    }

    function resetGame() {
        dino.y = canvas.height - 40;
        dino.vy = 0;
        dino.grounded = true;
        obstacles = [];
        frame = 0;
    }

    function gameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        dino.vy += dino.gravity;
        dino.y += dino.vy;

        if (dino.y + dino.height >= canvas.height - 10) {
            dino.y = canvas.height - 10 - dino.height;
            dino.vy = 0;
            dino.grounded = true;
        }

        if (keys['Space'] && dino.grounded) {
            dino.vy = dino.jumpStrength;
            dino.grounded = false;
        }

        ctx.fillStyle = 'black';
        ctx.fillRect(dino.x, dino.y, dino.width, dino.height);

        frame++;
        if (frame % 100 === 0) {
            spawnObstacle();
        }

        handleObstacles();

        ctx.fillStyle = 'green';
        for (let i = 0; i < obstacles.length; i++) {
            let obs = obstacles[i];
            ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
        }

        requestAnimationFrame(gameLoop);
    }

    gameLoop();

    // Handle form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message!');
    });

    // Handle newsletter subscription
    const subscribeButton = document.getElementById('subscribe-button');
    subscribeButton.addEventListener('click', () => {
        const email = prompt('Enter your email to subscribe:');
        if (email) {
            alert('Thank you for subscribing!');
        }
    });
});
