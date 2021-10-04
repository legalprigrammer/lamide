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
    interval: 50,
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
           .right,strong,.select`,
  {
    origin: 'right',
    interval: 150,
  }
);
