/* ===== EDIT YOUR CONTENT HERE ===== */
const CONFIG = {
  studioName: "Studio Amemeee",          // TODO: real studio name
  whatsapp: "60123456789",               // TODO: real number, digits only with country code
  email: "hello@example.com",            // TODO: real backup email
  packages: [
    {
      id: "landing",
      label: "Landing page",
      blurb: "One page that sells",
      price: "RM 250",                   // TODO: confirm
      timeline: "Ready in 3 days",       // TODO: confirm
      bubble: "one page, clear and fast. perfect for a small business!",
      includes: [  /* TODO: confirm what is really included */ "1 page, mobile-friendly", "WhatsApp button", "Google Maps + contact", "Help with your domain"],
    },
    {
      id: "wedding",
      label: "Wedding card",
      blurb: "One link instead of 500 PDFs",
      price: "RM 180",                   // TODO: confirm
      timeline: "Ready in 2 days",       // TODO: confirm
      bubble: "share one link instead of 500 PDFs. so romantic~",
      includes: [  /* TODO: confirm what is really included */ "Couple names + date", "Map and RSVP via WhatsApp", "Music and photo gallery", "Shareable link"],
    },
    {
      id: "store",
      label: "Online store",
      blurb: "Coming soon",
      price: "RM 900",                   // TODO: confirm
      timeline: "Ready in 2 weeks",      // TODO: confirm
      bubble: "coming soon! message us and we'll tell you first.",
      includes: [  /* TODO: confirm what is really included */ "Product pages + cart", "Checkout or WhatsApp order", "Easy product updates", "Basic training"],
    },
  ],
  demos: [
    { title: "Wedding card", note: "Digital invitation with an envelope that opens", img: "assets/demo-wedding.jpg", url: "https://ornate-crumble-cb085e.netlify.app/" },
    { title: "Skull & Shears", note: "Landing page for a barbershop", img: "assets/demo-barbershop.jpg", url: "https://amemeee.github.io/barbershop/" },
    { title: "Kopi Introvert", note: "Order kopi without talking to anyone", img: "assets/demo-kopi.jpg", url: "https://amemeee.github.io/kopi-introvert/" },
  ],
  greeting: "hi! what do you need?",
  boyLines: [
    "…",
    "don't look at me.",
    "she talks. I stay quiet.",
    "I do the typing.",
    "try typing kopi.",
  ],
  discountCode: "KOPI5",
};
/* ================================== */

const $ = (s) => document.querySelector(s);
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
let current = CONFIG.packages[0];
let picked = false;   // has the visitor chosen a package yet?

function waLink(text) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
}

function updateWaLinks() {
  const generic = `Hi ${CONFIG.studioName}! I'd like to ask about a website.`;
  const specific = `Hi ${CONFIG.studioName}! I'm interested in the ${current.label} (${current.price}).`;
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
    .map((p) => `<button class="choice" type="button" data-id="${p.id}" aria-pressed="${picked && p.id === current.id}">${p.label}</button>`)
    .join("");
  if (picked) {
    box.insertAdjacentHTML("beforeend",
      `<a class="choice main" href="#packages">See the price ↓</a>`);
  }
}

/* ── Packages ── */
function showSummary(pkg) {
  $("#sumName").textContent = pkg.label;
  $("#price").textContent = pkg.price;
  $("#time").textContent = pkg.timeline;
  $("#includes").innerHTML = pkg.includes.map((i) => `<li>${i}</li>`).join("");
}

function select(id) {
  current = CONFIG.packages.find((p) => p.id === id);
  picked = true;
  showSummary(current);
  document.querySelectorAll("#opts input").forEach((r) => (r.checked = r.value === id));
  renderChoices();
  say(current.bubble);
  updateWaLinks();
}

function init() {
  document.querySelectorAll("[data-bind=studioName]").forEach((el) => (el.textContent = CONFIG.studioName));
  document.title = `${CONFIG.studioName} | Websites for people who'd rather not talk`;
  $("#year").textContent = new Date().getFullYear();

  const mail = $("[data-email]");
  mail.textContent = CONFIG.email;
  mail.href = `mailto:${CONFIG.email}`;

  // Package options (real radios, styled like the chips on the other sites)
  $("#opts").innerHTML = CONFIG.packages
    .map((p) => `<label class="opt"><input type="radio" name="pkg" value="${p.id}"><span><b>${p.label}</b><b class="p">${p.price}</b><small>${p.blurb} · ${p.timeline}</small></span></label>`)
    .join("");
  $("#opts").addEventListener("change", (e) => select(e.target.value));

  // Show the first package's details without "picking" it yet
  showSummary(current);
  document.querySelector("#opts input").checked = true;

  $("#choices").addEventListener("click", (e) => {
    const b = e.target.closest(".choice[data-id]");
    if (b) select(b.dataset.id);
  });

  $("#demoList").innerHTML = CONFIG.demos
    .map((d) => `<a class="card" href="${d.url}" target="_blank" rel="noopener">
        <span class="card-img"><img src="${d.img}" alt="Screenshot of the ${d.title} demo" width="720" height="540" loading="lazy"></span>
        <h3 class="card-title">${d.title}</h3>
        <p class="card-note">${d.note}</p>
      </a>`)
    .join("");

  // Girl opens the conversation
  renderChoices();
  setTimeout(() => say(CONFIG.greeting), reduceMotion ? 0 : 900);

  // Boy: click cycles lines
  const boy = $("#boy"), boyBubble = $("#boyBubble");
  let i = 0;
  const boySay = (t) => { boyBubble.textContent = t; boyBubble.classList.add("show"); };
  setTimeout(() => boySay(CONFIG.boyLines[0]), reduceMotion ? 0 : 2200);
  boy.addEventListener("click", () => {
    i = (i + 1) % CONFIG.boyLines.length;
    boySay(CONFIG.boyLines[i]);
    boy.classList.remove("pop"); void boy.offsetWidth; boy.classList.add("pop");
  });

  // Easter egg: typing "kopi"
  let typed = "";
  document.addEventListener("keydown", (e) => {
    if (e.key.length !== 1 || /input|textarea/i.test(e.target.tagName)) return;
    typed = (typed + e.key.toLowerCase()).slice(-4);
    if (typed === "kopi") showToast(`Code ${CONFIG.discountCode} gets you a discount.`);
  });

  updateWaLinks();
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
