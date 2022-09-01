window.addEventListener('load', function(){

	let faq = document.querySelector('.faq');

	faq.addEventListener('click', function(e){
		if(e.target.classList.contains('ask')){
			toogleItem(e.target);
		}
	});

	function toogleItem(ask){
		let answer = ask.parentNode.querySelector('.answer');
		let elHeight = answer.offsetHeight;
		if(answer.classList.contains('open')){
         elHeight = answer.offsetHeight;
			let animate = answer.animate([
				{ height: elHeight + 'px' },
				{ height: 0 }
			], { duration: 500 });

			animate.addEventListener('finish', function(){
				answer.classList.remove('open');
			});
		}
		else {
         answer.classList.add('open');
         elHeight = answer.offsetHeight;
			answer.animate([
				{ height: 0 },
				{ height: elHeight + 'px'  }
			], { duration: 500 });

		}
	}

});