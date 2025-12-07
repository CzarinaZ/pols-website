const swiper = new Swiper('.wrapper', {
  loop: true,
  spaceBetween: 30,

//Autoplay
  autoplay:{
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  // pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

// Responsive breakpoints
  breakpoints:{
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3,
        }
    }
});


function toggleCard(card) {
            // Close all other cards first
            const allCards = document.querySelectorAll('.cultural-card');
            allCards.forEach(c => {
                if (c !== card) {
                    c.classList.remove('expanded');
                }
            });
            
            // Toggle the clicked card
            card.classList.toggle('expanded');
        }

        // Optional: Close card when clicking outside
        document.addEventListener('click', function(event) {
            const culturalCards = document.querySelectorAll('.cultural-card');
            let clickedInsideCard = false;
            
            culturalCards.forEach(card => {
                if (card.contains(event.target)) {
                    clickedInsideCard = true;
                }
            });
            
            // Uncomment below if you want cards to close when clicking outside
            // if (!clickedInsideCard) {
            //     culturalCards.forEach(card => {
            //         card.classList.remove('expanded');
            //     });
            // }
        });