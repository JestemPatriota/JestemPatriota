/**
 * JestemPatriotą — interakcje
 */
(function () {
  "use strict";

  const FACTS = [
    { text: "Konstytucja 3 maja 1791 roku była pierwszą w Europie i drugą na świecie — po konstytucji USA — nowoczesną ustawą zasadniczą.", cat: "historia" },
    { text: "Maria Skłodowska-Curie, urodzona w Warszawie, jako jedyna osoba w historii otrzymała Nagrodę Nobla w dwóch różnych dziedzinach nauk ścisłych.", cat: "nauka" },
    { text: "Polska jest jednym z największych w Unii Europejskiej producentów owoców miękkich, m.in. jabłek i borówek.", cat: "geografia" },
    { text: "W Polsce znajduje się ponad 400 zamków i ruin zamkowych — jedna z najbogatszych w Europie sieci obiektów obronnych.", cat: "kultura" },
    { text: "Język polski należy do grupy języków zachodniosłowiańskich i jest używany na co dzień przez ponad 40 milionów osób na świecie.", cat: "kultura" },
    { text: "Białowieski Park Narodowy chroni ostatni w Europie fragment pierwotnego lasu puszczańskiego — dom żubrów.", cat: "geografia" },
    { text: "Solidarność z 1980 roku była pierwszym niezależnym samorządnym związkiem zawodowym w bloku państw socjalistycznych.", cat: "historia" },
    { text: "Kopalnia soli w Wieliczce, wpisana na listę UNESCO, jest eksploatowana nieprzerwanie od średniowiecza.", cat: "kultura" },
    { text: "Polska graniczy z siedmioma państwami — Niemcami, Czechami, Słowacją, Ukrainą, Białorusią, Litwą i Rosją (obwód kaliningradzki).", cat: "geografia" },
    { text: "Mikołaj Kopernik, autor heliocentrycznego modelu Układu Słonecznego, urodził się w Toruniu.", cat: "nauka" },
    { text: "Wisła jest najdłuższą rzeką w kraju — jej dorzecze pokrywa znaczną część terytorium Polski.", cat: "geografia" },
    { text: "Polskie tradycje kolędowania i ozdabiania palm wielkanocnych wpisują się w bogatą kulturę ludową różnych regionów.", cat: "kultura" },
    { text: "Bitwa pod Grunwaldem (1410) zakończyła się zwycięstwem wojsk polsko-litewskich nad zakonem krzyżackim.", cat: "historia" },
    { text: "Fryderyk Chopin, jeden z najwybitniejszych kompozytorów romantyzmu, urodził się w Żelazowej Woli pod Warszawą.", cat: "kultura" },
    { text: "Polska posiada dostęp do Morza Bałtyckiego z wybrzeżem o długości około 770 km.", cat: "geografia" },
    { text: "W Krakowie działa jeden z najstarszych uniwersytetów w Europie — Uniwersytet Jagielloński (zał. 1364).", cat: "nauka" },
    { text: "Tatry to najwyższe pasmo w polskiej części Karpat — Rysy sięgają ponad 2500 m n.p.m.", cat: "geografia" },
    { text: "Powstanie Warszawskie (1944) było największą akcją zbrojną ruchu oporu w okupowanej Europie.", cat: "historia" },
  ];

  const GALLERY = [
    {
      src: "https://images.unsplash.com/photo-1519197924294-4ba991a11128?w=900&q=80",
      title: "Stare Miasto w Warszawie",
      caption: "Rekonstrukcja po zniszczeniach wojennych — symbol polskiej determinacji i UNESCO.",
    },
    {
      src: "https://images.unsplash.com/photo-1596484552834-5a9450d20277?w=900&q=80",
      title: "Polski krajobraz",
      caption: "Zielone pola i lasy — typowy widok polskiej wsi i małych miejscowości.",
    },
    {
      src: "https://images.unsplash.com/photo-1565008576549-57b54e6b6b3b?w=900&q=80",
      title: "Kraków — Rynek Główny",
      caption: "Serce Małopolski i jeden z największych średniowiecznych placów w Europie.",
    },
    {
      src: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=900&q=80",
      title: "Góry",
      caption: "Polskie szlaki górskie przyciągają turystów przez cały rok.",
    },
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
      title: "Morze Bałtyckie",
      caption: "Plaże, klify i porty — wybrzeże to ważna część polskiej tożsamości.",
    },
    {
      src: "https://images.unsplash.com/photo-1528722828815-3904609c47ff?w=900&q=80",
      title: "Architektura miast",
      caption: "Kamienice i place — mieszanka stylów od gotyku po modernizm.",
    },
  ];

  const TIMELINE = [
    { year: "966", title: "Chrzest Polski", desc: "Początek państwowości i związku z kulturą łacińską." },
    { year: "1410", title: "Grunwald", desc: "Zwycięstwo nad Krzyżakami pod wodzą Władysława Jagiełły." },
    { year: "1791", title: "Konstytucja 3 maja", desc: "Pierwsza w Europie nowoczesna ustawa zasadnicza." },
    { year: "1918", title: "Niepodległość", desc: "Odzyskanie niepodległości po 123 latach rozbiorów." },
    { year: "1920", title: "Cud nad Wisłą", desc: "Obrona przed bolszewicką ofensywą — bitwa pod Warszawą." },
    { year: "1980", title: "Solidarność", desc: "Powstanie niezależnego ruchu związkowego w Gdańsku." },
    { year: "1989", title: "Okrągły Stół", desc: "Negocjacje prowadzące do częściowo wolnych wyborów." },
    { year: "2004", title: "Unia Europejska", desc: "Polska wstępuje do UE razem z innymi krajami regionu." },
  ];

  /* Theme */
  const root = document.documentElement;
  const storedTheme = localStorage.getItem("jp-theme");
  if (storedTheme === "light" || storedTheme === "dark") {
    root.setAttribute("data-theme", storedTheme);
  } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    root.setAttribute("data-theme", "light");
  }

  document.getElementById("themeToggle")?.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    localStorage.setItem("jp-theme", next);
  });

  /* Year */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* Mobile nav */
  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.getElementById("site-nav");
  navToggle?.addEventListener("click", () => {
    const open = siteNav?.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  siteNav?.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      navToggle?.setAttribute("aria-expanded", "false");
    });
  });

  /* Hero counters */
  function animateCounters() {
    document.querySelectorAll(".counter").forEach((el) => {
      const target = parseInt(el.getAttribute("data-target") || "0", 10);
      const duration = 1600;
      const start = performance.now();
      function frame(now) {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = String(Math.round(eased * target));
        if (t < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    });
  }

  const hero = document.getElementById("hero");
  if (hero && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animateCounters();
            io.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    io.observe(hero);
  } else {
    animateCounters();
  }

  /* Facts */
  let factPool = [...FACTS];
  let factIndex = 0;
  let currentCat = "all";

  const factText = document.getElementById("factText");
  const factIndexEl = document.getElementById("factIndex");

  function applyCategory() {
    factPool =
      currentCat === "all" ? [...FACTS] : FACTS.filter((f) => f.cat === currentCat);
    if (factPool.length === 0) {
      factText.textContent = "Brak faktów w tej kategorii — wybierz inną.";
      factIndexEl.textContent = "";
      return;
    }
    factIndex = Math.min(factIndex, factPool.length - 1);
    renderFact();
  }

  function renderFact() {
    if (!factText || factPool.length === 0) return;
    const f = factPool[factIndex];
    factText.textContent = f.text;
    factIndexEl.textContent = `Fakt ${factIndex + 1} z ${factPool.length} • ${categoryLabel(f.cat)}`;
  }

  function categoryLabel(cat) {
    const m = { historia: "historia", nauka: "nauka", kultura: "kultura", geografia: "geografia" };
    return m[cat] || cat;
  }

  document.querySelectorAll(".chip[data-cat]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".chip[data-cat]").forEach((c) => c.classList.remove("is-active"));
      btn.classList.add("is-active");
      currentCat = btn.getAttribute("data-cat") || "all";
      factIndex = 0;
      applyCategory();
    });
  });

  document.getElementById("btnRandomFact")?.addEventListener("click", () => {
    if (factPool.length === 0) applyCategory();
    if (factPool.length === 0) return;
    factIndex = Math.floor(Math.random() * factPool.length);
    renderFact();
  });

  document.getElementById("btnPrevFact")?.addEventListener("click", () => {
    if (factPool.length === 0) return;
    factIndex = (factIndex - 1 + factPool.length) % factPool.length;
    renderFact();
  });

  document.getElementById("btnNextFact")?.addEventListener("click", () => {
    if (factPool.length === 0) return;
    factIndex = (factIndex + 1) % factPool.length;
    renderFact();
  });

  applyCategory();

  /* Gallery */
  const galleryGrid = document.getElementById("galleryGrid");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxClose = document.getElementById("lightboxClose");

  GALLERY.forEach((item, i) => {
    const figure = document.createElement("figure");
    figure.className = "gallery-item";
    figure.tabIndex = 0;
    figure.innerHTML = `
      <img src="${item.src}" alt="${item.title}" loading="lazy" width="400" height="300" />
      <figcaption>${item.title}</figcaption>
    `;
    function open() {
      if (!lightbox || !lightboxImg || !lightboxCaption) return;
      lightboxImg.src = item.src;
      lightboxImg.alt = item.title;
      lightboxCaption.textContent = item.caption;
      lightbox.showModal();
    }
    figure.addEventListener("click", open);
    figure.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
    });
    galleryGrid?.appendChild(figure);
  });

  lightboxClose?.addEventListener("click", () => lightbox?.close());
  lightbox?.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.close();
  });

  document.getElementById("scrollToGallery")?.addEventListener("click", () => {
    document.getElementById("galeria")?.scrollIntoView({ behavior: "smooth" });
  });

  /* Timeline window */
  const WINDOW = 4;
  let timelineOffset = 0;
  const timelineEl = document.getElementById("timeline");

  function renderTimeline() {
    if (!timelineEl) return;
    timelineEl.innerHTML = "";
    const slice = [];
    for (let i = 0; i < WINDOW; i++) {
      const idx = (timelineOffset + i) % TIMELINE.length;
      slice.push(TIMELINE[idx]);
    }
    slice.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span class="timeline-year">${item.year}</span>
        <div class="timeline-body">
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </div>
      `;
      timelineEl.appendChild(li);
    });
  }

  document.getElementById("timelinePrev")?.addEventListener("click", () => {
    timelineOffset = (timelineOffset - 1 + TIMELINE.length) % TIMELINE.length;
    renderTimeline();
  });

  document.getElementById("timelineNext")?.addEventListener("click", () => {
    timelineOffset = (timelineOffset + 1) % TIMELINE.length;
    renderTimeline();
  });

  renderTimeline();

  /* Anthem animation */
  const anthemBars = document.querySelector(".anthem-bars");
  if (anthemBars && !anthemBars.querySelector("span")) {
    for (let i = 0; i < 5; i++) {
      const s = document.createElement("span");
      anthemBars.appendChild(s);
    }
  }

  document.getElementById("playHymnNote")?.addEventListener("click", () => {
    anthemBars?.classList.add("playing");
    setTimeout(() => anthemBars?.classList.remove("playing"), 2500);
  });

  /* Share */
  const shareStatus = document.getElementById("shareStatus");
  document.getElementById("btnShare")?.addEventListener("click", async () => {
    const url = window.location.href;
    const title = "JestemPatriotą";
    const text = "Odkryj stronę dla Polaków, którzy kochają Ojczyznę.";

    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
        if (shareStatus) shareStatus.textContent = "Dziękujemy za udostępnienie!";
      } catch (err) {
        if (err && err.name !== "AbortError" && shareStatus) {
          shareStatus.textContent = "Nie udało się udostępnić — spróbuj ponownie.";
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        if (shareStatus) shareStatus.textContent = "Link skopiowany do schowka.";
      } catch {
        if (shareStatus) shareStatus.textContent = `Skopiuj ręcznie: ${url}`;
      }
    }
    setTimeout(() => {
      if (shareStatus) shareStatus.textContent = "";
    }, 4000);
  });
})();
