const sr = ScrollReveal({
  distance: '80px',
  duration: 1500,
  // reset: true,
});

sr.reveal(
  `header,.top,
           .experience__data, header,
           .thunb,.mob,#picture,
           #intro-work,#front,
           .intros, .info,.img-fluid,#wordings`,
  {
    origin: 'top',
    interval: 250,
  }
);
sr.reveal(
  `button,
     .section-title,.bottom`,
  {
    origin: 'bottom',
    interval: 50,
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
