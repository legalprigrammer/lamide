
let loader = document.querySelector('.loader');

window.addEventListener('load', vanish);

function vanish() {
  loader.classList.add('disappear');
}

const sr = ScrollReveal({
  distance: '80px',
  duration: 1500,
  // reset: true,
});

sr.reveal(
  `.top,
           `,
  {
    origin: 'top',
    interval: 150,
  }
);
sr.reveal(
  `button,
     .section-title,.bottom`,
  {
    origin: 'bottom',
    interval: 150,
  }
);
sr.reveal(
  `.left, 
           .details,.rotate`,
  {
    origin: 'left',
    interval: 150,
  }
);

sr.reveal(
  ` 
           .right,.select`,
  {
    origin: 'right',
    interval: 150,
  }
);
