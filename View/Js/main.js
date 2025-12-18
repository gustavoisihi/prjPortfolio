    const snowContainer = document.querySelector('.snow-container');

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '❄';

    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = (3 + Math.random() * 5) + 's';
    snowflake.style.fontSize = (20 + Math.random() * 14) + 'px';
    snowflake.style.opacity = Math.random();

    snowContainer.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 8000);
}

// cria flocos continuamente
setInterval(createSnowflake, 800);


document.addEventListener('DOMContentLoaded', function () {
    const music = document.getElementById('bgMusic');
    const btn = document.getElementById('musicToggle');
    let isPlaying = false;

    btn.addEventListener('click', function () {
        if (!isPlaying) {
            music.volume = 0.3;
            music.play();
            btn.textContent = '🔇';
        } else {
            music.pause();
            btn.textContent = '🔊';
        }
        isPlaying = !isPlaying;
    });
});