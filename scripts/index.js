(() => {
    'use strict';

    const html = document.querySelector('html');
    const menuItems = document.querySelectorAll('.menu > p');
    const sections = [
        { id: 'home', el: document.querySelector('#home-section') },
        { id: 'about', el: document.querySelector('#about-section') },
        { id: 'experience', el: document.querySelector('#experience-section') },
        { id: 'academics', el: document.querySelector('#academics-section') },
        { id: 'skills', el: document.querySelector('#skills-section') },
        { id: 'projects', el: document.querySelector('#projects-section') },
        { id: 'contact', el: document.querySelector('#contact-section') },
    ];
    const headingMap = {
        home: 'home-section',
        about: 'about-section',
        experience: 'experience-section',
        academics: 'academics-section',
        skills: 'skills-section',
        projects: 'projects-section',
        contact: 'contact-section',
    };

    /* ── Navigation Highlight ── */
    function setActive(id) {
        menuItems.forEach(p => {
            p.classList.toggle('active', p.id === id);
        });
    }

    /* ── Scroll Spy ── */
    function onScroll() {
        const scrollY = window.scrollY || html.scrollTop;
        const offset = scrollY + 200;

        for (const s of sections) {
            if (!s.el) continue;
            const top = s.el.offsetTop;
            const bottom = top + s.el.offsetHeight;
            if (offset >= top && offset < bottom) {
                setActive(s.id);
                return;
            }
        }
    }

    /* ── Menu Click Scrolling ── */
    menuItems.forEach(p => {
        p.addEventListener('click', () => {
            const sectionId = headingMap[p.id];
            const target = document.getElementById(sectionId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            document.querySelector('.menu')?.classList.remove('open');
            document.querySelector('.hamburger')?.classList.remove('open');
            document.querySelector('.hamburger')?.setAttribute('aria-expanded', 'false');
        });
    });

    window.addEventListener('scroll', onScroll, { passive: true });

    /* ── Hamburger Menu ── */
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');

    if (hamburger && menu) {
        hamburger.addEventListener('click', () => {
            const isOpen = menu.classList.toggle('open');
            hamburger.classList.toggle('open');
            hamburger.setAttribute('aria-expanded', isOpen);
        });

        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
                menu.classList.remove('open');
                hamburger.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    }

    /* ── Scroll Reveal ── */
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    /* ── Typing Effect ── */
    const typingEl = document.querySelector('.typing-text');
    if (typingEl) {
        const phrases = [
            'Software Engineer',
            'React Native Developer',
            'Full Stack Developer',
            'Mobile & Web Engineer',
        ];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let currentPhrase = '';

        function type() {
            currentPhrase = phrases[phraseIndex];

            if (isDeleting) {
                typingEl.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingEl.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
            }

            let delay = 80;

            if (!isDeleting && charIndex === currentPhrase.length) {
                delay = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                delay = 500;
            }

            setTimeout(type, delay);
        }

        type();
    }

    /* ── Contact Form ── */
    const sendButton = document.querySelector('#send');
    if (sendButton) {
        sendButton.addEventListener('click', () => {
            const name = document.querySelector('#name');
            const subject = document.querySelector('#subject');
            const body = document.querySelector('#body');

            if (!name.value.trim() || !subject.value.trim() || !body.value.trim()) {
                alert('Please fill in all fields.');
                return;
            }

            const mailto = `mailto:choudharyashutosh7070@gmail.com?subject=${encodeURIComponent(subject.value)}&body=${encodeURIComponent(name.value + ':\n' + body.value)}`;
            window.open(mailto, '_blank');
        });
    }

    /* ── Social Links ── */
    const linkedin = document.querySelector('#linkedin');
    const github = document.querySelector('#github');

    if (linkedin) {
        linkedin.addEventListener('click', () => {
            window.open('https://www.linkedin.com/in/ashutosh-choudhary-73baa1189', '_blank', 'noopener');
        });
    }

    if (github) {
        github.addEventListener('click', () => {
            window.open('https://github.com/ChoudharyAshutosh', '_blank', 'noopener');
        });
    }

    /* ── Experience Calculator ── */
    function setExperience() {
        const rnElements = document.querySelectorAll('.react-native-experience');
        const totalElements = document.querySelectorAll('.total-experience');
        if (!rnElements.length && !totalElements.length) return;

        const today = new Date();
        const rnStart = new Date('2021-08-16');
        const diffSec = Math.floor((today - rnStart) / 1000);

        function formatDuration(seconds) {
            const years = Math.floor(seconds / 31536000);
            const months = Math.floor((seconds % 31536000) / 2592000);
            const parts = [];
            if (years > 0) parts.push(`${years} year${years > 1 ? 's' : ''}`);
            if (months > 0) parts.push(`${months} month${months > 1 ? 's' : ''}`);
            return parts.join(' ') || '0 months';
        }

        const rnStr = formatDuration(diffSec);
        const totalStr = formatDuration(diffSec + 10518984);

        rnElements.forEach(el => { el.textContent = rnStr; });
        totalElements.forEach(el => { el.textContent = totalStr; });
    }

    setExperience();

    /* ── Footer Year ── */
    const yearEl = document.querySelector('#year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    /* ── Init ── */
    onScroll();
})();
