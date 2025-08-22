

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.language-button');
    const audioPlayer = document.getElementById('audio-player');
    const controlsContainer = document.getElementById('audio-controls-container');
    const currentLanguageDisplay = document.getElementById('current-language');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const language = button.dataset.lang;
            const languageName = button.textContent;

            audioPlayer.pause();
            audioPlayer.currentTime = 0;
            audioPlayer.src = `audio/${language}.mp3`;
            currentLanguageDisplay.textContent = languageName;

            
            controlsContainer.classList.add('visible');
            controlsContainer.classList.remove('hidden'); 

            audioPlayer.load();
            audioPlayer.play();
        });
    });
});