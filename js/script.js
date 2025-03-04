(function() {
  "use strict";

  var card = document.getElementById('card'),
      gloss = card.querySelector('.card__gloss'),
      content = card.querySelector('.card__content'),
      width = window.innerWidth,
      height = window.innerHeight;

  let mouseMoveTimer; // Variabel untuk menyimpan timer

  function init() {
      bindMouse();

      // Initial tilt
      light(350, -125);
      tilt(350, -125);
  }

  function bindMouse() {
      document.addEventListener('mousemove', (event) => {
          clearTimeout(mouseMoveTimer);
          mouseMoveTimer = setTimeout(() => {
              resetCardPosition();
          }, 1000);

          let x = event.clientX - (width / 2),
              y = event.clientY - (height / 2);

          light(x, y);
          tilt(x, y);
      });
  }

  function light(x, y) {
      let angle = (Math.atan2(y, x) * 180) / Math.PI - 90;

      gloss.style.background = 'linear-gradient(' + angle + 'deg, rgba(255, 255, 255,' + y / height * .9 + ') 0%, rgba(255, 255, 255, 0) 80%)';
  }

  function tilt(x, y) {
      let force = 80,
          rx = (x / width) * force,
          ry = (y / height) * -force;

      card.style.transform = 'rotateY(' + (rx) + 'deg) rotateX(' + (ry) + 'deg)';
      // content.style.transform = 'translateX(' + (rx * .75) + 'px) translateY(' + (ry * .75) + 'px)';
  }

  function resetCardPosition() {
      card.style.transform = 'rotateY(0deg) rotateX(0deg)';
      gloss.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.19) 0%, rgba(255, 255, 255, 0) 80%)';
  }


  init();

})();


function createBubble() {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;

    document.body.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 3000); // Hapus gelembung setelah animasi selesai
}

setInterval(createBubble, 500); // Buat gelembung setiap 0.5 detik