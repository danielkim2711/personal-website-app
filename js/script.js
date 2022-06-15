const headerTitle = document.querySelector('.header__title');
const headerText = document.querySelector('.header__text');

let i = 0;
let j = 0;

let isFinished = false;

function typeWriter() {
  const title = 'Daniel Kim';
  const text = 'Front-end developer';
  const speed = 60;

  if (i < title.length) {
    headerTitle.textContent += title.charAt(i);
    i++;
  }

  if (j < text.length && isFinished === false) {
    headerText.textContent += text.charAt(j);
    j++;
  }

  if (j === text.length) {
    isFinished = true;
    setTimeout(() => {
      headerText.textContent = text.substring(0, j - 1);
      j--;
    }, 1500);
  }

  if (j === 0) isFinished = false;

  setTimeout(typeWriter, speed);
}

typeWriter();
