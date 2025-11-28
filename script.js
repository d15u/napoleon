let currentSlideIndex = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.dot');

document.addEventListener('DOMContentLoaded', function() {
    showSlide(currentSlideIndex);
    
    setInterval(function() {
        changeSlide(1);
    }, 5000);
});

function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    if (slides[index]) {
        slides[index].classList.add('active');
    }
    
    if (dots[index]) {
        dots[index].classList.add('active');
    }
}

function changeSlide(direction) {
    currentSlideIndex += direction;
    
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }
    
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    
    showSlide(currentSlideIndex);
}

function currentSlide(index) {
    currentSlideIndex = index - 1;
    showSlide(currentSlideIndex);
}

document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.primary-cta');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Here you can add functionality like:
            // - Opening app store links
            // - Showing a download modal
            // - Redirecting to app download page
            console.log('CTA button clicked - ready for app store integration');
        });
    }
});

function addImageLoadingEffect(placeholder) {
    placeholder.style.opacity = '0.5';
    placeholder.style.transition = 'opacity 0.3s ease';
    
    setTimeout(() => {
        placeholder.style.opacity = '1';
    }, 300);
}

function replacePlaceholderImage(placeholderSelector, imageUrl, altText) {
    const placeholder = document.querySelector(placeholderSelector);
    if (placeholder && imageUrl) {
        placeholder.innerHTML = `<img src="${imageUrl}" alt="${altText}" style="width: 100%; height: 100%; object-fit: cover; border-radius: inherit;">`;
        addImageLoadingEffect(placeholder);
    }
}

function addScrollAnimations() {
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
    
    const animatedElements = document.querySelectorAll('.headline, .sub-headline, .phone-mockup, .primary-cta');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

document.addEventListener('DOMContentLoaded', addScrollAnimations);
