/* ===== EDIT YOUR CONTENT HERE ===== */
const CONFIG = {
  studioName: "Studio Amemeee",          // TODO: real studio name
  whatsapp: "60123456789",               // TODO: real number, digits only with country code
  email: "hello@example.com",            // TODO: real backup email
  discountCode: "KOPI5",
  // Prices, demo links and images are the same in every language.
  packages: [
    { id: "landing", price: "RM 250" },  // TODO: confirm
    { id: "wedding", price: "RM 180" },  // TODO: confirm
    { id: "store",   price: "RM 900" },  // TODO: confirm
  ],
  demos: [
    { id: "wedding",    img: "assets/demo-wedding.jpg",    url: "https://ornate-crumble-cb085e.netlify.app/" },
    { id: "barbershop", img: "assets/demo-barbershop.jpg", url: "https://amemeee.github.io/barbershop/" },
    { id: "kopi",       img: "assets/demo-kopi.jpg",       url: "https://amemeee.github.io/kopi-introvert/" },
  ],
};

/* All text lives here, one block per language. Add a key to BOTH blocks. */
const STRINGS = {
  en: {
    title: (n) => `${n} | Websites for people who'd rather not talk`,
    description: "Fixed-price landing pages and digital wedding cards for small businesses in Malaysia. See the price first, then WhatsApp us.",
    langLabel: "Language",
    toDark: "Switch to dark mode",
    toLight: "Switch to light mode",
    navCta: "WhatsApp",
    heroAria: "Studio introduction",
    heroTitle: "Websites for people who'd rather not talk.",
    chat: "Chat on WhatsApp",
    girlAlt: "Manga girl mascot, the friendly guide",
    boyAlt: "Manga boy mascot with a bandage on his cheek, the quiet sidekick",
    boyAria: "Poke the quiet boy",
    pickPkg: "Pick a package",
    scroll: "scroll for prices",
    seePrice: "See the price ↓",
    prices: "Prices",
    whatNeed: "What do you need?",
    hint: "Not sure which one? Ask on WhatsApp.",
    waAbout: "WhatsApp about this",
    demos: "Demos",
    how: "How it works",
    step1h: "You WhatsApp us.",
    step1p: "Say what you need. A few words is enough.",
    step2h: "We send a preview.",
    step2p: "You send your details and photos. We send a link to look at.",
    step3h: "You say yes. It goes live.",
    step3p: "Change anything you don't like first.",
    finalH: "Typing is easier than talking.",
    orEmail: "or email",
    location: "Selangor, Malaysia",
    greeting: "hi! what do you need?",
    boyLines: ["…", "don't look at me.", "she talks. I stay quiet.", "I do the typing.", "try typing kopi."],
    kopiToast: (code) => `Code ${code} gets you a discount.`,
    waGeneric: (n) => `Hi ${n}! I'd like to ask about a website.`,
    waSpecific: (n, label, price) => `Hi ${n}! I'm interested in the ${label} (${price}).`,
    demoAlt: (t) => `Screenshot of the ${t} demo`,
    packages: {
      landing: {
        label: "Landing page", blurb: "One page that sells", timeline: "Ready in 3 days",
        bubble: "one page, clear and fast. perfect for a small business!",
        includes: ["1 page, mobile-friendly", "WhatsApp button", "Google Maps + contact", "Help with your domain"],
      },
      wedding: {
        label: "Wedding card", blurb: "One link instead of 500 PDFs", timeline: "Ready in 2 days",
        bubble: "share one link instead of 500 PDFs. so romantic~",
        includes: ["Couple names + date", "Map and RSVP via WhatsApp", "Music and photo gallery", "Shareable link"],
      },
      store: {
        label: "Online store", blurb: "Coming soon", timeline: "Ready in 2 weeks",
        bubble: "coming soon! message us and we'll tell you first.",
        includes: ["Product pages + cart", "Checkout or WhatsApp order", "Easy product updates", "Basic training"],
      },
    },
    demoItems: {
      wedding:    { title: "Wedding card",   note: "Digital invitation with an envelope that opens" },
      barbershop: { title: "Skull & Shears", note: "Landing page for a barbershop" },
      kopi:       { title: "Kopi Introvert", note: "Order kopi without talking to anyone" },
    },
  },

  ms: {
    title: (n) => `${n} | Laman web untuk yang lebih suka tak bercakap`,
    description: "Landing page dan kad kahwin digital harga tetap untuk perniagaan kecil di Malaysia. Lihat harga dahulu, kemudian WhatsApp kami.",
    langLabel: "Bahasa",
    toDark: "Tukar ke mod gelap",
    toLight: "Tukar ke mod cerah",
    navCta: "WhatsApp",
    heroAria: "Pengenalan studio",
    heroTitle: "Laman web untuk yang lebih suka tak bercakap.",
    chat: "Chat di WhatsApp",
    girlAlt: "Maskot gadis manga, pemandu yang mesra",
    boyAlt: "Maskot lelaki manga dengan pembalut di pipi, rakan yang pendiam",
    boyAria: "Cuit budak lelaki yang pendiam",
    pickPkg: "Pilih pakej",
    scroll: "tatal untuk harga",
    seePrice: "Lihat harga ↓",
    prices: "Harga",
    whatNeed: "Anda perlukan apa?",
    hint: "Tak pasti yang mana? Tanya di WhatsApp.",
    waAbout: "WhatsApp tentang ini",
    demos: "Demo",
    how: "Cara ia berfungsi",
    step1h: "Anda WhatsApp kami.",
    step1p: "Beritahu apa yang anda perlukan. Beberapa patah perkataan sudah cukup.",
    step2h: "Kami hantar pratonton.",
    step2p: "Anda hantar butiran dan gambar. Kami hantar pautan untuk dilihat.",
    step3h: "Anda setuju. Ia terus hidup.",
    step3p: "Ubah apa sahaja yang anda tak suka dahulu.",
    finalH: "Menaip lebih mudah daripada bercakap.",
    orEmail: "atau e-mel",
    location: "Selangor, Malaysia",
    greeting: "hai! perlukan apa?",
    boyLines: ["…", "jangan pandang saya.", "dia bercakap. saya diam.", "saya yang menaip.", "cuba taip kopi."],
    kopiToast: (code) => `Kod ${code} beri anda diskaun.`,
    waGeneric: (n) => `Hai ${n}! Saya ingin bertanya tentang laman web.`,
    waSpecific: (n, label, price) => `Hai ${n}! Saya berminat dengan ${label} (${price}).`,
    demoAlt: (t) => `Tangkapan skrin demo ${t}`,
    packages: {
      landing: {
        label: "Landing page", blurb: "Satu halaman yang menjual", timeline: "Siap dalam 3 hari",
        bubble: "satu halaman, jelas dan pantas. sesuai untuk perniagaan kecil!",
        includes: ["1 halaman, mesra telefon", "Butang WhatsApp", "Google Maps + hubungi", "Bantuan untuk domain anda"],
      },
      wedding: {
        label: "Kad kahwin", blurb: "Satu pautan, bukan 500 PDF", timeline: "Siap dalam 2 hari",
        bubble: "kongsi satu pautan, bukan 500 PDF. so romantik~",
        includes: ["Nama pengantin + tarikh", "Peta dan RSVP melalui WhatsApp", "Muzik dan galeri foto", "Pautan yang boleh dikongsi"],
      },
      store: {
        label: "Kedai online", blurb: "Akan datang", timeline: "Siap dalam 2 minggu",
        bubble: "akan datang! mesej kami dan kami beritahu anda dahulu.",
        includes: ["Halaman produk + troli", "Checkout atau pesanan WhatsApp", "Kemas kini produk dengan mudah", "Latihan asas"],
      },
    },
    demoItems: {
      wedding:    { title: "Kad kahwin",     note: "Jemputan digital dengan sampul yang terbuka" },
      barbershop: { title: "Skull & Shears", note: "Landing page untuk kedai gunting rambut" },
      kopi:       { title: "Kopi Introvert", note: "Pesan kopi tanpa perlu bercakap dengan sesiapa" },
    },
  },
};
/* ================================== */

