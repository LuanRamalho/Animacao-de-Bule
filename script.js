document.getElementById('bule').addEventListener('click', function() {
    const colors = ['#8B4513', '#FF6347', '#4682B4', '#32CD32'];
    const currentColor = this.style.backgroundColor;
    let newColor = colors[Math.floor(Math.random() * colors.length)];
    
    while (newColor === currentColor) {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    }
    
    this.style.backgroundColor = newColor;
    document.getElementById('tampa').style.backgroundColor = newColor;
    document.getElementById('corpo').style.backgroundColor = newColor;
    document.getElementById('bico').style.backgroundColor = newColor;
    document.getElementById('alca').style.backgroundColor = newColor;
});
