downloadButton.addEventListener('click', () => {
    console.log("Tombol download diklik"); // Cek apakah event listener berfungsi

    html2canvas(card)
        .then(canvas => {
            console.log("html2canvas berhasil");
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = `Card ${namaTamu}-${classCruise} CLASS.png`;
            link.click();
            console.log("Download selesai");
        })
        .catch(error => {
            console.error('Error capturing card:', error);
            console.log("Error details:", error); // Tampilkan detail error
        });
});