const $ = (s) => document.querySelector(s);
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* private mode: just don't remember */ } },
};

/* Saved choice wins; otherwise Malay browsers get Malay, everyone else English. */
let lang = store.get("lang");
if (!STRINGS[lang]) lang = (navigator.language || "").toLowerCase().startsWith("ms") ? "ms" : "en";
let T = STRINGS[lang];

let current = CONFIG.packages[0];
let picked = false;   // has the visitor chosen a package yet?
let boyIdx = 0;
let boyShown = false;
let greeted = false;

const pk = (p) => T.packages[p.id];   // the current language's text for a package

function waLink(text) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
}

function updateWaLinks() {
  const generic = T.waGeneric(CONFIG.studioName);
  const specific = T.waSpecific(CONFIG.studioName, pk(current).label, current.price);
  document.querySelectorAll("[data-wa]").forEach((a) => {
    a.href = waLink(a.id === "packageCta" || (picked && a.dataset.wa === "pkg") ? specific : generic);
    a.target = "_blank";
    a.rel = "noopener";
  });
}

/* ── Girl's speech bubble: types out, with reply pills ── */
const bubble = $("#bubble");
let typeTimer;
function say(text) {
  clearTimeout(typeTimer);
  $("#bubbleLive").textContent = text;
  const el = $("#bubbleText");
  bubble.classList.add("show");
  if (reduceMotion) { el.textContent = text; return; }
  el.textContent = "";
  bubble.classList.add("typing");
  let i = 0;
  (function tick() {
    el.textContent = text.slice(0, ++i);
    if (i < text.length) typeTimer = setTimeout(tick, 24);
    else bubble.classList.remove("typing");
  })();
}

function renderChoices() {
  const box = $("#choices");
  box.innerHTML = CONFIG.packages
    .map((p) => `<button class="choice" type="button" data-id="${p.id}" aria-pressed="${picked && p.id === current.id}">${pk(p).label}</button>`)
    .join("");
  if (picked) {
    box.insertAdjacentHTML("beforeend", `<a class="choice main" href="#packages">${T.seePrice}</a>`);
  }
}

