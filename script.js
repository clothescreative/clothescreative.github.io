// Datos de las técnicas de personalización
const techniquesData = {
    bordado: {
        icon: '<i class="fas fa-thread"></i>',
        title: 'Bordado Industrial',
        description: 'Bordadoras industriales de alta precisión que garantizan acabados profesionales y durabilidad excepcional',
        advantages: [
            'Máxima durabilidad y resistencia',
            'Acabado profesional premium',
            'Precios muy competitivos',
            'Amplia gama de colores'
        ],
        products: [
            'Polos corporativos',
            'Camisas de trabajo',
            'Gorras y gorros',
            'Delantales profesionales',
            'Uniformes laborales'
        ],
        specs: [
            { label: 'Colores', value: 'Amplia gama disponible' },
            { label: 'Tiempo', value: '3-5 días laborables' },
            { label: 'Calidad', value: 'Industrial premium' }
        ]
    },
    sublimacion: {
        icon: '<i class="fas fa-palette"></i>',
        title: 'Grabado láser',
        description: 'Grabado de alta precisión sobre metal, madera, cristal y más, con acabados nítidos y permanentes ideales para merchandising corporativo.',
        advantages: [
            'Precisión milimétrica',
            'Personalización permanente',
            'Ideal para metal, madera y piel'
        ],
        products: [
            'Botellas térmicas',
            'Placas corporativas',
            'Detalles únicos de regalos premium'
        ],
        specs: [
            { label: 'Textura', value: 'Grabado al tacto' },
            { label: 'Tiempo', value: '2-4 días laborables' },
            { label: 'Calidad', value: 'Sofisticado y atemporal' }
        ]
    },
    serigrafia: {
        icon: '<i class="fas fa-print"></i>',
        title: 'DTF',
        description: 'Impresión flexible y a todo color sobre tejidos, con transferencia por calor que ofrece colores vivos, gran adherencia y resistencia al lavado.',
        advantages: [
            'Colores intensos y vibrantes',
            'Gran adherencia y elasticidad',
            'Ideal para tiradas cortas con calidad profesional'
        ],
        products: [
            'Camisetas deportivas',
            'Sudaderas con ilustraciones',
            'Merchandising '
        ],
        specs: [
            { label: 'Colores', value: 'Variedad de colores' },
            { label: 'Tiempo', value: '5-7 días laborables' },
            { label: 'Calidad', value: 'Profesional estándar' }
        ]
    },
    vinilo: {
        icon: '<i class="fas fa-cut"></i>',
        title: 'Impresión UV',
        description: 'Impresión directa sobre superficies rígidas o flexibles, con barniz selectivo y secado instantáneo que realza los detalles y aporta relieve brillante.',
        advantages: [
            'Alta definición y calidad',
            'Brillo o mate según el soporte',
            'Ideal para objetos rígidos y promocionales'
        ],
        products: [
            'Llaveros personalizados',
            'Placas, cajas y regalos corporativos',
            'Decoraciones con logo'
        ],
        specs: [
            { label: 'Colores', value: 'Amplia variedad' },
            { label: 'Tiempo', value: '1-3 días laborables' },
            { label: 'Calidad', value: 'Premium personalizada' }
        ]
    },
    uvdtf: {
        icon: '<i class="fas fa-bolt"></i>',
        title: 'UV DTF',
        description: 'Técnica avanzada que combina la versatilidad del DTF con la durabilidad del UV, ofreciendo acabados premium con efectos especiales y máxima resistencia.',
        advantages: [
            'Máxima durabilidad y resistencia',
            'Efectos especiales únicos',
            'Ideal para productos premium',
            'Acabados de alta gama'
        ],
        products: [
            'Productos premium y exclusivos',
            'Ropa de alta gama',
            'Colecciones especiales',
            'Merchandising corporativo premium'
        ],
        specs: [
            { label: 'Colores', value: 'Efectos especiales UV' },
            { label: 'Tiempo', value: '3-5 días laborables' },
            { label: 'Calidad', value: 'Premium exclusiva' }
        ]
    },
    laser: {
        icon: '<i class="fas fa-fire"></i>',
        title: 'Serigrafía clásica',
        description: 'Técnica artesanal de impresión por capas, perfecta para grandes tiradas con colores planos, alta opacidad y excelente resistencia al desgaste.',
        advantages: [
            'Técnica tradicional de alta resistencia',
            'Colores planos y consistentes',
            'Ideal para grandes cantidades'
        ],
        products: [
            'Camisetas para eventos y staff',
            'Bolsas tote ecológicas',
            'Textil promocional de impacto'
        ],
        specs: [
            { label: 'Colores', value: 'Efectos especiales' },
            { label: 'Tiempo', value: '3-5 días laborables' },
            { label: 'Calidad', value: 'Premium exclusiva' }
        ]
    }
};

