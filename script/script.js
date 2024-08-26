// script.js

// Modal de detalles de proyectos
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('projectTitle');
const modalDescription = document.getElementById('projectDescription');
const closeBtn = document.getElementsByClassName('close')[0];

function showProjectDetails(title, description) {
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Manejo del formulario de contacto
const form = document.getElementById('contactForm');
const formResponse = document.getElementById('formResponse');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    formResponse.textContent = "Gracias por contactarnos. Te responderemos pronto.";
    form.reset();
});
