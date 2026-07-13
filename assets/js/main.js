document.addEventListener("DOMContentLoaded", () => {
  const iconPaths = {
    "arrow-right": '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
    "plus": '<path d="M12 5v14"/><path d="M5 12h14"/>',
    "check": '<path d="m20 6-11 11-5-5"/>',
    "send": '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    "mail": '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    "clock": '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    "map-pin": '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    "message-circle": '<path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 0 1-4-.9L3 21l2-5a8.5 8.5 0 1 1 16-4.5Z"/>',
    "circle-help": '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.8 2.8 0 0 1 5 1.8c0 2-2.5 2.2-2.5 4"/><path d="M12 18h.01"/>',
    "graduation-cap": '<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/><path d="M22 10v6"/>',
    "briefcase-business": '<path d="M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1"/><rect x="3" y="6" width="18" height="14" rx="2"/><path d="M3 12h18"/><path d="M12 12v2"/>',
    "briefcase": '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/>',
    "clipboard-check": '<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-5"/>',
    "clipboard-list": '<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 12h6"/><path d="M9 16h6"/>',
    "users-round": '<path d="M18 21a6 6 0 0 0-12 0"/><circle cx="12" cy="8" r="4"/><path d="M22 21a5 5 0 0 0-4-4.8"/><path d="M2 21a5 5 0 0 1 4-4.8"/>',
    "users": '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>',
    "shield-check": '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
    "target": '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    "sunrise": '<path d="M12 2v8"/><path d="m4.2 10.2 1.4 1.4"/><path d="m18.4 11.6 1.4-1.4"/><path d="M2 18h20"/><path d="M5 22h14"/><path d="M8 18a4 4 0 0 1 8 0"/>',
    "handshake": '<path d="m11 17 2 2a3 3 0 0 0 4.2 0l2.8-2.8a3 3 0 0 0 0-4.2l-4-4"/><path d="m13 7-1.5 1.5a3 3 0 0 1-4.2 0L6 7"/><path d="m2 12 4-4 5 5"/><path d="m22 12-4-4-5 5"/>',
    "panel-top": '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/>',
    "coins": '<circle cx="8" cy="8" r="5"/><path d="M18 10c2.2 0 4 1.1 4 2.5S20.2 15 18 15s-4-1.1-4-2.5S15.8 10 18 10Z"/><path d="M14 12.5v4c0 1.4 1.8 2.5 4 2.5s4-1.1 4-2.5v-4"/>',
    "calendar-days": '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/>',
    "book-open-check": '<path d="M12 7v14"/><path d="M3 5a7 7 0 0 1 9 2 7 7 0 0 1 9-2v14a7 7 0 0 0-9 2 7 7 0 0 0-9-2Z"/><path d="m16 12 1.5 1.5L21 10"/>',
    "phone-call": '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.7.7 2.5a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6.4 6.4l1.3-1.3a2 2 0 0 1 2.1-.5c.8.3 1.6.6 2.5.7a2 2 0 0 1 1.7 2Z"/><path d="M14 2a8 8 0 0 1 8 8"/><path d="M14 6a4 4 0 0 1 4 4"/>',
    "headphones": '<path d="M3 14v-2a9 9 0 0 1 18 0v2"/><path d="M21 14v3a2 2 0 0 1-2 2h-1v-7h1a2 2 0 0 1 2 2Z"/><path d="M3 14v3a2 2 0 0 0 2 2h1v-7H5a2 2 0 0 0-2 2Z"/>',
    "share-2": '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4"/><path d="m15.4 6.5-6.8 4"/>',
    "shopping-bag": '<path d="M6 8h12l1 13H5L6 8Z"/><path d="M9 8a3 3 0 0 1 6 0"/>',
    "wallet-cards": '<rect x="3" y="6" width="18" height="14" rx="2"/><path d="M3 10h18"/><path d="M7 15h4"/>',
    "stethoscope": '<path d="M6 2v6a4 4 0 0 0 8 0V2"/><path d="M4 2h4"/><path d="M12 2h4"/><path d="M10 14a5 5 0 0 0 10 0v-2"/><circle cx="20" cy="10" r="2"/>',
    "badge-plus": '<path d="M12 2 3 6v6c0 5 4 9 9 10 5-1 9-5 9-10V6Z"/><path d="M12 8v8"/><path d="M8 12h8"/>',
    "scale": '<path d="m16 16 3-8 3 8a3 3 0 0 1-6 0Z"/><path d="m2 16 3-8 3 8a3 3 0 0 1-6 0Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h18"/>',
    "landmark": '<path d="M3 22h18"/><path d="M6 18V9"/><path d="M10 18V9"/><path d="M14 18V9"/><path d="M18 18V9"/><path d="M12 2 3 7h18Z"/>',
    "heart-pulse": '<path d="M19 14c1.5-1.5 3-3.4 3-6a5 5 0 0 0-9-3 5 5 0 0 0-9 3c0 4 4.5 7.6 9 12 1.2-1.1 2.3-2.1 3.3-3.1"/><path d="M3 14h4l2-4 4 8 2-4h6"/>',
    "building-2": '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18"/><path d="M6 12H4a2 2 0 0 0-2 2v8"/><path d="M18 9h2a2 2 0 0 1 2 2v11"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>'
  };
  document.querySelectorAll("[data-lucide]").forEach((node) => {
    const name = node.getAttribute("data-lucide");
    const paths = iconPaths[name] || '<circle cx="12" cy="12" r="8"/><path d="M12 8v8"/><path d="M8 12h8"/>';
    node.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + paths + '</svg>';
    node.removeAttribute("data-lucide");
  });

  const toggle = document.querySelector("[data-nav-toggle]");
  const menu = document.querySelector("[data-nav-menu]");
  if (toggle && menu) {
    const closeMenu = () => {
      toggle.classList.remove("open");
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    };
    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("open");
      toggle.classList.toggle("open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";
    });
    menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
  }

  document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const isOpen = item.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });

  const params = new URLSearchParams(window.location.search);
  const service = params.get("service");
  const packageName = params.get("package");
  const serviceMap = {
    "hire-va": "va-hire",
    "va-hire": "va-hire",
    "va-apply": "va-apply",
    "apply-va": "va-apply",
    "51talk": "51talk",
    "web-design": "web-design",
    "general": "general"
  };
  const serviceSelect = document.querySelector('select[name="service"]');
  if (serviceSelect && service) {
    serviceSelect.value = serviceMap[service] || service;
  }
  if (packageName && document.querySelector('form[data-form="contact"]')) {
    const hidden = document.createElement("input");
    hidden.type = "hidden";
    hidden.name = "package";
    hidden.value = packageName;
    document.querySelector('form[data-form="contact"]').append(hidden);
  }

  document.querySelectorAll('form[data-form="contact"]').forEach((form) => {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const button = form.querySelector('button[type="submit"]');
      const original = button.innerHTML;
      button.disabled = true;
      button.textContent = "Sending...";
      const data = new FormData(form);
      const selectedService = data.get("service") || "general";
      data.append("_subject", "AID Virtual — New Inquiry: " + selectedService);
      data.append("_template", "table");
      data.append("_captcha", "false");
      try {
        const response = await fetch("https://formsubmit.co/ajax/contact@aidvirtual.net", {
          method: "POST",
          headers: { Accept: "application/json" },
          body: data
        });
        const json = await response.json();
        if (json.success === true || json.success === "true") {
          button.textContent = "Sent. We'll reply within 24 hours.";
          form.reset();
        } else {
          throw new Error("Submission failed");
        }
      } catch {
        alert("Message could not be sent automatically. Please email us directly at contact@aidvirtual.net — we'll reply within 24 hours.");
        button.disabled = false;
        button.innerHTML = original;
      }
    });
  });

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && "IntersectionObserver" in window) {
    document.documentElement.classList.add("js-reveal");
    const revealTargets = document.querySelectorAll(".card, .path-card, .steps article, .metric-panel > div, .faq-preview-grid article, .quote-card, .pricing-card, .panel");
    let observerFired = false;
    const revealObserver = new IntersectionObserver((entries) => {
      observerFired = true;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealTargets.forEach((el) => {
      const siblings = el.parentElement ? Array.from(el.parentElement.children) : [el];
      el.classList.add("reveal");
      el.style.transitionDelay = Math.min(siblings.indexOf(el), 5) * 70 + "ms";
      revealObserver.observe(el);
    });
    setTimeout(() => {
      if (!observerFired) {
        revealTargets.forEach((el) => el.classList.add("in-view"));
        revealObserver.disconnect();
      }
    }, 1500);
  }

  const applyForm = document.getElementById("apply-form");
  if (applyForm) {
    applyForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const error = document.getElementById("form-error");
      const success = document.getElementById("form-success");
      if (!applyForm.checkValidity()) {
        applyForm.reportValidity();
        if (error) {
          error.textContent = "Please fill in all required fields.";
          error.hidden = false;
        }
        return;
      }
      if (error) error.hidden = true;
      const button = document.getElementById("submit-btn");
      const submitText = document.getElementById("submit-text");
      const submitLoading = document.getElementById("submit-loading");
      button.disabled = true;
      if (submitText) submitText.hidden = true;
      if (submitLoading) submitLoading.hidden = false;
      const formData = new FormData(applyForm);
      const payload = Object.fromEntries(formData.entries());
      payload._subject = "51Talk Application — " + (payload.name || "New applicant");
      payload._template = "table";
      try {
        const response = await fetch("https://formsubmit.co/ajax/contact@aidvirtual.net", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload)
        });
        const json = await response.json();
        if (json.success === true || json.success === "true") {
          applyForm.hidden = true;
          if (success) success.hidden = false;
        } else {
          throw new Error("Submission failed");
        }
      } catch {
        if (error) {
          error.innerHTML = 'Something went wrong. Please <a href="contact.html">use our contact form</a> or email <strong>contact@aidvirtual.net</strong> with your name, number, and "51Talk Application" in the subject.';
          error.hidden = false;
        }
        button.disabled = false;
        if (submitText) submitText.hidden = false;
        if (submitLoading) submitLoading.hidden = true;
      }
    });
  }
});