// Variables globales
let currentSection = 'inicio';
let isScrolling = false;

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeTechniqueTabs();
    initializeScrollEffects();
    initializeFormHandling();
    initializeAnimations();
    initializeHeroParallax();
});

function initializeHeroParallax() {
    const hero = document.querySelector('.hero');
    const layers = document.querySelectorAll('.parallax-layer');
    if (!hero || layers.length === 0) return;

    // Movimiento con el mouse
    hero.addEventListener('mousemove', function(e) {
        const rect = hero.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        layers.forEach((layer, i) => {
            const depth = (i + 1) * 10;
            layer.style.transform = `translate3d(${x * depth}px, ${y * depth}px, 0)`;
        });
    });
    // Reset al salir
    hero.addEventListener('mouseleave', function() {
        layers.forEach(layer => {
            layer.style.transform = '';
        });
    });
    // Movimiento sutil con scroll
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        layers.forEach((layer, i) => {
            const depth = (i + 1) * 0.2;
            layer.style.transform += ` translateY(${scrollY * depth}px)`;
        });
    });
}

// Inicialización de la navegación
function initializeNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle del menú móvil
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Navegación suave
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.getAttribute('data-section');
            showSection(targetSection);
            
            // Cerrar menú móvil si está abierto
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Detectar sección activa al hacer scroll
    window.addEventListener('scroll', function() {
        if (!isScrolling) {
            detectActiveSection();
        }
    });
}

// Inicialización de las pestañas de técnicas
function initializeTechniqueTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const technique = this.getAttribute('data-technique');
            showTechnique(technique);
            
            // Actualizar botones activos
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Inicialización de efectos de scroll
function initializeScrollEffects() {
    // Efecto de navbar al hacer scroll
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Animaciones al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observar elementos para animación
    const animateElements = document.querySelectorAll('.product-card, .service-card, .gallery-item, .testimonial-card');
    animateElements.forEach(el => observer.observe(el));
}

// Inicialización del manejo de formularios
function initializeFormHandling() {
    const contactForm = document.querySelector('.contact-form form');
    const quoteButtons = document.querySelectorAll('.quote-btn');

    // Manejo del formulario de contacto
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission(this);
        });
    }

    // Manejo de botones de cotización
    quoteButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            showQuoteModal();
        });
    });
}

// Inicialización de animaciones
function initializeAnimations() {
    // Animación de contador para precios
    animateCounters();
    
    // Efectos hover en botones
    initializeButtonEffects();
    
    // Animación de carga de la página
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
}

// Función para mostrar sección
function showSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        isScrolling = true;
        
        // Scroll suave a la sección
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        // Actualizar navegación activa
        updateActiveNavigation(sectionId);
        
        // Resetear flag de scroll
        setTimeout(() => {
            isScrolling = false;
        }, 1000);
    }
}

// Función para mostrar técnica
function showTechnique(technique) {
    const data = techniquesData[technique];
    if (!data) return;
    
    // Actualizar contenido
    document.getElementById('technique-icon').innerHTML = data.icon;
    document.getElementById('technique-title').textContent = data.title;
    document.getElementById('technique-description').textContent = data.description;
    
    // Actualizar ventajas
    const advantagesList = document.getElementById('technique-advantages');
    advantagesList.innerHTML = data.advantages.map(advantage => 
        `<li><i class="fas fa-check"></i> ${advantage}</li>`
    ).join('');
    
    // Actualizar productos
    const productsList = document.getElementById('technique-products');
    productsList.innerHTML = data.products.map(product => 
        `<li><i class="fas fa-chevron-right"></i> ${product}</li>`
    ).join('');
    
    // Actualizar especificaciones
    const specsContainer = document.getElementById('technique-specs');
    specsContainer.innerHTML = data.specs.map(spec => 
        `<div class="spec-item">
            <span>${spec.label}:</span>
            <span>${spec.value}</span>
        </div>`
    ).join('');
    
    // Animación de transición
    const techniqueCard = document.getElementById('technique-card');
    techniqueCard.style.opacity = '0';
    setTimeout(() => {
        techniqueCard.style.opacity = '1';
    }, 200);
}

