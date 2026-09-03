/* =====================================================================
   Data-driven sections: Work, Prototypes, Experience, Education.
   Edit the CONTENT object below — keep `en` and `tr` in sync.
   Rendered on load and re-rendered on the `langchange` event.

   Media:
   - Work cards        -> assets/video/work/<video>.mp4  + assets/img/work/<video>.jpg
   - Prototype tiles   -> assets/video/prototypes/<slug>.mp4 + assets/img/prototypes/<slug>.jpg
   Videos are short, silent, looping web previews (see _media-source/ for originals).
   ===================================================================== */

/* Prototype tiles. `slug` maps to the media files. `group` drives the filter
   bar — one of: hypercasual | hybrid | casual. */
const PROTO_GROUPS = ["hypercasual", "hybrid", "casual"];
const PROTOTYPES = [
  { slug: "dirty-zone",       name: "Dirty Zone",      group: "hypercasual" },
  { slug: "mermaid-fame",     name: "Mermaid Fame",    group: "hypercasual" },
  { slug: "color-war",        name: "Color War",       group: "hypercasual" },
  { slug: "ragdoll-pinpon",   name: "Ragdoll Pinpon",  group: "hypercasual" },
  { slug: "crypto-collect-3d", name: "CryptoCollect 3D", group: "hypercasual" },
  { slug: "sew-run",          name: "Sew Run",         group: "hypercasual" },
  { slug: "tilt-color",       name: "Tilt Color",      group: "hybrid" },
  { slug: "factory-2048",     name: "2048 Factory",    group: "hybrid" },
  { slug: "fruit-drop-3d",    name: "FruitDrop 3D",    group: "hybrid" },
  { slug: "draw-delivery",    name: "Draw Delivery",   group: "hybrid" },
  { slug: "plug-it-in",       name: "Plug It In",      group: "hybrid" },
  { slug: "gemfit",           name: "GemFit",          group: "casual" },
  { slug: "bloom-pick",       name: "BloomPick",       group: "casual" },
  { slug: "go4empire",        name: "Go4Empire",       group: "casual" },
  { slug: "crossfit",         name: "CrossFit",        group: "casual" },
  { slug: "jelly-boom",       name: "Jelly Boom",      group: "casual" },
  { slug: "honey-fill",       name: "Honey Fill",      group: "casual" },
  { slug: "word-knit",        name: "Word Knit",       group: "casual" },
  { slug: "terran",           name: "Terran",          group: "casual" },
  { slug: "callbreak",        name: "CallBreak",       group: "casual" },
];

/* Short client / colleague references. Leave the array empty to hide the
   section entirely. `quote` and `title` may be a plain string or a
   { en, tr } object; `name` is never translated. */
const TESTIMONIALS = [
  // {
  //   quote: { en: "…", tr: "…" },
  //   name: "Full Name",
  //   title: { en: "Role, Studio", tr: "Rol, Stüdyo" },
  // },
];

