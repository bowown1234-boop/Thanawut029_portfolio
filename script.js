document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav a[href^='#']");
  const menuToggle = document.getElementById("menu-toggle");

  function setActiveByScroll() {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }

  // scroll
  window.addEventListener("scroll", setActiveByScroll);

  // click
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      // ปิด hamburger หลังคลิก (มือถือ)
      if (menuToggle) {
        menuToggle.checked = false;
      }
    });
  });

  // เรียกครั้งแรกตอนโหลดหน้า
  setActiveByScroll();
});