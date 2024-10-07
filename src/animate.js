// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry);
//     if (entry.isIntersecting) {
//       entry.target.classList.add("show");
//     } else {
//       entry.target.classList.remove("show");
//     }
//   });
// });

// let hiddenElements = document.querySelectorAll(".hidden");

// hiddenElements.forEach((el) => observer.observe(el));

  const tween = KUTE.fromTo(
    "#blob1",
    { path: "#blob1" },
    { path: "#blob2" },
    { repeat: 999, duration: 3000, yoyo: true }
  );
  tween.start();