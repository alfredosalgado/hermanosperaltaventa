// Base de datos de productos
const productos = {
    adocretos: [
        {
            nombre: "Adocreto Rectangular Gris",
            img: "assets/images/adocreto-rect-gris.jpg",
            forma: "Rectangular",
            medidas: "20x10x6 cm",
            color: "Gris",
            rendimiento: "50 unidades por m²"
        },
        {
            nombre: "Adocreto Rectangular Rojo",
            img: "assets/images/adocreto-rect-rojo.jpg",
            forma: "Rectangular",
            medidas: "20x10x6 cm",
            color: "Rojo",
            rendimiento: "50 unidades por m²"
        },
        {
            nombre: "Adocreto Hexagonal Gris",
            img: "assets/images/adocreto-hex-gris.jpg",
            forma: "Hexagonal",
            medidas: "20x20x6 cm",
            color: "Gris",
            rendimiento: "25 unidades por m²"
        },
        {
            nombre: "Adocreto Cuadrado Beige",
            img: "assets/images/adocreto-cuad-beige.jpg",
            forma: "Cuadrado",
            medidas: "20x20x6 cm",
            color: "Beige",
            rendimiento: "25 unidades por m²"
        },
        {
            nombre: "Adocreto Ondulado Gris",
            img: "assets/images/adocreto-ond-gris.jpg",
            forma: "Ondulado",
            medidas: "40x20x6 cm",
            color: "Gris",
            rendimiento: "12.5 unidades por m²"
        },
        {
            nombre: "Adocreto Tipo Césped",
            img: "assets/images/adocreto-cesped.jpg",
            forma: "Especial",
            medidas: "60x40x8 cm",
            color: "Gris",
            rendimiento: "4.2 unidades por m²"
        }
    ],
    pastelones: [
        {
            nombre: "Pastelón Liso 40x40",
            img: "assets/images/pastelon-liso-40.jpg",
            forma: "Cuadrado",
            medidas: "40x40x4 cm",
            color: "Gris",
            rendimiento: "6.25 unidades por m²"
        },
        {
            nombre: "Pastelón Liso 50x50",
            img: "assets/images/pastelon-liso-50.jpg",
            forma: "Cuadrado",
            medidas: "50x50x4 cm",
            color: "Gris",
            rendimiento: "4 unidades por m²"
        },
        {
            nombre: "Pastelón Texturado 40x40",
            img: "assets/images/pastelon-text-40.jpg",
            forma: "Cuadrado",
            medidas: "40x40x4 cm",
            color: "Beige",
            rendimiento: "6.25 unidades por m²"
        },
        {
            nombre: "Pastelón Rectangular 60x30",
            img: "assets/images/pastelon-rect-60.jpg",
            forma: "Rectangular",
            medidas: "60x30x4 cm",
            color: "Gris",
            rendimiento: "5.5 unidades por m²"
        },
        {
            nombre: "Pastelón Antideslizante 40x40",
            img: "assets/images/pastelon-antid-40.jpg",
            forma: "Cuadrado",
            medidas: "40x40x4 cm",
            color: "Rojo",
            rendimiento: "6.25 unidades por m²"
        }
    ],
    "borde-piscina": [
        {
            nombre: "Borde Piscina Recto",
            img: "assets/images/borde-recto.jpg",
            forma: "Rectangular",
            medidas: "50x25x5 cm",
            color: "Beige",
            rendimiento: "8 unidades por metro lineal"
        },
        {
            nombre: "Borde Piscina Curvo",
            img: "assets/images/borde-curvo.jpg",
            forma: "Curvo",
            medidas: "50x25x5 cm",
            color: "Gris",
            rendimiento: "8 unidades por metro lineal"
        },
        {
            nombre: "Borde Piscina Esquina",
            img: "assets/images/borde-esquina.jpg",
            forma: "Esquina",
            medidas: "25x25x5 cm",
            color: "Beige",
            rendimiento: "Según diseño"
        },
        {
            nombre: "Borde Piscina Antideslizante",
            img: "assets/images/borde-antid.jpg",
            forma: "Rectangular",
            medidas: "50x25x5 cm",
            color: "Gris",
            rendimiento: "8 unidades por metro lineal"
        }
    ],
    bloques: [
        {
            nombre: "Bloque Estándar",
            img: "assets/images/bloque-estandar.jpg",
            forma: "Rectangular",
            medidas: "39x19x14 cm",
            color: "Gris",
            rendimiento: "12.5 unidades por m²"
        },
        {
            nombre: "Bloque Medio",
            img: "assets/images/bloque-medio.jpg",
            forma: "Rectangular",
            medidas: "19x19x14 cm",
            color: "Gris",
            rendimiento: "25 unidades por m²"
        },
        {
            nombre: "Bloque Esquinero",
            img: "assets/images/bloque-esquina.jpg",
            forma: "Esquina",
            medidas: "39x19x14 cm",
            color: "Gris",
            rendimiento: "Según diseño"
        },
        {
            nombre: "Bloque Decorativo",
            img: "assets/images/bloque-decorativo.jpg",
            forma: "Especial",
            medidas: "39x19x19 cm",
            color: "Beige",
            rendimiento: "10 unidades por m²"
        },
        {
            nombre: "Bloque Jardinera",
            img: "assets/images/bloque-jardinera.jpg",
            forma: "Especial",
            medidas: "50x25x20 cm",
            color: "Gris",
            rendimiento: "8 unidades por metro lineal"
        }
    ],
    solerillas: [
        {
            nombre: "Solerilla Recta",
            img: "assets/images/solerilla-recta.jpg",
            forma: "Rectangular",
            medidas: "50x15x8 cm",
            color: "Gris",
            rendimiento: "13.3 unidades por metro lineal"
        },
        {
            nombre: "Solerilla Curva",
            img: "assets/images/solerilla-curva.jpg",
            forma: "Curva",
            medidas: "50x15x8 cm",
            color: "Gris",
            rendimiento: "13.3 unidades por metro lineal"
        },
        {
            nombre: "Solerilla Canaleta",
            img: "assets/images/solerilla-canaleta.jpg",
            forma: "Canaleta",
            medidas: "50x20x8 cm",
            color: "Gris",
            rendimiento: "10 unidades por metro lineal"
        },
        {
            nombre: "Solerilla Decorativa",
            img: "assets/images/solerilla-decorativa.jpg",
            forma: "Especial",
            medidas: "50x15x8 cm",
            color: "Beige",
            rendimiento: "13.3 unidades por metro lineal"
        }
    ]
};

