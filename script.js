  const header = document.querySelector('.holo-header');
  let canShine = true;

  header.addEventListener('mouseenter', () => {
    if (!canShine) return;

    header.classList.add('shine');
    canShine = false;

    // Remove the shine class after animation ends (1s)
    setTimeout(() => {
      header.classList.remove('shine');
    }, 1000);

    // Reset cooldown after 5 seconds
    setTimeout(() => {
      canShine = true;
    }, 5000);
  });

  
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const targetSection = document.getElementById(link.getAttribute('data-section'));
      
      // If the section is currently visible, hide it
      if (targetSection.style.display === 'block') {
        targetSection.style.display = 'none';
        link.classList.remove('active');
      } else {
        // Hide all sections
        document.querySelectorAll('.page-section').forEach(section => {
          section.style.display = 'none';
        });

        // Remove active from all links
        navLinks.forEach(lnk => lnk.classList.remove('active'));

        // Show the clicked section and mark link active
        targetSection.style.display = 'block';
        link.classList.add('active');
      }
    });
  });