// Función para detectar sección activa
function detectActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            if (currentSection !== sectionId) {
                currentSection = sectionId;
                updateActiveNavigation(sectionId);
            }
        }
    });
}

// Función para actualizar navegación activa
function updateActiveNavigation(sectionId) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === sectionId) {
            link.classList.add('active');
        }
    });
}

// Función para manejar envío de formulario
function handleFormSubmission(form) {
    const formData = new FormData(form);
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;

    // Mostrar estado de carga
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitBtn.disabled = true;
    
    // Simular envío (aquí iría la lógica real de envío)
    setTimeout(() => {
        // Mostrar mensaje de éxito
        showNotification('¡Mensaje enviado con éxito! Te responderemos en menos de 24 horas.', 'success');
    
        // Resetear formulario
        form.reset();
        
        // Restaurar botón
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// Función para mostrar modal de cotización
function showQuoteModal() {
    // Aquí se implementaría un modal de cotización
    showNotification('Redirigiendo al formulario de cotización...', 'info');
    setTimeout(() => {
        showSection('contacto');
    }, 1000);
}

// Función para mostrar notificaciones
function showNotification(message, type = 'info') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Añadir al DOM
    document.body.appendChild(notification);
    
    // Mostrar notificación
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Ocultar notificación
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 4000);
}

// Función para animar contadores
function animateCounters() {
    const counters = document.querySelectorAll('.current-price');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.match(/\d+/)[0]);
        const increment = target / 50;
        let current = 0;

        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = `Desde ${Math.ceil(current)}€`;
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = `Desde ${target}€`;
            }
        };

        // Iniciar animación cuando el elemento sea visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(counter);
        });
    }
    
// Función para inicializar efectos de botones
function initializeButtonEffects() {
    const buttons = document.querySelectorAll('button, .nav-link, .tab-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Función para validar formulario
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
            }
        });

    return isValid;
}

// Función para limpiar formulario
function clearForm(form) {
    form.reset();
    form.querySelectorAll('input, textarea, select').forEach(input => {
        input.classList.remove('error');
    });
}

// Función para copiar al portapapeles
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Información copiada al portapapeles', 'success');
    }).catch(() => {
        showNotification('Error al copiar al portapapeles', 'error');
    });
}

// Función para descargar catálogo
function downloadCatalog() {
    showNotification('Descargando catálogo...', 'info');
    // Aquí se implementaría la descarga real del catálogo
}

// Función para abrir chat
function openChat() {
    showNotification('Abriendo chat de atención al cliente...', 'info');
    // Aquí se implementaría la apertura del chat
}

// Función para compartir en redes sociales
function shareOnSocial(platform) {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Clothes Creative - Personalización Textil Profesional');
    
    let shareUrl = '';
    switch(platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
            break;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
        }
}

// Función para mostrar/ocultar menú móvil
function toggleMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
}

// Función para cerrar menú móvil al hacer clic fuera
document.addEventListener('click', function(e) {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// Función para manejar teclas de acceso rápido
document.addEventListener('keydown', function(e) {
    // ESC para cerrar menú móvil
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.getElementById('nav-toggle');
        
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
            }
        
    // Enter para enviar formulario
    if (e.key === 'Enter' && e.target.tagName === 'INPUT') {
        const form = e.target.closest('form');
        if (form) {
            e.preventDefault();
            form.dispatchEvent(new Event('submit'));
        }
    }
});

// Función para optimizar rendimiento en scroll
let scrollTimeout;
window.addEventListener('scroll', function() {
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }
    
    scrollTimeout = setTimeout(() => {
        // Ejecutar funciones que requieren scroll solo cuando se detenga
        detectActiveSection();
    }, 100);
    });