// Variables globales
let currentSlide = 0;
let currentTestimonial = 0;
let heroInterval;
let testimonialInterval;

// Variables para la galería
let currentGallerySlide = 0;
let galleryImages = [];
let galleryInterval;
let totalGalleryImages = 0;

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    initializeHeroSlider();
    initializeTestimonialSlider();
    initializeNavigation();
    initializeSmoothScrolling();
    
    // Solo inicializar productos si estamos en una página de productos
    if (document.getElementById('productos-container')) {
        // La función cargarProductos se llamará desde cada página específica
    }
});

// Slider del Hero
function initializeHeroSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.hero-dots .dot');
    const prevBtn = document.querySelector('.hero-nav .prev');
    const nextBtn = document.querySelector('.hero-nav .next');
    
    if (slides.length === 0) return;
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        if (dots[index]) dots[index].classList.add('active');
        
        currentSlide = index;
    }
    
    function nextSlide() {
        const nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }
    
    function prevSlide() {
        const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prevIndex);
    }
    
    // Event listeners
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });
    
    // Auto-play
    heroInterval = setInterval(nextSlide, 5000);
    
    // Pausar en hover
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.addEventListener('mouseenter', () => clearInterval(heroInterval));
        heroSection.addEventListener('mouseleave', () => {
            heroInterval = setInterval(nextSlide, 5000);
        });
    }
}

// Slider de testimonios
function initializeTestimonialSlider() {
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.testimonials-dots .dot');
    
    if (testimonials.length === 0) return;
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        testimonials[index].classList.add('active');
        if (dots[index]) dots[index].classList.add('active');
        
        currentTestimonial = index;
    }
    
    function nextTestimonial() {
        const nextIndex = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(nextIndex);
    }
    
    // Event listeners para dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showTestimonial(index));
    });
    
    // Auto-play
    testimonialInterval = setInterval(nextTestimonial, 4000);
    
    // Pausar en hover
    const testimonialsSection = document.querySelector('.testimonials');
    if (testimonialsSection) {
        testimonialsSection.addEventListener('mouseenter', () => clearInterval(testimonialInterval));
        testimonialsSection.addEventListener('mouseleave', () => {
            testimonialInterval = setInterval(nextTestimonial, 4000);
        });
    }
}

