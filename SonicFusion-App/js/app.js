document.addEventListener('DOMContentLoaded', () => {
    const playBtn = document.getElementById('play-btn');
    const trackName = document.getElementById('track-name');
    const progress = document.getElementById('progress');
    
    let isPlaying = false;
    let progressValue = 35;
    let interval;

    // 模拟播放状态切换
    playBtn.addEventListener('click', () => {
        isPlaying = !isPlaying;
        playBtn.textContent = isPlaying ? '⏸' : '▶';
        
        if (isPlaying) {
            trackName.textContent = "Midnight Fusion";
            startProgress();
        } else {
            trackName.textContent = "Paused";
            stopProgress();
        }
    });

    function startProgress() {
        interval = setInterval(() => {
            progressValue += 0.5;
            if (progressValue >= 100) progressValue = 0;
            progress.style.width = `${progressValue}%`;
        }, 100);
    }

    function stopProgress() {
        clearInterval(interval);
    }

    // 初始化显示
    trackName.textContent = "Ready to Play";
});