const kissBtn = document.getElementById('kissBtn');
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');
const heartsContainer = document.getElementById('hearts');
const surpriseImg = document.getElementById('surpriseImg');
const imageCover = document.getElementById('imageCover');

kissBtn.addEventListener('click', () => {
  createHearts();
  musicBtn.style.display = 'inline-block';
  revealImage();
});

musicBtn.addEventListener('click', () => {
  bgMusic.play();
  musicBtn.style.display = 'none';
});

function createHearts() {
  for (let i = 0; i < 10; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.textContent = '💖';
    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 2000);
  }
}

function revealImage() {
  surpriseImg.style.display = 'block';
  setTimeout(() => {
    surpriseImg.classList.add('show');
  }, 50);

  // Fade out then fully hide the image cover
  imageCover.style.opacity = '0';
  setTimeout(() => {
    imageCover.style.display = 'none';
  }, 1000);
}
