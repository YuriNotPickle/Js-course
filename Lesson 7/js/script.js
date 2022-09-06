window.addEventListener('load', function(){

   class Slider {
      i = 0;
      animated = false;

      keyframesToRight = [
         { opacity: 1, transform: 'translateX(0)' },
         { opacity: 0, transform: 'translateX(100%)' }
      ];
      keyframesToLeft = [
         { opacity: 1, transform: 'translateX(0)' },
         { opacity: 0, transform: 'translateX(-100%)' }
      ];  

      constructor(element, rate = 500) {
         this.el = document.querySelector(element);
         this.btnNext = this.el.querySelector('.buttons .next');
         this.btnPrev = this.el.querySelector('.buttons .prev');
         this.images = this.el.querySelectorAll('.photos img');

         this.rate = rate;
         this.slideHide = Element;

         this.init()
      }

      switchSlides(slideHide, slideShow, isPrev) {
         this.animated = true;

         slideHide.classList.remove('showed');
         slideHide.animate(isPrev ? this.keyframesToRight : this.keyframesToLeft, { duration: this.rate });
   
         slideShow.classList.add('showed');

         let animate = slideShow.animate(isPrev ? this.keyframesToLeft : this.keyframesToRight, { 
            duration: this.rate, direction: 'reverse' 
         });
   
         animate.addEventListener('finish', () => this.animated = false);   
      }

      prev() {
         if(this.animated){
            return;
         }
   
         this.slideHide = this.images[this.i];
         this.i--;
   
         if(this.i < 0){
            this.i = this.images.length - 1;
         }
   
         this.switchSlides(this.slideHide, this.images[this.i], true);   
      }

      
      next() {
         if(this.animated){
            return;
         }
         this.slideHide = this.images[this.i];
         this.i++;
   
         if(this.i >= this.images.length){
            this.i = 0;
         }
   
         this.switchSlides(this.slideHide, this.images[this.i], false);
      }

      init() {
         this.btnNext.addEventListener('click', () => this.next());
         this.btnPrev.addEventListener('click', () => this.prev())
      }
   }

   let slider1 = new Slider('.gallery-1', 400);

});