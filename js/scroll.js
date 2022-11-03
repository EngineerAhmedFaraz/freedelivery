// Vanilla Javacript ScrollSpy for Highlight Nav Menu List.
const sectionAll = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;
  sectionAll.forEach((e) => {
    const sectionHeight = e.offsetHeight;
    const sectionTop = e.offsetTop - 200;
    const sectionId = e.getAttribute('id');
      if(scrollY > sectionTop && scrollY < sectionTop + sectionHeight){
        document.querySelector('li a[href*="' + sectionId +'"]').classList.add('active');
      }
      else{
        document.querySelector('li a[href*="' + sectionId +'"]').classList.remove('active');
      }
  })
})
