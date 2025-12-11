/* Age Renew by Kalya - JavaScript personalizado */

// Inicializar Mermaid
document.addEventListener('DOMContentLoaded', function() {
    // Configurar Mermaid
    if (typeof mermaid !== 'undefined') {
        mermaid.initialize({ 
            startOnLoad: true,
            theme: 'default',
            themeVariables: {
                primaryColor: '#D7A4B7',
                primaryTextColor: '#333',
                primaryBorderColor: '#6E8072',
                lineColor: '#6E8072',
                secondaryColor: '#f8f9fa',
                tertiaryColor: '#fff',
                background: '#ffffff',
                tertiaryTextColor: '#333'
            },
            flowchart: {
                useMaxWidth: true,
                htmlLabels: true
            }
        });
    }
    
    // Smooth scrolling para enlaces ancla
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animación de aparición para elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Aplicar animación a elementos con clase 'animate-on-scroll'
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Mejorar formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validación básica
            const requiredFields = contactForm.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#ff6b6b';
                } else {
                    field.style.borderColor = '#D7A4B7';
                }
            });
            
            if (isValid) {
                // Simular envío exitoso
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Enviando...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    submitBtn.textContent = '✓ Enviado';
                    submitBtn.style.backgroundColor = '#28a745';
                    
                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                        submitBtn.style.backgroundColor = '';
                        contactForm.reset();
                    }, 2000);
                }, 1000);
            } else {
                alert('Por favor, completa todos los campos obligatorios.');
            }
        });
    }
    
    // Toggle para FAQ
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const arrow = this.querySelector('.faq-arrow');
            
            // Cerrar otras respuestas
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== this) {
                    const otherAnswer = otherQuestion.nextElementSibling;
                    const otherArrow = otherQuestion.querySelector('.faq-arrow');
                    otherAnswer.classList.remove('active');
                    otherArrow.classList.remove('active');
                }
            });
            
            // Toggle respuesta actual
            answer.classList.toggle('active');
            arrow.classList.toggle('active');
        });
    });
    
    // Mejorar navegación móvil
    const navToggle = document.querySelector('.greedy-nav__toggle');
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            document.body.classList.toggle('nav-open');
        });
    }
    
    // Lazy loading para imágenes
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Efecto parallax suave para hero sections
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero-parallax');
        if (parallax) {
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });
    
    // Contador animado para estadísticas
    const counters = document.querySelectorAll('.stat-number');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target') || counter.textContent);
                const increment = target / 100;
                let current = 0;
                
                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        counter.textContent = Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    });
    
    counters.forEach(counter => counterObserver.observe(counter));
});

// Función para cargar imágenes fallback si no existen
function handleImageError(img) {
    img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRDdBNEI3Ii8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5BZ2UgUmVuZXcgYnkgS2FseWE8L3RleHQ+Cjwvc3ZnPg==';
    img.alt = 'Age Renew by Kalya - Imagen no disponible';
}

// Configuración de colores de marca para elementos dinámicos
const brandColors = {
    primary: '#D7A4B7',
    secondary: '#6E8072',
    background: '#FFFFFF',
    text: '#333333'
};

// Aplicar colores de marca dinámicamente
function applyBrandColors() {
    document.documentElement.style.setProperty('--primary-color', brandColors.primary);
    document.documentElement.style.setProperty('--secondary-color', brandColors.secondary);
    document.documentElement.style.setProperty('--background-color', brandColors.background);
    document.documentElement.style.setProperty('--text-color', brandColors.text);
}