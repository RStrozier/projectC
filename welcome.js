var page = document.querySelectorAll(".page");

var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
},
    {
        rootMargin: "-100px",
    }
)

page.forEach(page => {
    observer.observe(page)
});

 // Get a reference to the ball element
 const ball = document.querySelector('.ball');

 // Set the initial size of the ball
 let scrollCount = 0;
 const initialSize = 10; // in rem
 let ballSize = initialSize;

 // Variables to track scroll position
 let lastScrollTop = 0;
 let scrollingDown = false;

 // Function to handle scroll events
 function handleScroll() {
     // Get the current scroll position
     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

     // Determine scroll direction
     scrollingDown = scrollTop > lastScrollTop;
     lastScrollTop = scrollTop;

     // Increase the scroll count if scrolling down
     if (scrollingDown) {
         scrollCount++;
     }

     // Check if the scroll count reaches 16
     if (scrollCount % 2 === 0 && scrollCount <= 16) {
         // Increase the size of the ball
         ballSize += 3; // Increase by 5 rem (adjust as needed)

         // Apply the new size to the ball
         ball.style.width = `${ballSize}rem`;
         ball.style.height = `${ballSize}rem`;

         // Remove the scroll event listener after 16 scrolls
         if (scrollCount === 16) {
             window.removeEventListener('scroll', handleScroll);
         }
     }
 }

 // Add the scroll event listener
 window.addEventListener('scroll', handleScroll);