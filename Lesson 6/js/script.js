window.addEventListener('load', function(){
   class Slider {
      currentImg = 0;
      constructor(el) {
         this.element = document.querySelector(el);
         this.images = this.element.querySelectorAll('.photos img');
         this.btnNext = this.element.querySelector('.buttons .next');
         this.btnPrev = this.element.querySelector('.buttons .prev');
         this.init();
      }

      removeClass(val) {
         this.images[this.currentImg].classList.remove(val);
      }

      addClass(val) {
         this.images[this.currentImg].classList.add(val);
      }

      prev() {
         this.removeClass('showed')
         this.currentImg--;

         if (this.currentImg < 0) this.currentImg = this.images.length - 1;

         this.addClass('showed')
      }

      next() {
         this.removeClass('showed')
         this.currentImg++;

         if(this.currentImg >= this.images.length) this.currentImg = 0;

         this.addClass('showed')
      }

      init() {
         this.btnNext.addEventListener('click', () => this.next());
         this.btnPrev.addEventListener('click', () => this.prev());
      }
   }
   new Slider('.gallery-1');

   let slider2 = new Slider('.gallery-2');
   setInterval(function(){
		slider2.next();
	}, 3000);

});

/*
new Slider('.gallery-1');
new Slider('.gallery-2'); 

*/

/* this.btn.addEventListener('click', () => {
	this.next()
}) */