// Navegación móvil
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Cerrar menú al hacer click en un enlace
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
}

// Smooth scrolling
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                const headerHeight = document.querySelector('.header').offsetHeight + 
                                   document.querySelector('.top-bar').offsetHeight;
                
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Función para cargar productos dinámicamente
function cargarProductos(categoria) {
    const container = document.getElementById('productos-container');
    if (!container || !productos[categoria]) return;
    
    container.innerHTML = '';
    
    productos[categoria].forEach(producto => {
        const productCard = createProductCard(producto);
        container.appendChild(productCard);
    });
}

// Crear tarjeta de producto
function createProductCard(producto) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const whatsappMessage = encodeURIComponent(
        `Hola, me interesa cotizar el producto: ${producto.nombre}. ¿Podrían darme más información sobre precio y disponibilidad?`
    );
    
    card.innerHTML = `
        <div class="product-image">
            <i class="fas fa-image"></i>
        </div>
        <div class="product-info">
            <h3>${producto.nombre}</h3>
            <ul class="product-specs">
                <li><strong>Forma:</strong> ${producto.forma}</li>
                <li><strong>Medidas:</strong> ${producto.medidas}</li>
                <li><strong>Color:</strong> ${producto.color}</li>
                <li><strong>Rendimiento:</strong> ${producto.rendimiento}</li>
            </ul>
            <a href="https://api.whatsapp.com/send?phone=56984973913&text=${whatsappMessage}" 
               target="_blank" 
               class="product-whatsapp">
                <i class="fab fa-whatsapp"></i>
                Cotizar por WhatsApp
            </a>
        </div>
    `;
    
    return card;
}

// Función para generar enlace de WhatsApp personalizado
function generateWhatsAppLink(productName, customMessage = '') {
    const baseMessage = customMessage || 
        `Hola, me interesa cotizar el producto: ${productName}. ¿Podrían darme más información?`;
    
    const encodedMessage = encodeURIComponent(baseMessage);
    return `https://api.whatsapp.com/send?phone=56984973913&text=${encodedMessage}`;
}

// Animaciones al hacer scroll
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observar elementos que queremos animar
    const animatedElements = document.querySelectorAll(
        '.feature, .category-card, .testimonial, .value-card, .product-card'
    );
    
    animatedElements.forEach(el => observer.observe(el));
}

// Función para manejar formularios (si se agregan en el futuro)
function handleContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Aquí se puede agregar lógica para enviar el formulario
        // Por ahora, redirigir a WhatsApp
        const message = 'Hola, me interesa contactar con ustedes para más información sobre sus productos.';
        const whatsappUrl = generateWhatsAppLink('Consulta general', message);
        window.open(whatsappUrl, '_blank');
    });
}

// Función para lazy loading de imágenes (optimización futura)
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
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
}

