
document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu-btn");
  const links = document.querySelector(".nav-links");
  if (menu && links) {
    menu.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      menu.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", () => links?.classList.remove("open"));
  });

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  const submitted = new URLSearchParams(window.location.search).get("submitted");
  const status = document.querySelector("[data-form-status]");
  if (submitted === "1" && status) status.textContent = "Thanks — your message has been sent to HiScript. We’ll get back to you soon.";

  const form = document.querySelector("[data-contact-form]");
  if (form) {
    form.addEventListener("submit", () => {
      const button = form.querySelector("button[type=submit]");
      if (button) {
        button.disabled = true;
        button.textContent = "Sending…";
      }
    });
  }
});
