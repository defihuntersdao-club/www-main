
window.onload = function() {
  let buttons = document.querySelectorAll('.faq .question');
  for (let i=0; i<buttons.length;i++) {
    buttons[i].onclick = function(e) {
      let parentEl = this.closest('.item');
      let answer = parentEl.querySelector('.answer');


      if(parentEl.classList.contains('active')) {
        answer.style.height = 0 + "px";
        parentEl.classList.remove('active');
      } else {
        parentEl.classList.add('active');  
        let height1 = answer.scrollHeight + 20;
        answer.style.height = height1 + "px";
      }
    }
  }

  // menu mobile
  let hamburger = document.querySelector('.hamburger');
  let body = document.querySelector('body');
  hamburger.onclick = function() {
    if(hamburger.classList.contains('is-active')) {
      hamburger.classList.remove('is-active');
      body.classList.remove('mobile');
      let overlay = document.querySelector('.overlay');
      body.removeChild(overlay);
    } else {
      hamburger.classList.add('is-active');
      body.classList.add('mobile');
      body.insertAdjacentHTML('beforeend','<div class="overlay"></div>');
    }
  };

  let links = document.querySelectorAll('.top-menu a[href*="#"]');
  
  for (let i=0; i<links.length;i++) {
    links[i].onclick = function(e) {
    
      let blockID = links[i].getAttribute('href').substr(1);
      let block = document.getElementById(blockID);
      if(block) {
        e.preventDefault();
        block.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
      
    }
  }



}
