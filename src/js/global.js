const scrollToTop = document.getElementById('scroll-to-top');


window.addEventListener('scroll', () => {
  if (window.scrollY > 100) { 
    scrollToTop.style.display = 'block';
  } else {
    scrollToTop.style.display = 'none';
  }
});

scrollToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

