(function () {
  const menuBtn = document.getElementById("menu-btn");
  const mobileNav = document.getElementById("mobile-nav");
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => {
      mobileNav.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", String(mobileNav.classList.contains("is-open")));
    });
    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => mobileNav.classList.remove("is-open"));
    });
  }

  const readMoreBtn = document.getElementById("read-more-btn");
  const readMoreText = document.getElementById("read-more-text");
  if (readMoreBtn && readMoreText) {
    readMoreBtn.addEventListener("click", () => {
      readMoreText.classList.toggle("read-more-clamped");
      const expanded = !readMoreText.classList.contains("read-more-clamped");
      readMoreBtn.setAttribute("aria-expanded", String(expanded));
      readMoreBtn.querySelector(".read-more-label").textContent = expanded
        ? "Show less"
        : "Read full overview";
      readMoreBtn.querySelector(".read-more-icon").classList.toggle("rotate-180", expanded);
    });
  }

  document.querySelectorAll("[data-accordion-trigger]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const index = btn.getAttribute("data-accordion-trigger");
      const panel = document.querySelector(`[data-accordion-panel="${index}"]`);
      const isOpen = btn.getAttribute("aria-expanded") === "true";

      document.querySelectorAll("[data-accordion-trigger]").forEach((b) => {
        b.setAttribute("aria-expanded", "false");
        b.querySelector(".accordion-chevron")?.classList.remove("rotate-180", "border-brand-200", "bg-brand-50");
        const p = document.querySelector(`[data-accordion-panel="${b.getAttribute("data-accordion-trigger")}"]`);
        if (p) p.classList.remove("is-open");
      });

      if (!isOpen && panel) {
        btn.setAttribute("aria-expanded", "true");
        panel.classList.add("is-open");
        btn.querySelector(".accordion-chevron")?.classList.add("rotate-180", "border-brand-200", "bg-brand-50");
      }
    });
  });

  const profileForm = document.getElementById("profile-form");
  if (profileForm) {
    profileForm.addEventListener("submit", (e) => {
      e.preventDefault();
      window.location.href = "/thank-you";
    });
  }

  // Re-scroll when clicking the same hash (browser otherwise ignores it)
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || href.length < 2) return;
      const el = document.getElementById(href.slice(1));
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      if (window.location.hash !== href) {
        history.pushState(null, "", href);
      }
    });
  });

  // Apply content-driven height from the CDD embed (setIFrameHeight).
  // Keep a small buffer; form-side padding should cover button box-shadow.
  const formDomain = "https://staging.chatfromforms.com";
  const FORM_HEIGHT_BUFFER = 5;
  window.addEventListener("message", (e) => {
    if (e.origin !== formDomain) return;
    const payload = e.data;
    if (!payload || payload.type !== "setIFrameHeight") return;
    const height = payload.data && payload.data.height;
    if (typeof height !== "number" || height <= 0) return;
    const iframe =
      document.getElementById("QBWpFormIFrame_1") ||
      document.querySelector("[data-cddform] iframe");
    if (!iframe) return;
    iframe.style.height = `${height + FORM_HEIGHT_BUFFER}px`;
    iframe.style.minHeight = "0";
  });
})();
