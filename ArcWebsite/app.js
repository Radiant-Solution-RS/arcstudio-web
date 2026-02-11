gsap.registerPlugin(ScrollTrigger);

// Fade in effect for the whole section
gsap.from(".wwd-content", {
    scrollTrigger: {
        trigger: ".what-we-do",
        start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out"
});

// Subtle parallax for the background script text
gsap.to(".bg-script-text", {
    scrollTrigger: {
        trigger: ".what-we-do",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
    },
    x: -100
});
gsap.registerPlugin(ScrollTrigger);

// Reveal Animation for both sections
gsap.utils.toArray('.info-section').forEach(section => {
    gsap.from(section.querySelectorAll('h2, p, .decorative-line'), {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out"
    });
});


const items = document.querySelectorAll('.grid-item');

items.forEach(item => {
    item.addEventListener('mouseenter', () => {
        // Baaki items ko thoda dhundla karne ke liye (Optional)
        items.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.style.opacity = "0.7";
            }
        });
    });

    item.addEventListener('mouseleave', () => {
        items.forEach(otherItem => {
            otherItem.style.opacity = "1";
        });
    });
});

document.querySelector('.contact-form-box').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple "Send" animation
    const btn = document.querySelector('.btn-send');
    btn.innerHTML = "SENDING...";
    
    setTimeout(() => {
        btn.innerHTML = "SENT SUCCESSFULLY ✓";
        btn.style.background = "#27ae60";
        this.reset();
    }, 2000);
});

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');

    slides.forEach(slide => {
        slide.addEventListener('click', () => {
            const projectLink = slide.querySelector('.view-btn').getAttribute('href');
            window.location.href = projectLink;
        });
    });
});

// Header color change on scroll for white pages
window.addEventListener('scroll', () => {
    const header = document.getElementById('mainHeader');
    if (window.scrollY > 50) {
        header.classList.add('bg-white', 'shadow-sm');
        header.classList.remove('text-white');
        header.style.color = '#000';
    } else {
        header.classList.remove('bg-white', 'shadow-sm');
        header.classList.add('text-white');
        header.style.color = '#fff';
    }
});



document.querySelectorAll('.group video').forEach(video => {
    video.addEventListener('mouseenter', () => {
        video.play();
    });
    video.addEventListener('mouseleave', () => {
        // Sirf un videos ko pause karein jo auto-loop nahi hain
        if(!video.hasAttribute('autoplay')) {
            video.pause();
        }
    });
});


    function openFullImage(src) {
        const modal = document.getElementById('fullScreenModal');
        const modalImg = document.getElementById('modalImage');
        modal.classList.remove('hidden');
        modal.classList.add('flex'); // Show the modal
        modalImg.src = src;
        document.body.style.overflow = 'hidden'; // Stop scrolling when open
    }

    function closeFullImage() {
        const modal = document.getElementById('fullScreenModal');
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }



    document.getElementById('loadMoreBtn').addEventListener('click', function() {
        // Tamam hidden projects ko select karein
        const hiddenProjects = document.querySelectorAll('.hidden-project');
        
        hiddenProjects.forEach(project => {
            project.classList.remove('hidden'); // 'hidden' class khatam karein
            project.classList.add('animate-fade-in'); // Optional: halka sa animation
        });

        // Button ko chupane ke liye (kyunke ab mazeed projects nahi hain)
        this.style.display = 'none';
    });