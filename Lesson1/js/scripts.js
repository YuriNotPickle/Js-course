window.addEventListener('load', function(){
   
	let inp1 = document.querySelector('.inp1');
	let inp2 = document.querySelector('.inp2');
	let btn = document.querySelector('.go');
	let res = document.querySelector('.res');
   let select = document.querySelector('.form-select');
   let curr = '-';
   let inputs = document.querySelectorAll('.input');

   inputs.forEach(el => el.addEventListener('input', () => {
      el.value = el.value.replace(/[^0-9.]/g, '');
      btn.disabled = false;
   }));
   
   select.addEventListener('change', function (e) {
      curr = e.target.value;
   });

	btn.addEventListener('click', function(){
      let total = '';
      let parsOne = parseInt(inp1.value);
      let parseTwo = parseInt(inp2.value);
      
      switch (curr) {
         case '-' :
            total = parsOne - parseTwo;
         case '+' :
            total = parsOne + parseTwo;
            break;
         case '*' :
            total = parseInt(inp1.value) * parseTwo;
            break;
         case '/' :
            total = parseInt(inp1.value) / parseTwo;
            break;
      }
      res.innerHTML = total;  
		btn.disabled = true;
	});

});

