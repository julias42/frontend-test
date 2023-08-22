
//Функция с анимацией на блоки
function mouseTransition (){
  const block = document.querySelectorAll('.footer_blocks__big, \
    .footer_blocks__block1, .footer_blocks__yellow, .footer_blocks__block2, \
      .footer_blocks__block3, .footer_blocks__block4');
    
block.forEach(e => {
      e.addEventListener('mouseenter', () => {
        e.style.transition = 'all 1s ease-out';
        e.style.transform = 'scale(1.05)';
      })
      e.addEventListener('mouseleave', ()=>{
        e.style.transition = 'all 1s ease-out';
        e.style.transform = '';
      })
    });
  }

  mouseTransition();

//Функция с анимацией на скроллинг
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('footer_show','oxford_show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.footer_blocks, .oxford_images');

for (let elm of elements) {
  observer.observe(elm);
}