const CONTENT = {
  en: {
    work: [
      {
        name: "KETZ: Galactic Overlords",
        role: "Gameplay Programmer · KEEP Games",
        desc: "Sci-fi roguelite horde-survival with deep gear and build crafting. Gameplay features and systems as part of the core team.",
        tags: ["Unity", "C#", "Roguelite", "Systems"],
        video: "ketz",
        links: [
          { label: "Steam", url: "https://store.steampowered.com/app/2542140/Ketz_Galactic_Overlords/" },
        ],
      },
      {
        name: "Feudal Friends",
        role: "Gameplay Programmer · KEEP Games",
        desc: "Online multiplayer party game. Joined mid-production to stabilise the build and ship new gameplay features.",
        tags: ["Unity", "Multiplayer", "Mirror"],
        video: "feudal-friends",
        links: [
          { label: "Steam", url: "https://store.steampowered.com/app/2317820/Feudal_Friends/" },
        ],
      },
      {
        name: "Topac Battle",
        role: "KEEP Games",
        desc: "Cozy idle game — buy Topac Balls, hatch and level up monsters, and sell them up the rarity ladder. Built and iterated end to end.",
        tags: ["Unity", "C#", "Idle"],
        video: "topac-battle",
        links: [
          { label: "Steam", url: "https://store.steampowered.com/app/2839420/Topac_Battle/" },
        ],
      },
      {
        name: "Free Castle: Survival Store",
        role: "Core Mechanics · Skalatoon Entertainment",
        desc: "First-person store simulator set in a post-apocalyptic town — loot, trade, clean up, hire staff and defend against hordes. Built core mechanics from inception through production.",
        tags: ["Unity", "C#", "Simulation"],
        video: "freecastle",
        links: [
          { label: "Steam", url: "https://store.steampowered.com/app/3450410/Free_Castle_Survival_Store/" },
        ],
      },
      {
        name: "PixelBlock",
        role: "Solo project",
        desc: "Block puzzle with a twist — every line you clear chips away at a giant block boss in the centre. Designed, built and shipped solo to Google Play.",
        tags: ["Unity", "C#", "Puzzle", "Mobile"],
        video: "pixelblock",
        links: [
          { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.EgemenAyhan.PixelBlock" },
        ],
      },
    ],

    experience: [
      {
        period: "Sep 2024 – Nov 2025",
        role: "Game Developer",
        company: "Skalatoon Entertainment",
        summary:
          "Core mechanics for Free Castle: Survival Store from inception to production; a 3D interactive comic book project.",
      },
      {
        period: "Aug 2023 – Sep 2024",
        role: "Game Developer",
        company: "KEEP Games",
        summary:
          "Gameplay features and systems for KETZ: Galactic Overlords and Feudal Friends; built Topac Battle end to end.",
      },
      {
        period: "Apr 2023 – Aug 2023",
        role: "XR Developer",
        company: "SANLAB",
        summary: "AR/VR simulation software focused on electric vehicles.",
      },
      {
        period: "Apr 2022 – Oct 2022",
        role: "Game Developer",
        company: "Electric Manta",
        summary:
          "Hybrid-casual puzzle games — core loop iteration and monetization-friendly mechanics.",
      },
      {
        period: "Jul 2021 – Apr 2022",
        role: "Game Developer",
        company: "Roof Stacks",
        summary:
          "Hypercasual prototyping and validation with rapid iteration workflows.",
      },
      {
        period: "Jun 2019 – Jul 2021",
        role: "Game Developer",
        company: "Rasyonet Bilgisayar",
        summary:
          "Large-scale multiplayer mobile strategy title; multiplayer puzzle games — stability and netcode reliability.",
      },
    ],

    education: [
      {
        period: "2013 – 2020",
        title: "B.Sc. Computer Science",
        org: "Pamukkale University",
      },
      {
        period: "2016 – 2017",
        title: "Computer Science — Erasmus exchange",
        org: "Rezekne Academy of Technologies (RTA), Latvia",
      },
      {
        period: "2008 – 2012",
        title: "High School",
        org: "İstanbul Ticaret Odası Anadolu Teknik Lisesi",
      },
    ],
  },

  tr: {
    work: [
      {
        name: "KETZ: Galactic Overlords",
        role: "Gameplay Programcısı · KEEP Games",
        desc: "Bilim kurgu temalı roguelite horde-survival; derin ekipman ve build kurgusu. Çekirdek ekipte gameplay özellikleri ve sistemleri.",
        tags: ["Unity", "C#", "Roguelite", "Sistemler"],
        video: "ketz",
        links: [
          { label: "Steam", url: "https://store.steampowered.com/app/2542140/Ketz_Galactic_Overlords/" },
        ],
      },
      {
        name: "Feudal Friends",
        role: "Gameplay Programcısı · KEEP Games",
        desc: "Online çok oyunculu parti oyunu. Üretimin ortasında dahil olarak build'i stabilize etti ve yeni gameplay özellikleri yayınladı.",
        tags: ["Unity", "Multiplayer", "Mirror"],
        video: "feudal-friends",
        links: [
          { label: "Steam", url: "https://store.steampowered.com/app/2317820/Feudal_Friends/" },
        ],
      },
      {
        name: "Topac Battle",
        role: "KEEP Games",
        desc: "Sakin bir idle oyun — Topac topları al, canavarları çıkar ve seviye atlat, nadirlik basamaklarında sat. Baştan sona geliştirildi.",
        tags: ["Unity", "C#", "Idle"],
        video: "topac-battle",
        links: [
          { label: "Steam", url: "https://store.steampowered.com/app/2839420/Topac_Battle/" },
        ],
      },
      {
        name: "Free Castle: Survival Store",
        role: "Temel Mekanikler · Skalatoon Entertainment",
        desc: "Kıyamet sonrası bir kasabada geçen birinci şahıs dükkân simülatörü — yağmala, takas et, temizle, personel tut ve akınlara karşı savun. Temel mekanikleri sıfırdan üretime kadar geliştirdi.",
        tags: ["Unity", "C#", "Simülasyon"],
        video: "freecastle",
        links: [
          { label: "Steam", url: "https://store.steampowered.com/app/3450410/Free_Castle_Survival_Store/" },
        ],
      },
      {
        name: "PixelBlock",
        role: "Bireysel proje",
        desc: "Farklı bir blok bulmaca — patlattığın her satır ortadaki dev blok figürünü parçalıyor. Tek başına tasarlandı, geliştirildi ve Google Play'de yayınlandı.",
        tags: ["Unity", "C#", "Bulmaca", "Mobil"],
        video: "pixelblock",
        links: [
          { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.EgemenAyhan.PixelBlock" },
        ],
      },
    ],

    experience: [
      {
        period: "Eyl 2024 – Kas 2025",
        role: "Oyun Geliştirici",
        company: "Skalatoon Entertainment",
        summary:
          "Free Castle: Survival Store'un temel mekanikleri, sıfırdan üretime; 3D interaktif çizgi roman projesi.",
      },
      {
        period: "Ağu 2023 – Eyl 2024",
        role: "Oyun Geliştirici",
        company: "KEEP Games",
        summary:
          "KETZ: Galactic Overlords ve Feudal Friends için gameplay özellikleri ve sistemleri; Topac Battle'ı baştan sona geliştirdi.",
      },
      {
        period: "Nis 2023 – Ağu 2023",
        role: "XR Geliştirici",
        company: "SANLAB",
        summary: "Elektrikli araçlara odaklı AR/VR simülasyon yazılımı.",
      },
      {
        period: "Nis 2022 – Eki 2022",
        role: "Oyun Geliştirici",
        company: "Electric Manta",
        summary:
          "Hybrid-casual bulmaca oyunları — core loop iterasyonu ve gelir dostu mekanikler.",
      },
      {
        period: "Tem 2021 – Nis 2022",
        role: "Oyun Geliştirici",
        company: "Roof Stacks",
        summary:
          "Hızlı iterasyon akışlarıyla hypercasual prototipleme ve doğrulama.",
      },
      {
        period: "Haz 2019 – Tem 2021",
        role: "Oyun Geliştirici",
        company: "Rasyonet Bilgisayar",
        summary:
          "Büyük ölçekli çok oyunculu mobil strateji oyunu; çok oyunculu bulmaca oyunları — kararlılık ve netcode güvenilirliği.",
      },
    ],

    education: [
      {
        period: "2013 – 2020",
        title: "Bilgisayar Bilimleri Lisans",
        org: "Pamukkale Üniversitesi",
      },
      {
        period: "2016 – 2017",
        title: "Bilgisayar Bilimleri — Erasmus değişimi",
        org: "Rezekne Academy of Technologies (RTA), Letonya",
      },
      {
        period: "2008 – 2012",
        title: "Lise",
        org: "İstanbul Ticaret Odası Anadolu Teknik Lisesi",
      },
    ],
  },
};

/* ---------- helpers ---------- */
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

/* string | { en, tr } -> string for the active language */
function pickLang(value, lang) {
  if (value && typeof value === "object") return value[lang] || value.en;
  return value;
}

/* store label -> short platform badge text */
function platformLabel(links) {
  if (!links || !links.length) return null;
  const l = String(links[0].label).toLowerCase();
  if (l.includes("steam")) return "Steam";
  if (l.includes("play")) return "Google Play";
  if (l.includes("app store") || l.includes("ios")) return "App Store";
  if (l.includes("itch")) return "itch.io";
  return links[0].label;
}

/* Media box: a poster <img> that plays a muted looping <video> on hover
   (pointer / keyboard focus), or on tap for touch devices. The <video> is
   created on first hover and reused; we keep at most MAX_LIVE_VIDEOS alive
   and recycle the least-recently-used one. Runs regardless of
   prefers-reduced-motion — hover playback is an explicit user action, and
   the clip is muted; reduced-motion still disables page animation via CSS. */
const MAX_LIVE_VIDEOS = 8;
const liveVideos = new Set(); // boxes that currently own a <video> element

function mediaBox(className, posterUrl, videoUrl, label) {
  const box = el("div", className);
  box._poster = posterUrl;
  box._videoUrl = videoUrl || null;

  const img = el("img");
  img.src = posterUrl;
  img.alt = label || "";
  img.loading = "lazy";
  box.append(img);

  if (videoUrl) {
    box.classList.add("has-video");
    box.addEventListener("pointerenter", () => playPreview(box));
    box.addEventListener("pointerleave", () => pausePreview(box));
  }
  return box;
}

/* ---------- Lightbox ---------- */
let lb = null;
let lbPrevFocus = null;

function buildLightbox() {
  lb = el("div", "lightbox");
  lb.setAttribute("role", "dialog");
  lb.setAttribute("aria-modal", "true");
  lb.setAttribute("aria-labelledby", "lightboxTitle");
  lb.hidden = true;
  lb.innerHTML =
    '<div class="lightbox-backdrop" data-close></div>' +
    '<div class="lightbox-panel">' +
    '<button class="lightbox-close" type="button" data-close aria-label="Close">' +
    '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">' +
    '<path fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" d="M6 6l12 12M18 6L6 18"/></svg>' +
    "</button>" +
    '<div class="lightbox-media"></div>' +
    '<div class="lightbox-body">' +
    '<h3 class="lightbox-title" id="lightboxTitle"></h3>' +
    '<p class="lightbox-role"></p>' +
    '<p class="lightbox-desc"></p>' +
    '<ul class="lightbox-tags"></ul>' +
    '<div class="lightbox-links"></div>' +
    "</div></div>";
  document.body.appendChild(lb);

  lb.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]")) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "Tab") {
      const f = lb.querySelectorAll("a[href], button");
      if (!f.length) return;
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
}

function openLightbox(item) {
  if (!lb) buildLightbox();
  lbPrevFocus = document.activeElement;

  const media = lb.querySelector(".lightbox-media");
  media.innerHTML = "";
  media.classList.toggle("is-portrait", !!item.portrait);
  if (item.videoUrl) {
    const v = el("video");
    v.src = item.videoUrl;
    if (item.posterUrl) v.poster = item.posterUrl;
    v.muted = true;
    v.loop = true;
    v.autoplay = true;
    v.controls = true;
    v.playsInline = true;
    media.append(v);
    v.play().catch(() => {});
  } else if (item.posterUrl) {
    const img = el("img");
    img.src = item.posterUrl;
    img.alt = item.title;
    media.append(img);
  }

  lb.querySelector(".lightbox-title").textContent = item.title;
  const roleEl = lb.querySelector(".lightbox-role");
  roleEl.textContent = item.role || "";
  roleEl.hidden = !item.role;
  const descEl = lb.querySelector(".lightbox-desc");
  descEl.textContent = item.desc || "";
  descEl.hidden = !item.desc;

  const tags = lb.querySelector(".lightbox-tags");
  tags.innerHTML = "";
  (item.tags || []).forEach((t) => tags.append(el("li", null, t)));

  const links = lb.querySelector(".lightbox-links");
  links.innerHTML = "";
  (item.links || []).forEach((l) => {
    const a = el("a", null, l.label + " ↗");
    a.href = l.url;
    a.target = "_blank";
    a.rel = "noopener";
    links.append(a);
  });

  lb.hidden = false;
  document.documentElement.style.overflow = "hidden";
  lb.querySelector(".lightbox-close").focus();
}

function closeLightbox() {
  if (!lb || lb.hidden) return;
  const v = lb.querySelector("video");
  if (v) {
    v.pause();
    v.removeAttribute("src");
    v.load();
  }
  lb.hidden = true;
  document.documentElement.style.overflow = "";
  if (lbPrevFocus && lbPrevFocus.focus) lbPrevFocus.focus();
}

function ensureVideo(box) {
  if (box._video) return box._video;

  if (liveVideos.size >= MAX_LIVE_VIDEOS) {
    const victim =
      [...liveVideos].find((b) => b !== box && (!b._video || b._video.paused)) ||
      [...liveVideos][0];
    if (victim) destroyVideo(victim);
  }

  const v = el("video");
  v.muted = true;
  v.loop = true;
  v.playsInline = true;
  v.preload = "auto";
  v.setAttribute("muted", "");
  v.setAttribute("loop", "");
  v.setAttribute("playsinline", "");
  v.poster = box._poster;
  v.src = box._videoUrl;
  v.addEventListener("playing", () => box.classList.add("is-playing"));
  v.addEventListener("pause", () => box.classList.remove("is-playing"));
  box.append(v);
  box._video = v;
  liveVideos.add(box);
  return v;
}

function playPreview(box) {
  if (!box._videoUrl) return;
  const v = ensureVideo(box);
  const start = () => {
    const p = v.play();
    if (p && p.catch) p.catch(() => {});
  };
  start();
  // Freshly-inserted <video> sometimes stalls at readyState 0; nudge once.
  clearTimeout(box._kickT);
  box._kickT = setTimeout(() => {
    if (box._video === v && !v.paused && v.readyState < 2) {
      v.load();
      start();
    }
  }, 350);
}

function pausePreview(box) {
  clearTimeout(box._kickT);
  const v = box._video;
  if (!v) return;
  v.pause();
  try {
    v.currentTime = 0;
  } catch (e) {}
  box.classList.remove("is-playing");
}

function destroyVideo(box) {
  clearTimeout(box._kickT);
  const v = box._video;
  if (!v) return;
  v.pause();
  v.removeAttribute("src");
  v.load();
  v.remove();
  box._video = null;
  box.classList.remove("is-playing");
  liveVideos.delete(box);
}

function setupVideoAutoplay() {
  /* hover-driven now — nothing to wire up on load */
}

/* ---------- Work ---------- */
function renderWork(items) {
  const grid = document.getElementById("workGrid");
  if (!grid) return;
  grid.innerHTML = "";

  items.forEach((proj) => {
    const card = el("article", "work-card reveal");

    const poster = proj.video
      ? "assets/img/work/" + proj.video + ".jpg"
      : null;
    const videoUrl = proj.video
      ? "assets/video/work/" + proj.video + ".mp4"
      : null;

    let thumb;
    if (poster) {
      thumb = mediaBox("work-thumb work-thumb--media", poster, videoUrl, proj.name);
    } else {
      thumb = el("div", "work-thumb");
      thumb.setAttribute("data-placeholder", proj.name);
    }
    const plat = platformLabel(proj.links);
    if (plat) thumb.append(el("span", "work-platform", plat));
    card.append(thumb);

    const body = el("div", "work-body");
    body.append(el("h3", "work-title", proj.name));
    if (proj.role) body.append(el("p", "work-role", proj.role));
    body.append(el("p", "work-desc", proj.desc));

    if (proj.tags && proj.tags.length) {
      const tags = el("ul", "work-tags");
      proj.tags.forEach((t) => tags.append(el("li", null, t)));
      body.append(tags);
    }

    if (proj.links && proj.links.length) {
      const links = el("div", "work-links");
      proj.links.forEach((l) => {
        const a = el("a", null, l.label);
        a.href = l.url;
        a.target = "_blank";
        a.rel = "noopener";
        links.append(a);
      });
      body.append(links);
    }

    card.append(body);

    if (videoUrl || poster) {
      card.classList.add("is-clickable");
      card.setAttribute("role", "button");
      card.tabIndex = 0;
      const open = (e) => {
        if (e.target.closest("a")) return;
        openLightbox({
          title: proj.name,
          role: proj.role,
          desc: proj.desc,
          tags: proj.tags,
          links: proj.links,
          videoUrl,
          posterUrl: poster,
        });
      };
      card.addEventListener("click", open);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open(e);
        }
      });
    }

    grid.append(card);
  });
}

