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

