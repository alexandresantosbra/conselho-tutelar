// Menu Mobile Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const isExpanded = navMenu.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const isExpanded = question.getAttribute('aria-expanded') === 'true';
        const answer = question.nextElementSibling;

        // Fechar todas as outras FAQs
        faqQuestions.forEach(q => {
            if (q !== question) {
                q.setAttribute('aria-expanded', 'false');
                q.nextElementSibling.style.maxHeight = '0';
            }
        });

        // Toggle da FAQ atual
        if (isExpanded) {
            question.setAttribute('aria-expanded', 'false');
            answer.style.maxHeight = '0';
        } else {
            question.setAttribute('aria-expanded', 'true');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});

// Smooth Scroll para links de âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '#documentos') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Highlight da seção ativa no menu durante o scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightActiveSection() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightActiveSection);

// Adicionar estilo para link ativo
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color);
        font-weight: 600;
    }
`;
document.head.appendChild(style);

// Animação de entrada para cards (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar cards e itens
const animatedElements = document.querySelectorAll('.card, .atribuicao-item, .transparencia-card, .download-item');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Validação de formulário (caso seja adicionado no futuro)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Adicionar funcionalidade de busca (se necessário no futuro)
function initSearch() {
    // Implementação futura de busca
    console.log('Sistema de busca pode ser implementado aqui');
}

// Lazy loading para imagens (se forem adicionadas)
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback para navegadores que não suportam lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// Adicionar feedback visual ao clicar em botões de emergência
const emergencyButtons = document.querySelectorAll('.btn-emergency');
emergencyButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        // Adicionar animação de feedback
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// Detectar se o usuário está em um dispositivo móvel
function isMobile() {
    return window.innerWidth <= 768;
}

// Ajustar comportamento baseado no dispositivo
if (isMobile()) {
    // Otimizações específicas para mobile
    document.body.classList.add('mobile-device');
}

// Adicionar suporte para teclado (acessibilidade)
document.addEventListener('keydown', (e) => {
    // ESC fecha o menu mobile
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    }
});

// Log de analytics (substituir por serviço real se necessário)
function trackEvent(category, action, label) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
    // Fallback para console (remover em produção)
    console.log(`Event: ${category} - ${action} - ${label}`);
}

// Rastrear cliques em botões de emergência
emergencyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.querySelector('strong')?.textContent || 'Emergência';
        trackEvent('Emergência', 'Clique', buttonText);
    });
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    console.log('Conselho Tutelar - Página carregada');
    
    // Verificar se há erros de carregamento
    window.addEventListener('error', (e) => {
        console.error('Erro na página:', e.error);
    });
});
