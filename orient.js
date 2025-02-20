function checkOrientation() {
    if (window.innerWidth > window.innerHeight) {
      document.getElementById('rotate-message').style.display = 'none';
    } else {
      document.getElementById('rotate-message').style.display = 'flex';
    }
  }
  
  window.addEventListener('resize', checkOrientation);
  checkOrientation();