// Función para mostrar/ocultar botón de scroll to top
function initializeScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #e74c3c;
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s;
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    `;
    
    document.body.appendChild(scrollBtn);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Función para manejar errores de carga de imágenes
function handleImageErrors() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            
            // Crear placeholder
            const placeholder = document.createElement('div');
            placeholder.className = 'image-placeholder';
            placeholder.innerHTML = '<i class="fas fa-image"></i>';
            placeholder.style.cssText = `
                width: 100%;
                height: 200px;
                background-color: #ecf0f1;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #95a5a6;
                font-size: 60px;
            `;
            
            this.parentNode.insertBefore(placeholder, this);
        });
    });
}

// Inicializar funciones adicionales cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initializeScrollAnimations();
    initializeScrollToTop();
    handleContactForm();
    handleImageErrors();
    
    // Inicializar galería si existe
    if (document.querySelector('.gallery')) {
        initializeGallery();
    }
    
    // Inicializar lazy loading si hay imágenes con data-src
    if (document.querySelector('img[data-src]')) {
        initializeLazyLoading();
    }
});

// ===== FUNCIONES DE GALERÍA =====

// Configuración de la galería
const GALLERY_CONFIG = {
    maxImages: 20, // Número máximo de imágenes a buscar
    autoplayInterval: 5000, // Intervalo de autoplay en ms
    imagePath: 'assets/images/galeria/',
    imageExtension: '.jpg'
};

// Función principal para inicializar la galería
async function initializeGallery() {
    try {
        await loadGalleryImages();
        if (galleryImages.length > 0) {
            createGallerySlides();
            createGalleryDots();
            setupGalleryNavigation();
            setupGalleryModal();
            startGalleryAutoplay();
        } else {
            console.warn('No se encontraron imágenes para la galería');
        }
    } catch (error) {
        console.error('Error inicializando la galería:', error);
    }
}

// Función para cargar imágenes de la galería dinámicamente
async function loadGalleryImages() {
    galleryImages = [];
    totalGalleryImages = 0;
    
    // Detectar automáticamente el número de imágenes disponibles
    for (let i = 1; i <= GALLERY_CONFIG.maxImages; i++) {
        const imagePath = `${GALLERY_CONFIG.imagePath}${i}${GALLERY_CONFIG.imageExtension}`;
        
        try {
            const imageExists = await checkImageExists(imagePath);
            if (imageExists) {
                galleryImages.push({
                    src: imagePath,
                    title: `Proyecto ${i}`,
                    description: `Ejemplo de aplicación de nuestros productos en proyecto real`
                });
                totalGalleryImages++;
            } else {
                // Si no existe la imagen consecutiva, detener la búsqueda
                break;
            }
        } catch (error) {
            console.warn(`Error verificando imagen ${i}:`, error);
            break;
        }
    }
    
    console.log(`Galería inicializada con ${totalGalleryImages} imágenes`);
}

// Función para verificar si una imagen existe
function checkImageExists(imagePath) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = imagePath;
    });
}

// Función para crear los slides de la galería
function createGallerySlides() {
    const galleryTrack = document.getElementById('galleryTrack');
    if (!galleryTrack) return;
    
    galleryTrack.innerHTML = '';
    
    galleryImages.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = 'gallery-slide';
        slide.innerHTML = `
            <img src="${image.src}" alt="${image.title}" loading="lazy">
            <div class="gallery-slide-overlay">
                <h3>${image.title}</h3>
                <p>${image.description}</p>
            </div>
        `;
        
        // Agregar evento click para abrir modal
        slide.addEventListener('click', () => openGalleryModal(index));
        
        galleryTrack.appendChild(slide);
    });
}

// Función para crear los dots de navegación
function createGalleryDots() {
    const dotsContainer = document.getElementById('galleryDots');
    if (!dotsContainer) return;
    
    dotsContainer.innerHTML = '';
    
    galleryImages.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.className = 'dot';
        if (index === 0) dot.classList.add('active');
        
        dot.addEventListener('click', () => goToGallerySlide(index));
        dotsContainer.appendChild(dot);
    });
}

// Función para configurar la navegación de la galería
function setupGalleryNavigation() {
    const prevBtn = document.getElementById('galleryPrev');
    const nextBtn = document.getElementById('galleryNext');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            const prevIndex = (currentGallerySlide - 1 + galleryImages.length) % galleryImages.length;
            goToGallerySlide(prevIndex);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const nextIndex = (currentGallerySlide + 1) % galleryImages.length;
            goToGallerySlide(nextIndex);
        });
    }
    
    // Pausar autoplay en hover
    const galleryContainer = document.querySelector('.gallery-container');
    if (galleryContainer) {
        galleryContainer.addEventListener('mouseenter', stopGalleryAutoplay);
        galleryContainer.addEventListener('mouseleave', startGalleryAutoplay);
    }
}

// Función para ir a un slide específico
function goToGallerySlide(index) {
    if (index < 0 || index >= galleryImages.length) return;
    
    const galleryTrack = document.getElementById('galleryTrack');
    const dots = document.querySelectorAll('#galleryDots .dot');
    
    if (galleryTrack) {
        const translateX = -index * 100;
        galleryTrack.style.transform = `translateX(${translateX}%)`;
    }
    
    // Actualizar dots
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    
    currentGallerySlide = index;
    
    // Actualizar botones de navegación
    updateGalleryNavButtons();
}

// Función para actualizar el estado de los botones de navegación
function updateGalleryNavButtons() {
    const prevBtn = document.getElementById('galleryPrev');
    const nextBtn = document.getElementById('galleryNext');
    
    if (prevBtn) {
        prevBtn.disabled = currentGallerySlide === 0;
    }
    
    if (nextBtn) {
        nextBtn.disabled = currentGallerySlide === galleryImages.length - 1;
    }
}

// Función para iniciar autoplay
function startGalleryAutoplay() {
    if (galleryImages.length <= 1) return;
    
    stopGalleryAutoplay(); // Limpiar cualquier intervalo existente
    galleryInterval = setInterval(() => {
        const nextIndex = (currentGallerySlide + 1) % galleryImages.length;
        goToGallerySlide(nextIndex);
    }, GALLERY_CONFIG.autoplayInterval);
}

// Función para detener autoplay
function stopGalleryAutoplay() {
    if (galleryInterval) {
        clearInterval(galleryInterval);
        galleryInterval = null;
    }
}

// ===== FUNCIONES DEL MODAL =====

// Función para configurar el modal de la galería
function setupGalleryModal() {
    const modal = document.getElementById('galleryModal');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalPrev = document.getElementById('modalPrev');
    const modalNext = document.getElementById('modalNext');
    
    if (modalClose) {
        modalClose.addEventListener('click', closeGalleryModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeGalleryModal);
    }
    
    if (modalPrev) {
        modalPrev.addEventListener('click', () => {
            const prevIndex = (currentGallerySlide - 1 + galleryImages.length) % galleryImages.length;
            showModalImage(prevIndex);
        });
    }
    
    if (modalNext) {
        modalNext.addEventListener('click', () => {
            const nextIndex = (currentGallerySlide + 1) % galleryImages.length;
            showModalImage(nextIndex);
        });
    }
    
    // Cerrar modal con tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeGalleryModal();
        }
        if (e.key === 'ArrowLeft') {
            const prevIndex = (currentGallerySlide - 1 + galleryImages.length) % galleryImages.length;
            showModalImage(prevIndex);
        }
        if (e.key === 'ArrowRight') {
            const nextIndex = (currentGallerySlide + 1) % galleryImages.length;
            showModalImage(nextIndex);
        }
    });
}

// Función para abrir el modal
function openGalleryModal(imageIndex) {
    const modal = document.getElementById('galleryModal');
    if (!modal) return;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevenir scroll del body
    
    showModalImage(imageIndex);
    stopGalleryAutoplay(); // Pausar autoplay cuando se abre el modal
}

// Función para cerrar el modal
function closeGalleryModal() {
    const modal = document.getElementById('galleryModal');
    if (!modal) return;
    
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restaurar scroll del body
    
    startGalleryAutoplay(); // Reanudar autoplay cuando se cierra el modal
}

// Función para mostrar una imagen en el modal
function showModalImage(index) {
    if (index < 0 || index >= galleryImages.length) return;
    
    const modalImage = document.getElementById('modalImage');
    const modalCounter = document.getElementById('modalCounter');
    const modalPrev = document.getElementById('modalPrev');
    const modalNext = document.getElementById('modalNext');
    
    if (modalImage) {
        modalImage.src = galleryImages[index].src;
        modalImage.alt = galleryImages[index].title;
    }
    
    if (modalCounter) {
        modalCounter.textContent = `${index + 1} / ${galleryImages.length}`;
    }
    
    // Actualizar botones de navegación del modal
    if (modalPrev) {
        modalPrev.disabled = index === 0;
    }
    
    if (modalNext) {
        modalNext.disabled = index === galleryImages.length - 1;
    }
    
    currentGallerySlide = index;
    
    // Sincronizar con la galería principal
    goToGallerySlide(index);
}

// Función para limpiar intervalos al salir de la página
window.addEventListener('beforeunload', function() {
    if (heroInterval) clearInterval(heroInterval);
    if (testimonialInterval) clearInterval(testimonialInterval);
    if (galleryInterval) clearInterval(galleryInterval);
});

// Exportar funciones para uso global
window.cargarProductos = cargarProductos;
window.generateWhatsAppLink = generateWhatsAppLink;
window.initializeGallery = initializeGallery;
