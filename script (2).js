document.addEventListener('DOMContentLoaded', function() {
  // Function to toggle the navigation menu
  const toggleMenu = () => {
      const navLinks = document.querySelector('.nav-link');
      navLinks.classList.toggle('active'); // Toggle the 'active' class
  };
  // Attach the click event listener to the hamburger menu
  const hamburger = document.querySelector('.hamburger');
  hamburger.addEventListener('click', toggleMenu);

  // Smooth scrolling for anchor links
  document.querySelectorAll('.navbar a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();

          const targetId = this.getAttribute('href');
          document.querySelector(targetId).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  const portfolioItems = document.querySelectorAll('.portfolio-item');
  const skillItems = document.querySelectorAll('.skill-item');

  // Add hover effects to portfolio items
  portfolioItems.forEach(item => {
      item.addEventListener('mouseenter', function() {
          this.style.transform = 'scale(1.05)';
          this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
          this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
      });

      item.addEventListener('mouseleave', function() {
          this.style.transform = 'scale(1)';
          this.style.boxShadow = 'none';
      });
  });

  // Add hover effects to skill items
  skillItems.forEach(item => {
      item.addEventListener('mouseenter', function() {
          this.style.transform = 'scale(1.05)';
          this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
          this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
      });

      item.addEventListener('mouseleave', function() {
          this.style.transform = 'scale(1)';
          this.style.boxShadow = 'none';
      });
  });
});
