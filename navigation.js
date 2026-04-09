// ============================================
// Neo Data Center Presentation Navigation
// Material Design 3 + Dark Cyberpunk Theme
// ============================================

class PresentationSlider {
    constructor() {
        this.currentSlide = 1;
        this.totalSlides = 20;
        this.slides = {};
        this.slideContent = document.getElementById('slide-content');
        this.slideTitle = document.querySelector('.slide-title');
        this.currentSlideNumber = document.getElementById('current-slide');
        this.prevBtn = document.querySelector('.prev-btn');
        this.nextBtn = document.querySelector('.next-btn');

        this.init();
    }

    async init() {
        // Load all slides
        await this.loadSlides();

        // Set up event listeners
        this.setupEventListeners();

        // Load first slide
        await this.goToSlide(1);
    }

    async loadSlides() {
        // Preload all slide content
        for (let i = 1; i <= this.totalSlides; i++) {
            const slideNum = String(i).padStart(2, '0');
            try {
                const response = await fetch(`${slideNum}.html`);
                if (response.ok) {
                    const html = await response.text();
                    this.slides[i] = html;
                } else {
                    console.warn(`Slide ${slideNum}.html not found`);
                    this.slides[i] = this.getErrorSlide(i);
                }
            } catch (error) {
                console.error(`Error loading slide ${slideNum}:`, error);
                this.slides[i] = this.getErrorSlide(i);
            }
        }
    }

    async goToSlide(num) {
        if (num < 1 || num > this.totalSlides) return;

        this.currentSlide = num;
        this.currentSlideNumber.textContent = num;

        // Update content
        this.slideContent.innerHTML = this.slides[num] || this.getErrorSlide(num);

        // Update title (extract from h1 or use default)
        const h1 = this.slideContent.querySelector('h1');
        this.slideTitle.textContent = h1 ?h1.textContent : `Slide ${num}`;

        // Update navigation buttons
        this.prevBtn.disabled = (num === 1);
        this.nextBtn.disabled = (num === this.totalSlides);

        // Trigger animations
        this.triggerAnimations();
    }

    triggerAnimations() {
        // Add animation classes to elements
        const elements = this.slideContent.querySelectorAll('.card, .sequence-step, .timeline-item');
        elements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            setTimeout(() => {
                el.style.transition = 'all 0.4s ease';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    getErrorSlide(num) {
        return `
            <div class="flex flex-center" style="height: 100%;">
                <div class="card">
                    <h2>Slide ${num} Not Found</h2>
                    <p>The slide content could not be loaded.</p>
                </div>
            </div>
        `;
    }

    setupEventListeners() {
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowRight':
                case ' ':
                case 'PageDown':
                    e.preventDefault();
                    this.nextSlide();
                    break;
                case 'ArrowLeft':
                case 'PageUp':
                    e.preventDefault();
                    this.prevSlide();
                    break;
                case 'Home':
                    e.preventDefault();
                    this.goToSlide(1);
                    break;
                case 'End':
                    e.preventDefault();
                    this.goToSlide(this.totalSlides);
                    break;
            }
        });

        // Button navigation
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());

        // Touch navigation
        let touchStartX = 0;
        let touchEndX = 0;

        document.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        document.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
        });
    }

    handleSwipe(startX, endX) {
        const threshold = 50;
        const diff = startX - endX;

        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                this.nextSlide();
            } else {
                this.prevSlide();
            }
        }
    }

    nextSlide() {
        if (this.currentSlide < this.totalSlides) {
            this.goToSlide(this.currentSlide + 1);
        }
    }

    prevSlide() {
        if (this.currentSlide > 1) {
            this.goToSlide(this.currentSlide - 1);
        }
    }
}

// SVG Interactivity
class SVGInteractions {
    constructor() {
        this.setupSVGInteractions();
    }

    setupSVGInteractions() {
        document.addEventListener('DOMContentLoaded', () => {
            const slides = document.querySelectorAll('.slide-content');

            slides.forEach(slide => {
                // Handle SVG node hover
                const svgNodes = slide.querySelectorAll('.svg-node');
                svgNodes.forEach(node => {
                    node.addEventListener('mouseenter', (e) => this.showTooltip(e));
                    node.addEventListener('mouseleave', () => this.hideTooltip());
                });
            });
        });
    }

    showTooltip(e) {
        const tooltip = e.target.getAttribute('data-tooltip');
        if (!tooltip) return;

        // Create tooltip element if it doesn't exist
        let tooltipEl = document.getElementById('svg-tooltip');
        if (!tooltipEl) {
            tooltipEl = document.createElement('div');
            tooltipEl.id = 'svg-tooltip';
            tooltipEl.style.cssText = `
                position: absolute;
                background: var(--bg-secondary);
                border: 1px solid var(--cyan-accent);
                border-radius: 8px;
                padding: 12px 16px;
                color: var(--text-primary);
                font-size: 14px;
                max-width: 300px;
                box-shadow: var(--elevation-3);
                z-index: 1000;
                pointer-events: none;
            `;
            document.body.appendChild(tooltipEl);
        }

        tooltipEl.innerHTML = tooltip;
        tooltipEl.style.display = 'block';

        // Position tooltip near cursor
        const rect = e.target.getBoundingClientRect();
        tooltipEl.style.left = `${rect.left + window.scrollX}px`;
        tooltipEl.style.top = `${rect.top + window.scrollY - 60}px`;
    }

    hideTooltip() {
        const tooltipEl = document.getElementById('svg-tooltip');
        if (tooltipEl) {
            tooltipEl.style.display = 'none';
        }
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new PresentationSlider();
    new SVGInteractions();
});