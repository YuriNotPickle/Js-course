window.addEventListener('load', function(){
   let form = document.querySelector('form');
   let input = document.querySelectorAll('.check');

   form.addEventListener('submit', (e) => { 

      let checkInp = () => {

         let container = [];

         input.forEach((el) => {
            if ((el.value.trim() === '' ) ) {
               container.push(true);
               el.classList.add('err');
            }  else {
               container.push(false);
            }
         });

         return container.includes(true) ? true : false;
      }

      if (checkInp()) {
         e.preventDefault();
      }      
   });


   form.addEventListener('click', (e) => {
      e.target.classList.contains('check') ? e.target.classList.remove('err') : '';
   });    
})