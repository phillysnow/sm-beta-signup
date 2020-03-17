import "./app.scss";

if (document.readyState !== "loading") {
  myInitCode();
} else {
  document.addEventListener("DOMContentLoaded", function() {
    myInitCode();
  });
}

function myInitCode() {
  let images = document.querySelector(".advantage-illustration");
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(({ isIntersecting, target }) => {
        target.classList.add("low-opacity");
        const {
          dataset: { id }
        } = target;
        isIntersecting;

        if (isIntersecting) {
          onIntersec(images[Number(id)], target);
        }
        //? onIntersec(images[Number(id)], target)
        //: suce(images[Number(id)], target);

        if (isIntersecting && target.dataset.id === "0") {
          images.classList.add("show", "step-1");
          images.classList.remove("step-2", "step-3");
        }
        if (isIntersecting && target.dataset.id === "1") {
          images.classList.add("show", "step-2");
          images.classList.remove("step-1", "step-3");
        }
        if (isIntersecting && target.dataset.id === "2") {
          images.classList.add("show", "step-3");
          images.classList.remove("step-1");
        }
      });
    },
    {
      threshold: [0.5],
      rootMargin: "-100px"
    }
  );
  document
    .querySelectorAll(".advantage-wrap")
    .forEach(el => observer.observe(el));

  function onIntersec(el, target) {
    target.classList.remove("low-opacity");
  }

  function onScroll(event) {
    let scrollY = window.scrollY;
    document
      .querySelector("#myexample")
      .style.setProperty("--y", `${scrollY / 45}%`);
  }
}
