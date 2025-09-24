const heroText = document.getElementById("hero-text");
if (heroText) {
    const text = "Welcome to My Portfolio 🚀";
    let i = 0;

function typeWriter() {
    if (i < text.length) {
        heroText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
typeWriter();  
}