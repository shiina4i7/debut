    (function() {
        (function() {
    "use strict";

    var card = document.getElementById('card'),
        gloss = card.querySelector('.card__gloss'),
        content = card.querySelector('.card__content'),
        width = window.innerWidth,
        height = window.innerHeight;

    function init() {
        if (window.DeviceOrientationEvent) {
            bindGyro();
        } else {
            bindMouse();
        }

        // Initial tilt (fallback for devices without gyroscope or initial state)
        light(350, -125);
        tilt(350, -125);
    }

    function bindMouse() {
        document.addEventListener('mousemove', (event) => {
            let x = event.clientX - (width / 2),
                y = event.clientY - (height / 2);

            light(x, y);
            tilt(x, y);
        });
    }

    function bindGyro() {
        window.addEventListener('deviceorientation', (event) => {
            let x = event.gamma; // Left-right tilt
            let y = event.beta;  // Front-back tilt

            // Adjust values for better feel and cross-browser compatibility
            x = x ? x * 2 : 0; // Multiplier for gamma
            y = y ? y * 2: 0; //Multiplier for beta
            
            // Limit tilt values for mobile devices
            const maxTilt = 40; // Adjust as needed
            x = Math.max(-maxTilt, Math.min(maxTilt, x));
            y = Math.max(-maxTilt, Math.min(maxTilt, y));


            light(x * 10, -y * 10); // Scale down for light effect
            tilt(x, -y); // Invert y for correct tilt direction
        });
    }

    function light(x, y) {
        let angle = (Math.atan2(y, x) * 180) / Math.PI - 90;
        gloss.style.background = 'linear-gradient(' + angle + 'deg, rgba(255, 255, 255,' + Math.abs(y / height * .9) + ') 0%, rgba(255, 255, 255, 0) 80%)';
    }

    function tilt(x, y) {
        let force = 40; // Reduced force for mobile
        let rx = (x / force);
        let ry = (y / force);

        card.style.transform = 'rotateY(' + (rx) + 'deg) rotateX(' + (ry) + 'deg)';
        // content.style.transform = 'translateX(' + (rx * .75) + 'px) translateY(' + (ry * .75) + 'px)';
    }

    init();

})();
    })();
    function bindGyro() {
    window.addEventListener('deviceorientation', (event) => {
      console.log(event.gamma, event.beta); // Lihat nilai gyroscope di konsol

      // ... (kode untuk menyesuaikan dan memproses nilai gyroscope) ...
    });
  }