/* ── Packages ── */
function renderOpts() {
  $("#opts").innerHTML = CONFIG.packages
    .map((p) => {
      const t = pk(p);
      return `<label class="opt"><input type="radio" name="pkg" value="${p.id}"${p.id === current.id ? " checked" : ""}><span><b>${t.label}</b><b class="p">${p.price}</b><small>${t.blurb} · ${t.timeline}</small></span></label>`;
    })
    .join("");
}

function showSummary() {
  const t = pk(current);
  $("#sumName").textContent = t.label;
  $("#price").textContent = current.price;
  $("#time").textContent = t.timeline;
  $("#includes").innerHTML = t.includes.map((i) => `<li>${i}</li>`).join("");
}

function select(id) {
  current = CONFIG.packages.find((p) => p.id === id);
  picked = true;
  showSummary();
  document.querySelectorAll("#opts input").forEach((r) => (r.checked = r.value === id));
  renderChoices();
  say(pk(current).bubble);
  updateWaLinks();
}

function renderDemos() {
  $("#demoList").innerHTML = CONFIG.demos
    .map((d) => {
      const t = T.demoItems[d.id];
      return `<a class="card" href="${d.url}" target="_blank" rel="noopener">
        <span class="card-img"><img src="${d.img}" alt="${T.demoAlt(t.title)}" width="720" height="540" loading="lazy"></span>
        <h3 class="card-title">${t.title}</h3>
        <p class="card-note">${t.note}</p>
      </a>`;
    })
    .join("");
}

/* ── Language ── */
function applyLang(next, { first = false } = {}) {
  lang = next;
  T = STRINGS[lang];
  store.set("lang", lang);
  document.documentElement.lang = lang;
  document.title = T.title(CONFIG.studioName);
  $('meta[name="description"]').content = T.description;

  document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = T[el.dataset.i18n]));
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => el.setAttribute("aria-label", T[el.dataset.i18nAria]));
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => el.setAttribute("alt", T[el.dataset.i18nAlt]));
  document.querySelectorAll("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));

  renderOpts();
  showSummary();
  renderChoices();
  renderDemos();
  updateWaLinks();
  setThemeLabel();

  if (!first) {
    // Switching language mid-conversation: say the same thing again in the new language.
    if (greeted) say(picked ? pk(current).bubble : T.greeting);
    if (boyShown) $("#boyBubble").textContent = T.boyLines[boyIdx];
  }
}

/* ── Theme ── */
function setThemeLabel() {
  const dark = document.documentElement.dataset.theme === "dark";
  const btn = $("#themeBtn");
  btn.textContent = dark ? "☀" : "☾";
  btn.setAttribute("aria-label", dark ? T.toLight : T.toDark);
  $('meta[name="theme-color"]').content = dark ? "#111111" : "#ffffff";
}

function toggleTheme() {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  const root = document.documentElement;
  if (!reduceMotion) {
    root.classList.add("theme-fade");
    setTimeout(() => root.classList.remove("theme-fade"), 450);
  }
  root.dataset.theme = next;
  store.set("theme", next);
  setThemeLabel();
}

function init() {
  document.querySelectorAll("[data-bind=studioName]").forEach((el) => (el.textContent = CONFIG.studioName));
  $("#year").textContent = new Date().getFullYear();

  const mail = $("[data-email]");
  mail.textContent = CONFIG.email;
  mail.href = `mailto:${CONFIG.email}`;

  $("#opts").addEventListener("change", (e) => select(e.target.value));
  $("#choices").addEventListener("click", (e) => {
    const b = e.target.closest(".choice[data-id]");
    if (b) select(b.dataset.id);
  });
  document.querySelectorAll("[data-lang]").forEach((b) => b.addEventListener("click", () => applyLang(b.dataset.lang)));
  $("#themeBtn").addEventListener("click", toggleTheme);

  applyLang(lang, { first: true });

  // Girl opens the conversation
  setTimeout(() => { greeted = true; say(picked ? pk(current).bubble : T.greeting); }, reduceMotion ? 0 : 900);

  // Boy: click cycles lines
  const boy = $("#boy"), boyBubble = $("#boyBubble");
  const boySay = () => { boyShown = true; boyBubble.textContent = T.boyLines[boyIdx]; boyBubble.classList.add("show"); };
  setTimeout(boySay, reduceMotion ? 0 : 2200);
  boy.addEventListener("click", () => {
    boyIdx = (boyIdx + 1) % T.boyLines.length;
    boySay();
    boy.classList.remove("pop"); void boy.offsetWidth; boy.classList.add("pop");
  });

  // Easter egg: typing "kopi"
  let typed = "";
  document.addEventListener("keydown", (e) => {
    if (e.key.length !== 1 || /input|textarea/i.test(e.target.tagName)) return;
    typed = (typed + e.key.toLowerCase()).slice(-4);
    if (typed === "kopi") showToast(T.kopiToast(CONFIG.discountCode));
  });
}

let toastTimer;
function showToast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => (t.hidden = true), 4000);
}

init();
