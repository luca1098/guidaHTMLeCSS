    //menu behavior
    $('#burger').on('click', () => {
        $('.navigation ul').toggleClass('active')
        $('#burger').toggleClass('active')
    })
  

    $(document).on('scroll', () => {
        let initialHeight = window.scrollY
        if (initialHeight > 100) {
            $('.navigation').addClass('scrolled')   
        }else{
            $('.navigation').removeClass('scrolled')   
        }
    })
   //initialize effect on scroll
  AOS.init();
    //smooth ancor link
    $(document).ready(function(){
        // Add smooth scrolling to all links
        $("a").on('click', function(event) {
          // Make sure this.hash has a value before overriding default behavior
          if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
      
            // Store hash
            var hash = this.hash;
      
            // Using jQuery's animate() method to add smooth page scroll
            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 500, function(){
              window.location.hash = hash;
            });
            $('.navigation ul').removeClass('active')
          } 
        });
      });
     

   //cursor
   let cursor = document.querySelector('#cursor')
   let nome = document.querySelector('.name')
   let title = document.querySelectorAll('h2')
   let link = document.querySelectorAll('a, .cta')
   document.addEventListener('mousemove', e => {
       cursor.style.left = e.pageX + 'px'
       cursor.style.top = e.pageY + 'px'
   })

   nome.addEventListener('mouseover', () => {
       cursor.classList.add('big')
   })
   nome.addEventListener('mouseleave', () => {
       cursor.classList.remove('big')
   })
   title.forEach(title => {
       title.addEventListener('mouseover', () => {
       cursor.classList.add('medium')
    })
       title.addEventListener('mouseleave', () => {
       cursor.classList.remove('medium')
       })

   })
   link.forEach(link => {
       link.addEventListener('mouseover', () => {
       cursor.classList.add('medium')
    })
       link.addEventListener('mouseleave', () => {
       cursor.classList.remove('medium')
       })
   })
