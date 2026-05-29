document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  if (header && toggle) {
    toggle.addEventListener("click", () => {
      header.classList.toggle("nav-open");
      const expanded = header.classList.contains("nav-open");
      toggle.setAttribute("aria-expanded", expanded);
    });
  }

  const form = document.getElementById("contact-form");
  const statusEl = document.getElementById("form-status");

  if (form && statusEl) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      statusEl.textContent = "Sending...";
      statusEl.className = "form-status";

      try {
        const formData = new FormData(form);
        const response = await fetch(form.action, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          form.reset();
          statusEl.textContent =
            "Thanks for reaching out — I'll get back to you within 1–2 business days.";
          statusEl.classList.add("success");
        } else {
          statusEl.textContent =
            "Something went wrong. Please email binarylogiqinfo@gmail.com directly.";
          statusEl.classList.add("error");
        }
      } catch {
        statusEl.textContent =
          "Network error. Please email binarylogiqinfo@gmail.com directly.";
        statusEl.classList.add("error");
      }
    });
  }
});
