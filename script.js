document.querySelectorAll(".fade-in").forEach((el, i) => {
  setTimeout(() => el.classList.add("show"), i * 800);
});

document.getElementById("year").textContent=new Date().getFullYear();

