const urlParams = new URLSearchParams(window.location.search);
const namaTamu = urlParams.get('to');
document.getElementById('namaTamu').textContent = `${namaTamu}`;
const classCruise = urlParams.get('class');
document.getElementById('classCruise').textContent = `${classCruise} CLASS`; // Perbaikan teks

const card = document.querySelector('.card'); // Ambil elemen .card
card.classList.remove('REG', 'REGULER', 'VIP', 'PREMIUM'); // Hapus kelas CSS sebelumnya

if (classCruise) { // Periksa apakah classCruise ada
    if (classCruise === 'REG') {
      card.classList.add('REG');
    } else if (classCruise === 'REGULER') {
      card.classList.add('REGULER');
    } else if (classCruise === 'VIP') {
      card.classList.add('VIP');
    } else if (classCruise === 'PREMIUM') {
      card.classList.add('PREMIUM');
    }
  }