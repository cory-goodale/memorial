/**
 * Memorial Service Page Interactive Script
 * - Smooth Parallax scroll effects (Hero + subtle depth)
 * - IntersectionObserver Scroll Reveal animations
 * - Simple touch-friendly Image Lightbox for viewing mom's garden photos
 */

document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------
  // 1. Scroll Reveal Animations (Intersection Observer)
  // -------------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback if browser doesn't support IntersectionObserver
    revealElements.forEach(el => el.classList.add('active'));
  }

  // -------------------------------------------------------------
  // 2. Parallax Effect for Hero (Hardware-accelerated & jitter-free)
  // -------------------------------------------------------------
  const heroBg = document.getElementById('heroBg');
  let ticking = false;
  let lastY = -1;

  function updateParallax() {
    if (heroBg) {
      const scrolled = Math.max(0, window.pageYOffset || document.documentElement.scrollTop || 0);
      const heroHeight = heroBg.parentElement ? heroBg.parentElement.offsetHeight : window.innerHeight;
      
      // Only compute while hero is in or near view
      if (scrolled <= heroHeight) {
        const yPos = (scrolled * 0.35).toFixed(1);
        if (yPos !== lastY) {
          heroBg.style.transform = `translate3d(0, ${yPos}px, 0)`;
          lastY = yPos;
        }
      }
    }
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });

  // Initial trigger
  updateParallax();

  // -------------------------------------------------------------
  // 3. Simple Image Lightbox Modal for Gallery
  // -------------------------------------------------------------
  const galleryItems = document.querySelectorAll('.gallery-item img');

  if (galleryItems.length > 0) {
    // Create lightbox element dynamically
    const lightbox = document.createElement('div');
    lightbox.id = 'gallery-lightbox';
    lightbox.className = 'lightbox-overlay';
    lightbox.innerHTML = `
      <div class="lightbox-content">
        <button class="lightbox-close" aria-label="Close photo">&times;</button>
        <img class="lightbox-img" src="" alt="">
        <p class="lightbox-caption"></p>
      </div>
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const closeBtn = lightbox.querySelector('.lightbox-close');

    function openLightbox(src, alt, caption) {
      lightboxImg.src = src;
      lightboxImg.alt = alt;
      lightboxCaption.textContent = caption || '';
      lightbox.classList.add('is-open');
      document.body.style.overflow = 'hidden'; // prevent scrolling
    }

    function closeLightbox() {
      lightbox.classList.remove('is-open');
      document.body.style.overflow = '';
      setTimeout(() => {
        lightboxImg.src = '';
      }, 300);
    }

    galleryItems.forEach(img => {
      img.parentElement.style.cursor = 'pointer';
      img.parentElement.addEventListener('click', () => {
        const captionEl = img.parentElement.querySelector('.item-caption');
        const caption = captionEl ? captionEl.textContent : img.alt;
        openLightbox(img.src, img.alt, caption);
      });
    });

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('is-open')) {
        closeLightbox();
      }
    });
  }
});
