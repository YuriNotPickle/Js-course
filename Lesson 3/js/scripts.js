window.addEventListener('load', function(){
	const menu = document.querySelector('.menu');
   const goTopBtn = document.querySelector('.to-top');
	const goTopBtnClass = goTopBtn.classList;
   let headings = {
      about,
      price,
      app,
      nz
   }

   let headingsHeight= {};

   for (let [key, value] of Object.entries(headings)) {
      headingsHeight[key] = value.offsetTop;
   }

   function menuSwitch() {
      for (value in headingsHeight) {
         let currElem = document.querySelector('[href*="' + value + '"]');

         if (window.scrollY + menu.offsetHeight*5 >= headingsHeight[value] ) {
            document.querySelector('.menu__link-active').setAttribute('class', 'menu__link')
            currElem.classList.add('menu__link-active');
         } 
      }   
}

	if(window.location.hash != ''){
		scrollToId(window.location.hash);
	}



	menu.addEventListener('click', function(e){
		if(e.target.classList.contains('menu__link')){
			e.preventDefault();
		
			let link = e.target;
			scrollToId(link.hash);
		}
	});

   function scrollToId(id){
      let target = document.querySelector(id);
   
      if(target !== null){
         let pos = target.offsetTop - menu.offsetHeight;
   
         window.scrollTo({
            top: pos,
            behavior: "smooth"
         });
      }
   }

   document.addEventListener('scroll', () => (window.innerHeight + window.scrollY) / document.body.offsetHeight * 100 >= 80 ? goTopBtnClass.remove('hidden') : goTopBtnClass.add('hidden') // show scroll to top btn
   , {
      capture: true,
      passive: true
    });


    document.addEventListener('scroll', menuSwitch
    , {
       capture: true,
       passive: true
     });
 

    goTopBtn.addEventListener('click', () => this.window.scrollTo({
      top: 0,
      behavior: "smooth"
    }))
   
});

