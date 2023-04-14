const darkModeToggle = document.getElementById("darkmodeToggle");
const darkModeIcon = document.getElementById("darkmode");
const body = document.querySelector('body');
const text = "Clarish Jabonillo";

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  darkModeIcon.classList.toggle("fa-sun");
  darkModeIcon.classList.toggle("fa-moon");
});

const writingEffect = document.getElementById('writing-effect');

let index = 0;

function write() {
  writingEffect.innerHTML = text.slice(0, index);
  index++;

  if (index > text.length) {
    clearInterval(timer);
  }
}

const sections = document.querySelectorAll('.scroll-effect');

function animateOnScroll() {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;

    if (sectionTop < window.innerHeight - 100 && sectionBottom > 0) {
      section.classList.add('animated');
    } else {
      section.classList.remove('animated');
    }
  });
}

window.addEventListener('scroll', animateOnScroll);

function sendMessage() {
  var sendBtn = document.getElementById("sendBtn");
  sendBtn.innerHTML = "Sending...";
  sendBtn.disabled = true;
  setTimeout(function () {
    sendBtn.innerHTML = "Sent";
    sendBtn.disabled = false;
  }, 3000);
}
