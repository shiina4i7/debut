if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
    DeviceOrientationEvent.requestPermission().then(permission => {
      if (permission === 'granted') {
        window.addEventListener('deviceorientation', handleOrientation);
      } else {
        console.log("Izin sensor ditolak.");
      }
    }).catch(error => {
      console.error("Error meminta izin sensor:", error);
    });
  } else if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', handleOrientation);
  } else {
    console.log("Sensor orientasi perangkat tidak didukung.");
  }