// Función para precargar imágenes
function preloadImages() {
    const images = [
        // Aquí se añadirían las URLs de las imágenes a precargar
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Función para manejar errores
window.addEventListener('error', function(e) {
    console.error('Error en la aplicación:', e.error);
    showNotification('Ha ocurrido un error. Por favor, recarga la página.', 'error');
});

// Función para manejar conexión offline
window.addEventListener('offline', function() {
    showNotification('Sin conexión a internet. Algunas funciones pueden no estar disponibles.', 'warning');
});
    
// Función para manejar conexión online
window.addEventListener('online', function() {
    showNotification('Conexión restaurada.', 'success');
});

// Inicialización final
window.addEventListener('load', function() {
    // Precargar imágenes
    preloadImages();
    
    // Mostrar página completamente cargada
    document.body.classList.add('fully-loaded');
    
    // Inicializar tooltips si existen
    if (typeof tippy !== 'undefined') {
        tippy('[data-tippy-content]', {
            placement: 'top',
            animation: 'scale'
        });
    }
});

// Exportar funciones para uso global
window.ClothesCreative = {
    showSection,
    showTechnique,
    showNotification,
    copyToClipboard,
    downloadCatalog,
    openChat,
    shareOnSocial,
    toggleMobileMenu
};

function handleContactSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const submitBtn = document.getElementById('submitBtn');
    const originalText = submitBtn.querySelector('span').textContent;
    
    // Validar formulario
    if (!validateContactForm(form)) {
        return;
    }
    
    // Cambiar estado del botón
    submitBtn.disabled = true;
    submitBtn.querySelector('span').textContent = 'Enviando...';
    submitBtn.style.opacity = '0.7';
    
    // Recoger datos del formulario
    const formData = new FormData(form);
    const contactData = {
        nombre: formData.get('nombre'),
        email: formData.get('email'),
        telefono: formData.get('telefono'),
        empresa: formData.get('empresa'),
        tecnica: formData.get('tecnica'),
        mensaje: formData.get('mensaje'),
        fecha: new Date().toLocaleString('es-ES')
    };
    
    // Simular envío (aquí puedes integrar con tu servicio de email)
    setTimeout(() => {
        // Enviar por email usando mailto (solución temporal)
        const emailBody = `
Nuevo mensaje de contacto desde Clothes Creative:

Nombre: ${contactData.nombre}
Email: ${contactData.email}
Teléfono: ${contactData.telefono || 'No proporcionado'}
Empresa: ${contactData.empresa || 'No proporcionado'}
Técnica de interés: ${contactData.tecnica}
Mensaje: ${contactData.mensaje}
Fecha: ${contactData.fecha}
        `;
        
        const mailtoLink = `mailto:clothescreative@hotmail.com?subject=Nuevo contacto - ${contactData.nombre}&body=${encodeURIComponent(emailBody)}`;
        
        // Mostrar notificación de éxito
        showNotification('¡Mensaje enviado! Te responderemos pronto.', 'success');
        
        // Limpiar formulario
        form.reset();
        
        // Restaurar botón
        submitBtn.disabled = false;
        submitBtn.querySelector('span').textContent = originalText;
        submitBtn.style.opacity = '1';
        
        // Abrir cliente de email (opcional)
        // window.open(mailtoLink);
        
    }, 1500);
}

function validateContactForm(form) {
    const nombre = form.querySelector('#nombre').value.trim();
    const email = form.querySelector('#email').value.trim();
    const tecnica = form.querySelector('#tecnica').value;
    const mensaje = form.querySelector('#mensaje').value.trim();
    
    if (!nombre) {
        showNotification('Por favor, introduce tu nombre.', 'error');
        return false;
    }
    
    if (!email || !isValidEmail(email)) {
        showNotification('Por favor, introduce un email válido.', 'error');
        return false;
    }
    
    if (!tecnica) {
        showNotification('Por favor, selecciona una técnica de interés.', 'error');
        return false;
    }
    
    if (!mensaje || mensaje.length < 10) {
        showNotification('Por favor, escribe un mensaje de al menos 10 caracteres.', 'error');
        return false;
    }
    
    return true;
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}