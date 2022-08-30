window.addEventListener('load', function(){
	const menu = document.querySelector('.menu');
   const goTopBtn = this.document.querySelector('.to-top');
	const goTopBtnClass = goTopBtn.classList;
   let headings = {
      about,
      price,
      app,
      nz
   }
   function test() {
   for (let [key, value] of Object.entries(headings)) {
      console.log(headings[key] = headings[key].offsetTop)
      console.log('data ' + window.scrollY)
   }}
   function test()
	if(window.location.hash != ''){
		scrollToId(window.location.hash);
	}



	menu.addEventListener('click', function(e){
		if(e.target.classList.contains('menu__link')){
			e.preventDefault();
		
			let link = e.target;
			scrollToId(link.hash);

			menu.querySelector('.menu__link-active').classList.remove('menu__link-active');
			link.classList.add('menu__link-active');
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

   document.addEventListener('scroll', () => (window.innerHeight + window.scrollY) / document.body.offsetHeight * 100 >= 80 ? goTopBtnClass.remove('hidden') : goTopBtnClass.add('hidden')
   , {
      capture: true,
      passive: true
    });
    document.addEventListener('scroll', test
    , {
       capture: true,
       passive: true
     });
 

    goTopBtn.addEventListener('click', () => this.window.scrollTo({
      top: 0,
      behavior: "smooth"
    }))
   
});

