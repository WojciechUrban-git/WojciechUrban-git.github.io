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

const careerButtons = document.querySelectorAll('.career-btn');

careerButtons.forEach(button => {
  button.addEventListener('click', () => {
    const subsectionId = button.getAttribute('data-subsection');
    const subsection = document.getElementById(subsectionId);

    if (!subsection) return;

    // Toggle visibility
    if (subsection.style.display === 'block') {
      subsection.style.display = 'none';
      button.classList.remove('active');
    } else {
      // Hide all other career subsections
      document.querySelectorAll('.career-subsection').forEach(sec => {
        sec.style.display = 'none';
      });
      // Remove active from all buttons
      careerButtons.forEach(btn => btn.classList.remove('active'));

      // Show the clicked subsection and mark button active
      subsection.style.display = 'block';
      button.classList.add('active');
    }
  });
});

