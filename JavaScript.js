const coloredBoxes = document.querySelectorAll('.home, .about, .projects, .contact-form');

window.addEventListener('scroll', () => {
  coloredBoxes.forEach(box => {
    if (
      box.getBoundingClientRect().top <= window.innerHeight && 
      box.getBoundingClientRect().bottom >= 0
    ) {
      document.body.style.backgroundColor = box.dataset.color;
    }
  });
});