/* ---------- Prototypes ---------- */
function renderPrototypes() {
  const grid = document.getElementById("prototypeGrid");
  if (!grid) return;
  grid.innerHTML = "";

  const dict = (window.I18N_STRINGS && window.I18N_STRINGS()) || {};
  const usedGroups = PROTO_GROUPS.filter((g) =>
    PROTOTYPES.some((p) => p.group === g)
  );

  // Filter bar
  const bar = document.getElementById("prototypeFilter");
  if (bar) {
    bar.innerHTML = "";
    const countFor = (v) =>
      v === "all"
        ? PROTOTYPES.length
        : PROTOTYPES.filter((p) => p.group === v).length;
    const chips = [["all", dict["filter.all"] || "All"]].concat(
      usedGroups.map((g) => [g, dict["filter." + g] || g])
    );
    chips.forEach(([value, label], i) => {
      const b = el("button", "filter-chip");
      b.type = "button";
      b.dataset.filter = value;
      b.append(document.createTextNode(label + " "));
      b.append(el("span", "chip-count", String(countFor(value))));
      if (i === 0) b.classList.add("is-active");
      b.addEventListener("click", () => {
        bar
          .querySelectorAll(".filter-chip")
          .forEach((c) => c.classList.toggle("is-active", c === b));
        grid.querySelectorAll(".proto-tile").forEach((t) => {
          t.hidden = value !== "all" && t.dataset.group !== value;
        });
      });
      bar.append(b);
    });
  }

  PROTOTYPES.forEach((p) => {
    const tile = el("div", "proto-tile reveal is-clickable");
    tile.dataset.group = p.group || "other";
    const posterUrl = "assets/img/prototypes/" + p.slug + ".jpg";
    const videoUrl = "assets/video/prototypes/" + p.slug + ".mp4";
    const box = mediaBox("proto-media", posterUrl, videoUrl, p.name);
    tile.append(box);

    const nameRow = el("span", "proto-name", p.name);
    if (p.link) {
      const a = el("a", "proto-link", p.link.label + " ↗");
      a.href = p.link.url;
      a.target = "_blank";
      a.rel = "noopener";
      nameRow.append(document.createTextNode(" "));
      nameRow.append(a);
    }
    tile.append(nameRow);

    tile.setAttribute("role", "button");
    tile.tabIndex = 0;
    const open = (e) => {
      if (e.target.closest("a")) return;
      openLightbox({
        title: p.name,
        links: p.link ? [p.link] : [],
        videoUrl,
        posterUrl,
        portrait: true,
      });
    };
    tile.addEventListener("click", open);
    tile.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open(e);
      }
    });

    grid.append(tile);
  });
}

