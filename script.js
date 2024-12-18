const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const gif = document.querySelector('.gif');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

yesBtn.addEventListener('click', () => {
  question.innerHTML = "Thov aii khg jng ngob hx!";
  gif.src = "https://i.pinimg.com/originals/6c/62/55/6c625539ed66fecec953ab99353e2012.gif";
});

noBtn.addEventListener('mouseover', () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.position = 'absolute'; // Ensure the button can move
  noBtn.style.left = randomX + 'px';
  noBtn.style.top = randomY + 'px';
});