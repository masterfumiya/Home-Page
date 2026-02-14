const header = document.querySelector('.site-header');
const navLinks = Array.from(document.querySelectorAll('.nav-link'));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const toggleHeaderState = () => {
  header.classList.toggle('is-scrolled', window.scrollY > 10);
};

const setActiveLink = (id) => {
  navLinks.forEach((link) => {
    const isCurrent = link.getAttribute('href') === `#${id}`;
    link.classList.toggle('is-active', isCurrent);
    if (isCurrent) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
};

toggleHeaderState();
window.addEventListener('scroll', toggleHeaderState, { passive: true });

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const id = link.getAttribute('href');
    const target = document.querySelector(id);

    if (!target) return;
    event.preventDefault();

    target.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
      block: 'start'
    });
  });
});

if (window.location.hash) {
  const initialId = window.location.hash.replace('#', '');
  if (sections.some((section) => section.id === initialId)) {
    setActiveLink(initialId);
  }
}

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      setActiveLink(entry.target.id);
    });
  },
  { rootMargin: '-35% 0px -55% 0px', threshold: 0.1 }
);

sections.forEach((section) => sectionObserver.observe(section));

const revealTargets = document.querySelectorAll('.reveal');

if (reduceMotion) {
  revealTargets.forEach((el) => el.classList.add('is-visible'));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
  );

  revealTargets.forEach((el) => revealObserver.observe(el));
}
