document.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById('offline-resources-canvas');
    const game = new Runner('.interstitial-wrapper', null, canvas);

    window.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            game.onKeyDown({keyCode: 32});
        }
    });

    window.addEventListener('keyup', function(event) {
        if (event.code === 'Space') {
            game.onKeyUp({keyCode: 32});
        }
    });
});

