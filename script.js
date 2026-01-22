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
  
  window.addEventListener("scroll", setActiveByScroll);

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      if (menuToggle) {
        menuToggle.checked = false;
      }
    });
  });

  setActiveByScroll();
});

   const jobs = [
    "Game Developer",
    "Web Developer",
    "Unity Developer",
    "Frontend Developer"
  ];

  const jobText = document.getElementById("job-text");
  let index = 0;
  setInterval(() => {
    jobText.classList.remove("animate");
    void jobText.offsetWidth;
    index = (index + 1) % jobs.length;
    jobText.textContent = jobs[index];
    jobText.classList.add("animate");
  }, 2500);

const track = document.querySelector(".work-track");

let isDown = false;
let startX;
let scrollLeft;

track.addEventListener("mousedown", (e) => {
  isDown = true;
  track.classList.add("dragging");
  startX = e.pageX - track.offsetLeft;
  scrollLeft = track.scrollLeft;
});

track.addEventListener("mouseleave", () => {
  isDown = false;
});

track.addEventListener("mouseup", () => {
  isDown = false;
});

track.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - track.offsetLeft;
  const walk = (x - startX) * 1.8;
  track.scrollLeft = scrollLeft - walk;
});

let scrollAmount = 0;
let speed = 1;

function autoScroll() {
  if (!isDown) {
    scrollAmount += speed;
    track.scrollLeft = scrollAmount;

    if (scrollAmount >= track.scrollWidth - track.clientWidth) {
      scrollAmount = 0;
    }
  }
  requestAnimationFrame(autoScroll);
}

autoScroll();

track.addEventListener("mouseenter", () => speed = 0);
track.addEventListener("mouseleave", () => speed = 1);



