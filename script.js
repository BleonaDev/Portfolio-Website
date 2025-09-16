document.querySelectorAll(".fade-in").forEach((el, i) => {
  setTimeout(() => el.classList.add("show"), i * 800);
});

