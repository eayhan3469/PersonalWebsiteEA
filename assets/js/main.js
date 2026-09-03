/* =====================================================================
   Site behaviour: header state, mobile nav, scroll reveal (staggered),
   scroll progress, scrollspy, back-to-top, theme toggle, footer year.
   ===================================================================== */

(function () {
  "use strict";

  const root = document.documentElement;
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ---- Footer year ---- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---- CV button: only show it if the PDF is actually present ---- */
  const cvBtn = document.getElementById("cvButton");
  if (cvBtn) {
    fetch(cvBtn.getAttribute("href"), { method: "HEAD" })
      .then((r) => {
        if (r.ok && (r.headers.get("content-type") || "").includes("pdf")) {
          cvBtn.hidden = false;
        }
      })
      .catch(() => {});
  }

  /* ---- Injected chrome: progress bar + back-to-top ---- */
  const progress = document.createElement("div");
  progress.className = "scroll-progress";
  progress.setAttribute("aria-hidden", "true");
  document.body.appendChild(progress);

  const toTop = document.createElement("button");
  toTop.type = "button";
  toTop.className = "to-top";
  toTop.setAttribute("aria-label", "Back to top");
  toTop.innerHTML =
    '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" d="M6 14l6-6 6 6"/></svg>';
  toTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  });
  document.body.appendChild(toTop);

  /* ---- Header state + progress + back-to-top visibility ---- */
  const header = document.getElementById("siteHeader");
  const onScroll = () => {
    const y = window.scrollY;
    if (header) header.classList.toggle("is-scrolled", y > 8);

    const docH =
      document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${docH > 0 ? y / docH : 0})`;
    toTop.classList.toggle("is-visible", y > window.innerHeight * 0.8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });

  /* ---- Mobile nav ---- */
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("primaryNav");

  const closeNav = () => {
    if (!nav || !navToggle) return;
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  };

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
    nav.addEventListener("click", (e) => {
      if (e.target.closest("a")) closeNav();
    });
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeNav();
    });
  }

  /* ---- Scrollspy: highlight the nav link for the section in view ---- */
  const navLinks = [...document.querySelectorAll('#primaryNav a[href^="#"]')];
  const spyTargets = navLinks
    .map((a) => document.getElementById(a.getAttribute("href").slice(1)))
    .filter(Boolean);

  if ("IntersectionObserver" in window && spyTargets.length) {
    const setActive = (id) => {
      navLinks.forEach((a) =>
        a.classList.toggle("is-active", a.getAttribute("href") === "#" + id)
      );
    };
    const spy = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    spyTargets.forEach((s) => spy.observe(s));
  }

  /* ---- Scroll reveal (staggered within each row/grid) ---- */
  if (!("IntersectionObserver" in window)) {
    window.observeReveals = () => {
      document
        .querySelectorAll(".reveal")
        .forEach((el) => el.classList.add("is-visible"));
    };
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        const byParent = new Map();
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const p = entry.target.parentElement;
          const arr = byParent.get(p) || [];
          arr.push(entry.target);
          byParent.set(p, arr);
        });
        byParent.forEach((els) => {
          els.forEach((el, i) => {
            if (!reduceMotion && els.length > 1) {
              el.style.transitionDelay = Math.min(i * 60, 300) + "ms";
            }
            el.classList.add("is-visible");
            io.unobserve(el);
          });
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    window.observeReveals = () => {
      document
        .querySelectorAll(".reveal:not(.is-visible)")
        .forEach((el) => io.observe(el));
    };
  }
  window.observeReveals();

  /* ---- Contact form (progressive enhancement) ----
     Disabled until a Web3Forms access key is set. Get a free key at
     https://web3forms.com (no account needed — it's tied to your email),
     paste it below, and the form appears in place of the mailto button.
     With no key the mailto button stays as the only contact path. */
  const WEB3FORMS_KEY = "77059610-1534-4f75-b0a8-086c443370bb";

  const contactForm = document.getElementById("contactForm");
  const contactEmailBtn = document.getElementById("contactEmailBtn");
  if (contactForm && WEB3FORMS_KEY) {
    contactForm.hidden = false;
    if (contactEmailBtn) contactEmailBtn.classList.add("is-secondary");

    const status = contactForm.querySelector(".cf-status");
    const submitBtn = contactForm.querySelector('button[type="submit"]');

    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const t = (window.I18N_STRINGS && window.I18N_STRINGS()) || {};

      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      submitBtn.disabled = true;
      status.textContent = t["contact.form.sending"] || "Sending…";
      status.classList.remove("is-error", "is-ok");

      const fd = new FormData(contactForm);
      fd.append("access_key", WEB3FORMS_KEY);
      fd.append("subject", "egemenayhan.net — new message");
      fd.append("from_name", "egemenayhan.net");

      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { Accept: "application/json" },
          body: fd,
        });
        const data = await res.json().catch(() => ({}));
        if (res.ok && data.success) {
          contactForm.reset();
          status.textContent = t["contact.form.ok"] || "Thanks — I'll be in touch.";
          status.classList.add("is-ok");
        } else {
          throw new Error(data.message || "submit failed");
        }
      } catch (err) {
        status.textContent =
          t["contact.form.error"] || "Something went wrong. Please email me directly.";
        status.classList.add("is-error");
      } finally {
        submitBtn.disabled = false;
      }
    });
  }

  /* ---- Theme toggle ---- */
  const THEME_KEY = "ea-theme";
  const themeToggle = document.getElementById("themeToggle");

  const storedTheme = localStorage.getItem(THEME_KEY);
  if (storedTheme === "light" || storedTheme === "dark") {
    root.setAttribute("data-theme", storedTheme);
  } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    root.setAttribute("data-theme", "light");
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const next =
        root.getAttribute("data-theme") === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      localStorage.setItem(THEME_KEY, next);
    });
  }
})();