/* ---------- Testimonials ---------- */
function renderTestimonials(lang) {
  const sec = document.getElementById("testimonials");
  const list = document.getElementById("testimonialList");
  if (!sec || !list) return;

  if (!TESTIMONIALS.length) {
    sec.hidden = true;
    return;
  }
  sec.hidden = false;
  list.innerHTML = "";

  TESTIMONIALS.forEach((t) => {
    const fig = el("figure", "quote-card reveal");
    fig.append(el("blockquote", "quote-text", pickLang(t.quote, lang)));
    const cap = el("figcaption", "quote-by");
    cap.append(el("span", "quote-name", t.name));
    const title = pickLang(t.title, lang);
    if (title) cap.append(el("span", "quote-title", title));
    fig.append(cap);
    list.append(fig);
  });
}

/* ---------- Experience ---------- */
function renderExperience(items) {
  const list = document.getElementById("experienceList");
  if (!list) return;
  list.innerHTML = "";

  items.forEach((job) => {
    const li = el("li", "xp-item reveal");
    const head = el("div", "xp-head");
    head.append(el("h3", "xp-role", job.role));
    head.append(el("span", "xp-period", job.period));
    li.append(head);
    li.append(el("p", "xp-company", job.company));
    if (job.summary) li.append(el("p", "xp-summary", job.summary));
    list.append(li);
  });
}

/* ---------- Education ---------- */
function renderEducation(items) {
  const list = document.getElementById("educationList");
  if (!list) return;
  list.innerHTML = "";

  items.forEach((edu) => {
    const li = el("li", "edu-item reveal");
    li.append(el("span", "edu-period", edu.period));
    const main = el("span", "edu-main");
    main.append(el("strong", "edu-title", edu.title));
    main.append(el("span", "edu-org", edu.org));
    li.append(main);
    list.append(li);
  });
}

/* ---------- orchestration ---------- */
function renderContent(lang) {
  const data = CONTENT[lang] || CONTENT.en;
  renderWork(data.work);
  renderPrototypes();
  renderTestimonials(lang);
  renderExperience(data.experience);
  renderEducation(data.education);
  if (typeof window.observeReveals === "function") window.observeReveals();
  setupVideoAutoplay();
}

renderContent(window.getLang ? window.getLang() : "en");
document.addEventListener("langchange", (e) => renderContent(e.detail.lang));
