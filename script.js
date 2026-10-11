/**
 * @license
 * INFORMATIKA 26 (IF 26) — INFORMATIKA 2026 UNUGHA CILACAP
 * Vanilla JavaScript Engine (Zero Dependencies, GitHub Pages Ready)
 */

'use strict';

/* ==========================================================================
   01. DATA CONFIGURATION (INFORMATIKA 26 / IF 26)
   ========================================================================== */

const CLASS_CONFIG = {
  name: "INFORMATIKA 26",
  shortName: "IF 26",
  university: "Universitas Nahdlatul Ulama Al Ghazali Cilacap",
  faculty: "Fakultas Matematika dan Ilmu Komputer",
  program: "Informatika",
  year: "2026",
  tagline: "CODE • CREATE • COLLABORATE",
  
  // Leadership Structure
  dpa: "Bapak Trio Anggoro M.Kom",
  korlas: "Muhammad Adam Khakiki",
  secretary: "Sulaiman Jatmiko",
  treasurers: [
    "Iana Zahwa",
    "Nabila Fitrotul Mauliya"
  ],
  publicRelations: [
    "Fiki Tino Satrio"
  ],

  social: {
    github: "https://github.com/informatika26-unugha",
    instagram: "https://www.instagram.com/inf.sidedisplay026?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
    email: "informatika26@unugha.ac.id"
  }
};

/* --------------------------------------------------------------------------
   Schedule Data (Only days with scheduled classes: Senin, Selasa, Kamis)
   -------------------------------------------------------------------------- */
const SCHEDULE_DATA = [
  {
    dayId: "senin",
    dayName: "SENIN",
    subtitle: "2 Mata Kuliah",
    courses: [
      {
        time: "07.00 – 08.40",
        name: "Bahasa Indonesia",
        room: "1C",
        code: "UNU-BI101"
      },
      {
        time: "10.20 – 12.00",
        name: "Pancasila",
        room: "1C",
        code: "UNU-PK102"
      }
    ]
  },
  {
    dayId: "selasa",
    dayName: "SELASA",
    subtitle: "3 Mata Kuliah",
    courses: [
      {
        time: "07.00 – 09.30",
        name: "Algoritma dan Struktur Data",
        room: "GAB1A",
        code: "IF-ASD101"
      },
      {
        time: "12.00 – 13.40",
        name: "Agama",
        room: "1C",
        code: "UNU-AG103"
      },
      {
        time: "14.00 – 15.30",
        name: "Organisasi dan Arsitektur Komputer",
        room: "IF1A",
        code: "IF-OAK102"
      }
    ]
  },
  {
    dayId: "kamis",
    dayName: "KAMIS",
    subtitle: "3 Mata Kuliah",
    courses: [
      {
        time: "08.00 – 09.30",
        name: "Pengantar Informatika",
        room: "IF1A",
        code: "IF-PI100"
      },
      {
        time: "09.30 – 12.00",
        name: "Logika Informatika",
        room: "IF1A",
        code: "IF-LI104"
      },
      {
        time: "14.30 – 17.00",
        name: "Kalkulus Dasar",
        room: "IF1A",
        code: "FM-KD105"
      }
    ]
  }
];

/* --------------------------------------------------------------------------
nama anak"
   -------------------------------------------------------------------------- */
const MEMBERS_DATA = [
  {
    id: 1,
    name: "Naila Azfa Azizah",
    nim: "265211001",
    role: "Informatics Student",
    image: "./assets/members/Naila.webp",
    github: "-",
    instagram: "https://www.instagram.com/nnylazf__?rpxt=MXBmem1zYnVuemNzbg==",
    bio: "low minds fear high standards."
  },
  {
    id: 2,
    name: "Ade Bayu Ali Mubarok",
    nim: "265211002",
    role: "Informatics Student",
    image: "./assets/members/ade bayu ali mubarok.webp",
    github: "https://github.com",
    instagram: "https://www.instagram.com/adebayu_18?obrf=MTNiYjM4eXpyOXk1dQ==",
    bio: "Tidak Harus Hebat Hari ini, Cukup Satu Langkah Lebih Baik Dari Kemarin"
  },
  {
    id: 3,
    name: "Fiki Tino Satrio",
    nim: "265211003",
    role: "Humas (Public Relations)",
    image: "./assets/members/tino.webp",
    github: "https://github.com",
    instagram: "https://www.instagram.com/pikktsh.co",
    bio: "light the fire"
  },
  {
    id: 4,
    name: "Muhammad Syadid Fahmi",
    nim: "265211004",
    role: "Informatics Student",
    image: "./assets/members/mamas.jpeg",
    github: "https://github.com",
    instagram: "https://www.instagram.com/fhm_sdt?rpxt=MmpqYWh4Z3Y1b2h5",
    bio: "Bahagia itu sederhana, cukup bersyukur."
  },
  {
    id: 5,
    name: "Alika Akfinie Noer",
    nim: "265211005",
    role: "Informatics Student",
    image: "./assets/members/alika.webp",
    github: "https://github.com",
    instagram: "https://www.instagram.com/alkyfnn",
    bio: "𝓑𝓸𝓻𝓷 𝓽𝓸 𝓭𝓲𝓮.."
  },
  {
    id: 6,
    name: "Rusdyana Faizul Haq",
    nim: "265211006",
    role: "Informatics Student",
    image: "./assets/members/rusdy.jpeg",
    github: "https://github.com",
    instagram: "https://instagram.com",
    bio: "Mahasiswa aktif Program Studi Informatika Angkatan 2026 UNUGHA Cilacap."
  },
  {
    id: 7,
    name: "Salsabila",
    nim: "265211007",
    role: "Informatics Student",
    image: "./assets/members/salsa.webp",
    github: "https://github.com",
    instagram: "https://www.instagram.com/saalllsabila?xtok=MTA5bHg2ZGNjMHptNA==",
    bio: "Mahasiswa aktif Program Studi Informatika Angkatan 2026 UNUGHA Cilacap."
  },
  {
    id: 8,
    name: "Fadlan Ibnu",
    nim: "265211008",
    role: "Informatics Student",
    image: "./assets/members/my.png",
    github: "https://github.com",
    instagram: "https://instagram.com",
    bio: "Mahasiswa aktif Program Studi Informatika Angkatan 2026 UNUGHA Cilacap."
  },
  {
    id: 9,
    name: "Muhamad Setya Mubarok",
    nim: "265211009",
    role: "Informatics Student",
    image: "./assets/members/muhamad setya mubarok.webp",
    github: "https://github.com",
    instagram: "https://www.instagram.com/stya_314?cplk=ZHc0Mml2azQ5cDNu",
    bio: "Mahasiswa aktif Program Studi Informatika Angkatan 2026 UNUGHA Cilacap."
  },
  {
    id: 10,
    name: "Uswatun Hasanah",
    nim: "265211010",
    role: "Informatics Student",
    image: "./assets/members/uswatun hasanah.webp",
    github: "https://github.com",
    instagram: " https://www.instagram.com/act.un_sanh?vrfl=MW9jd2VlbXBnb3UzNw==",
    bio: "Tumbuh perlahan, bersinar dengan cara ku sendiri."
  },
  {
    id: 11,
    name: "Inas Elmira Qothrunnada",
    nim: "265211012",
    role: "Informatics Student",
    image: "./assets/members/ines.webp",
    github: "https://github.com",
    instagram: "https://www.instagram.com/ins.miraa/#",
   bio: "be your self"
  },
  {
    id: 12,
    name: "Sahid Muzaki",
    nim: "265211013",
    role: "Informatics Student",
    image: "./assets/members/sahid muzaki.webp",
    github: "https://github.com",
    instagram: "https://www.instagram.com/zac_ky171?exln=eHVodjJudmtwb3Z1",
    bio: "Usaha tidak akan pernah menghianati hasil."
  },
  {
    id: 13,
    name: "Hilaal Haidar Zhafar",
    nim: "265211014",
    role: "Informatics Student",
    image: "./assets/members/hilaal haidar zhafar.webp",
    github: "https://github.com",
    instagram: "https://www.instagram.com/hlhdzh?rpxt=MTh6aXBncG96OWx0NQ==",
    bio: "punya tempat untuk pulang adalah kelegaan yang luar biasa."
  },
  {
    id: 14,
    name: "Muhamad Ulul Fikri",
    nim: "265211015",
    role: "Informatics Student",
    image: "./assets/members/lul.webp",
    github: "https://github.com",
    instagram: "https://instagram.com",
    bio: "Mahasiswa aktif Program Studi Informatika Angkatan 2026 UNUGHA Cilacap."
  },
  {
    id: 15,
    name: "Ibnu Ngafan",
    nim: "265211016",
    role: "Informatics Student",
    image: "./assets/members/ib.jpg",
    github: "-",
    instagram: "https://www.instagram.com/isshiki_yuu?psln=NmFmNW00dnAzeDlp",
    bio: "KATAKAN PADA KEGAGALAN AKU AKAN MENANTANG NYA LAGI BESOK"
  },
  {
    id: 16,
    name: "Iana Zahwa",
    nim: "265211017",
    role: "Bendahara I",
    image: "./assets/members/zahtul.webp",
    github: "https://github.com",
    instagram: "https://www.instagram.com/za_zhwa?dlrf=OXRlaTllcjYyN2U3",
    bio: "tidak ada kata terlambat untuk memulai"
  },
  {
    id: 17,
    name: "Nauval Yanal Azizi",
    nim: "265211018",
    role: "Informatics Student",
    image: "./assets/members/nauval.webp",
    github: "https://github.com",
    instagram: "https://www.instagram.com/nooovaaal_?stkn=czlxa254cmx6a20w",
    bio: "SEMUA AKAN JAHAT PADA WAKTUNYA😀."
  },
  {
    id: 18,
    name: "Sulaiman Jatmiko",
    nim: "265211019",
    role: "Sekretaris Kelas",
    image: "./assets/members/komik.jpg",
    github: "https://github.com",
    instagram: "https://www.instagram.com/mrsull9?psln=MWhydWlsejlvZHYxOA==",
    bio: "Mengelola dokumentasi sistemik, tata kelola informasi, dan korespondensi akademik angkatan."
  },
  {
    id: 19,
    name: "Muhammad Adam Khakiki",
    nim: "265211020",
    role: "Koordinator Kelas (Korlas)",
    image: "./assets/members/adam.webp",
    github: "-",
    instagram: "https://www.instagram.com/adam_khaq?stkn=MXhxd3RvcWE0YTZ4Yw==",
    bio: "ilmu ketapel mundur untuk melesat lebih jauh‧₊˚🎐 ˚｡𖦹 ⋆ ༄."
  },
  {
    id: 20,
    name: "Muhamad Haylan Abdu Usykh",
    nim: "265211021",
    role: "Informatics Student",
    image: "./assets/members/HYLAN.jpeg",
    github: "https://github.com",
    instagram: " https://www.instagram.com/hylan_abda?obrf=MTVpeWEzYTQzZ3Nrdg==",
    bio: "Daun yang rendah sering diinjak, padahal dia yang sangat dekat dengan akar."
  },
  {
    id: 21,
    name: "Nabila Fitrotul Mauliya",
    nim: "265211022",
    role: "Bendahara II",
    image: "./assets/members/bila.webp",
    github: "https://github.com",
    instagram: "https://www.instagram.com/byllzy_?obrf=MnlxY3BuZWZhNXQ3,",
    bio: "sudah terang sebelum ada api."
  },
  {
    id: 22,
    name: "Faiz Aghni Abdillah",
    nim: "265211023",
    role: "Informatics Student",
    image: "./assets/members/IZ.webp",
    github: "https://github.com",
    instagram: "https://www.instagram.com/fzhndlh?vrfl=ODZkc2JvMmRzNHkx",
    bio: "Hari ini harus lebih baik dari hari kemarin."
  },
  {
    id: 23,
    name: "Naza Nuri Karisma",
    nim: "265211024",
    role: "Informatics Student",
    image: "./assets/members/nuri.webp",
    github: "https://github.com",
    instagram: "https://www.instagram.com/_nazanuri?mdxt=MTRvODVrODI2cTdzcQ==",
    bio: " Learn, then Earn"
  },
  {
    id: 24,
    name: "Khafidz Saputra",
    nim: "265211025",
    role: "Informatics Student",
    image: "./assets/members/my.png",
    github: "https://github.com",
    instagram: "https://instagram.com",
    bio: "Mahasiswa aktif Program Studi Informatika Angkatan 2026 UNUGHA Cilacap."
  },
  {
    id: 26,
    name: "Sarah Alkhansa",
    nim: "023425",
    role: "Informatics Student",
    image: "./assets/members/sarah.webp",
    github: "https://github.com",
    instagram: "https://www.instagram.com/srhknsaa?stkn=MTZqMTZsanM2c3VyYQ==",
    bio: "turn your scars into stars‧₊˚🎐 ˚｡𖦹 ⋆ ༄."
  },
  {
  id: 21,
  name: "shofe ridho",
  nim: "2601021",
  role: "Informatics Student",
  image: "./assets/members/shofe.webp",
  github: "https://github.com/username",
  instagram: "https://www.instagram.com/shr_ahmadi28?cplk=MWZtcXI0bG85MnNneA==",
  bio: "Jika doa bukan sebuah Permintaan, setidaknya itu adalah sebuah Pengakuan atas kelemahan diri di hadapan Tuhannya."
}

];

/* --------------------------------------------------------------------------
   Moments Gallery Data
   -------------------------------------------------------------------------- */
const MOMENTS_DATA = [
  {
    id: 1,
    image: "./assets/gallery/gacoan.jpeg",
    title: "kebersamaan mahasiswa informatika",
    caption: "Berdiskusi, Berproses, dan bertumbuh Bersama.",
    meta: "MIE GACOAN CILACAP // 2026"
  },
  {
    id: 2,
    image: "./assets/gallery/bersama.jpeg",
    title: "Bersama dalam Satu Perjalanan",
    caption: "Bukan Sekedar Teman, Tapi Bagian dari Perjalanan.",
    meta: "UNUGHA // 2026"
  },
  {
    id: 3,
    image: "./assets/gallery/FOTBAR.JPG",
    title: "Laut, Langit, dan Cerita kita",
    caption: "Seperti laut yang luas, perjalanan kita juga masih panjang.",
    meta: "PANTAI TELUK PENYU CILACAP // 2026"
  },
  {
    id: 4,
    image: "./assets/gallery/gallery-04.jpg",
    title: "Sinergi Belajar & Diskusi Terbuka",
    caption: "Diskusi kelompok memahami logika kalkulus dan pengantar informatika.",
    meta: "CAMPUS STUDY // 2026"
  },
  {
    id: 5,
    image: "./assets/gallery/gallery-05.jpg",
    title: "Studi Mandiri & Eksplorasi Kode",
    caption: "Eksplorasi mandiri sintaks bahasa pemrograman dan struktur program.",
    meta: "STUDY SESSION // 2026"
  },
  {
    id: 6,
    image: "./assets/gallery/gallery-06.jpg",
    title: "Sinergi Akademik & Kebersamaan Angkatan",
    caption: "Momen kebersamaan angkatan pertama Informatika 2026 UNUGHA Cilacap.",
    meta: "COHORT 2026 // UNUGHA"
  }
];

/* ==========================================================================
   02. DOM CONTROLLER & RENDERING LOGIC
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initHeaderScroll();
  initMobileNavigation();
  initScheduleRenderer();
  initMembersRenderer();
  initMemberSearch();
  initCraftAccordion();
  initMomentsGallery();
  initLightbox();
  initDigitalWallClock();
  initScrollSpy();
});

/* --------------------------------------------------------------------------
   Header Sticky Scroll & Background Blur
   -------------------------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.getElementById("site-header");
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* --------------------------------------------------------------------------
   Mobile Drawer Navigation
   -------------------------------------------------------------------------- */
function initMobileNavigation() {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const drawerClose = document.getElementById("drawer-close");
  const backdrop = document.getElementById("drawer-backdrop");
  const drawerLinks = document.querySelectorAll(".drawer-link");

  if (!menuToggle || !mobileNav) return;

  const openDrawer = () => {
    mobileNav.classList.add("open");
    menuToggle.classList.add("active");
    menuToggle.setAttribute("aria-expanded", "true");
    mobileNav.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeDrawer = () => {
    mobileNav.classList.remove("open");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    mobileNav.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  menuToggle.addEventListener("click", () => {
    if (mobileNav.classList.contains("open")) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  if (drawerClose) drawerClose.addEventListener("click", closeDrawer);
  if (backdrop) backdrop.addEventListener("click", closeDrawer);

  drawerLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeDrawer();
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileNav.classList.contains("open")) {
      closeDrawer();
    }
  });
}

/* --------------------------------------------------------------------------
   Schedule Renderer & Filtering
   -------------------------------------------------------------------------- */
function initScheduleRenderer() {
  const container = document.getElementById("schedule-container");
  const filterTabs = document.querySelectorAll(".schedule-controls .filter-tab");
  if (!container) return;

  // Determine current day for auto-highlighting (senin = 1, selasa = 2, kamis = 4 in JS getDay)
  const today = new Date().getDay();
  const dayMap = { 1: "senin", 2: "selasa", 4: "kamis" };
  const currentDayId = dayMap[today] || null;

  function renderSchedule(filter = "all") {
    container.innerHTML = "";

    const filteredDays = filter === "all"
      ? SCHEDULE_DATA
      : SCHEDULE_DATA.filter((day) => day.dayId === filter);

    filteredDays.forEach((day) => {
      const isToday = day.dayId === currentDayId;

      const column = document.createElement("div");
      column.className = `day-column ${isToday ? "is-today" : ""}`;

      const header = document.createElement("div");
      header.className = "day-column-header";
      header.innerHTML = `
        <div>
          <h3 class="day-name">${day.dayName}</h3>
          <span class="text-muted font-mono" style="font-size: 0.75rem;">${day.subtitle}</span>
        </div>
        ${isToday ? '<span class="day-badge">HARI INI</span>' : ''}
      `;

      const timeline = document.createElement("div");
      timeline.className = "day-timeline";

      day.courses.forEach((course) => {
        const slot = document.createElement("div");
        slot.className = "timeline-slot";
        slot.innerHTML = `
          <div class="slot-time tabular-nums">${course.time}</div>
          <div class="slot-title">${course.name}</div>
          <div class="slot-room-row">
            <span class="room-tag">RUANG ${course.room}</span>
            <span>·</span>
            <span class="font-mono text-muted">${course.code}</span>
          </div>
        `;
        timeline.appendChild(slot);
      });

      column.appendChild(header);
      column.appendChild(timeline);
      container.appendChild(column);
    });
  }

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      const filter = tab.getAttribute("data-filter") || "all";
      renderSchedule(filter);
    });
  });

  // Initial render
  renderSchedule("all");
}

/* --------------------------------------------------------------------------
   Members Directory Renderer
   -------------------------------------------------------------------------- */
function initMembersRenderer() {
  const container = document.getElementById("members-grid");
  if (!container) return;

  renderMembersList(MEMBERS_DATA);
}

function renderMembersList(list) {
  const container = document.getElementById("members-grid");
  const countEl = document.getElementById("search-count");
  if (!container) return;

  if (countEl) {
    countEl.textContent = `${list.length} / ${MEMBERS_DATA.length}`;
  }

  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 48px; text-align: center; color: var(--text-muted); border: 1px dashed var(--border); border-radius: var(--radius-md);">
        <p class="font-mono" style="font-size: 0.875rem;">Tidak ada mahasiswa yang cocok dengan kata kunci pencarian.</p>
      </div>
    `;
    return;
  }

  list.forEach((member) => {
    const card = document.createElement("article");
    card.className = "member-card";
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Lihat detail ${member.name}`);

    // Initials for avatar fallback
    const initials = member.name
      .split(" ")
      .slice(0, 2)
      .map((n) => n[0])
      .join("")
      .toUpperCase();

    const isPendingNim = member.nim === "0000";
    const nimDisplay = isPendingNim ? "NIM: 0000 (Pending)" : `NIM: ${member.nim}`;

    card.innerHTML = `
      <div class="member-avatar-wrap">
        <img
          src="${member.image}"
          alt="Foto ${member.name}"
          class="member-avatar"
          loading="lazy"
          decoding="async"
          referrerpolicy="no-referrer"
          onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\\'avatar-fallback\\'><span class=\\'avatar-initials\\'>${initials}</span><span class=\\'avatar-nim font-mono\\'>${member.nim}</span></div>';"
        />
      </div>
      <h3 class="member-name">${member.name}</h3>
      <div class="member-nim font-mono tabular-nums">${nimDisplay}</div>
      <div class="member-role">${member.role}</div>
    `;

    card.addEventListener("click", () => openMemberModal(member));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openMemberModal(member);
      }
    });

    container.appendChild(card);
  });
}

/* --------------------------------------------------------------------------
   Member Search Filter
   -------------------------------------------------------------------------- */
function initMemberSearch() {
  const searchInput = document.getElementById("member-search");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
      renderMembersList(MEMBERS_DATA);
      return;
    }

    const filtered = MEMBERS_DATA.filter((m) => {
      return (
        m.name.toLowerCase().includes(query) ||
        m.nim.toLowerCase().includes(query) ||
        m.role.toLowerCase().includes(query)
      );
    });

    renderMembersList(filtered);
  });
}

/* --------------------------------------------------------------------------
   Member Detail Modal Dialog
   -------------------------------------------------------------------------- */
function openMemberModal(member) {
  const dialog = document.getElementById("member-modal");
  const content = document.getElementById("modal-content");
  const closeBtn = document.getElementById("modal-close-btn");
  if (!dialog || !content) return;

  const initials = member.name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const isPendingNim = member.nim === "0000";
  const nimLabel = isPendingNim ? "NIM: 0000 (Dalam Proses Pendataan)" : `NIM: ${member.nim}`;

  content.innerHTML = `
    <div style="display: flex; gap: 20px; align-items: center; margin-bottom: 24px;">
      <div style="width: 80px; height: 80px; border-radius: var(--radius-sm); overflow: hidden; background: var(--bg-secondary); border: 1px solid var(--border); flex-shrink: 0;">
        <img
          src="${member.image}"
          alt="${member.name}"
          style="width: 100%; height: 100%; object-fit: cover;"
          onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\\'avatar-fallback\\' style=\\'height: 100%;\\'><span class=\\'avatar-initials\\' style=\\'font-size: 1.25rem;\\'>${initials}</span></div>';"
        />
      </div>
      <div>
        <h3 style="font-family: var(--font-display); font-size: 1.35rem; font-weight: 700; line-height: 1.2;">${member.name}</h3>
        <p class="font-mono text-cyan" style="font-size: 0.8125rem; margin-top: 4px;">${nimLabel}</p>
        <p class="text-muted" style="font-size: 0.8125rem;">${member.role}</p>
      </div>
    </div>
    
    <div style="border-top: 1px solid var(--border-subtle); padding-top: 16px; margin-bottom: 20px;">
      <h4 class="font-mono text-muted" style="font-size: 0.6875rem; letter-spacing: 0.1em; margin-bottom: 6px;">PROFIL & AKADEMIK</h4>
      <p style="font-size: 0.9375rem; color: #D1D5DB; line-height: 1.6;">${member.bio || "Mahasiswa aktif Program Studi Informatika Angkatan 2026 Universitas Nahdlatul Ulama Al Ghazali Cilacap."}</p>
    </div>

    <div style="border-top: 1px solid var(--border-subtle); padding-top: 16px; display: flex; gap: 16px;">
      <a href="${member.github || 'https://github.com'}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="padding: 8px 16px; min-height: 38px; font-size: 0.75rem;">
        GitHub ↗
      </a>
      <a href="${member.instagram || 'https://instagram.com'}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="padding: 8px 16px; min-height: 38px; font-size: 0.75rem;">
        Instagram ↗
      </a>
    </div>
  `;

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }

  if (closeBtn) {
    closeBtn.onclick = () => {
      if (typeof dialog.close === "function") dialog.close();
      else dialog.removeAttribute("open");
    };
  }

  dialog.onclick = (e) => {
    if (e.target === dialog) {
      if (typeof dialog.close === "function") dialog.close();
      else dialog.removeAttribute("open");
    }
  };
}

/* --------------------------------------------------------------------------
   The Craft (Accordion / Interactive Expand)
   -------------------------------------------------------------------------- */
function initCraftAccordion() {
  const craftItems = document.querySelectorAll(".craft-item");
  craftItems.forEach((item) => {
    const header = item.querySelector(".craft-item-header");
    if (!header) return;

    header.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      craftItems.forEach((other) => other.classList.remove("open"));
      if (!isOpen) {
        item.classList.add("open");
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Moments Gallery Renderer
   -------------------------------------------------------------------------- */
function initMomentsGallery() {
  const container = document.getElementById("moments-gallery");
  if (!container) return;

  container.innerHTML = "";

  MOMENTS_DATA.forEach((moment, index) => {
    const tile = document.createElement("div");
    tile.className = "moment-tile";
    tile.setAttribute("tabindex", "0");
    tile.setAttribute("role", "button");
    tile.setAttribute("aria-label", `Buka lightbox: ${moment.title}`);

    tile.innerHTML = `
      <img
        src="${moment.image}"
        alt="${moment.title}"
        class="moment-img"
        loading="lazy"
        decoding="async"
        referrerpolicy="no-referrer"
        onerror="this.onerror=null; this.src='data:image/svg+xml;charset=UTF-8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'400\\' height=\\'300\\' viewBox=\\'0 0 400 300\\'><rect width=\\'400\\' height=\\'300\\' fill=\\'%2316181B\\'/><text x=\\'50%\\' y=\\'50%\\' fill=\\'%2392969D\\' font-family=\\'sans-serif\\' font-size=\\'14\\' dominant-baseline=\\'middle\\' text-anchor=\\'middle\\'>MOMENTS // 2026</text></svg>';"
      />
      <div class="moment-overlay">
        <span class="moment-caption">${moment.title}</span>
        <span class="moment-meta">${moment.meta}</span>
      </div>
    `;

    tile.addEventListener("click", () => openLightbox(index));
    tile.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(index);
      }
    });

    container.appendChild(tile);
  });
}

/* --------------------------------------------------------------------------
   Lightbox Fullscreen Controller
   -------------------------------------------------------------------------- */
let activeLightboxIndex = 0;

function initLightbox() {
  const lightbox = document.getElementById("lightbox-modal");
  const closeBtn = document.getElementById("lightbox-close");
  const backdrop = document.getElementById("lightbox-backdrop");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");

  if (!lightbox) return;

  const closeLightbox = () => {
    lightbox.classList.remove("active");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (backdrop) backdrop.addEventListener("click", closeLightbox);

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      activeLightboxIndex = (activeLightboxIndex - 1 + MOMENTS_DATA.length) % MOMENTS_DATA.length;
      updateLightboxContent();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      activeLightboxIndex = (activeLightboxIndex + 1) % MOMENTS_DATA.length;
      updateLightboxContent();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft" && prevBtn) prevBtn.click();
    if (e.key === "ArrowRight" && nextBtn) nextBtn.click();
  });
}

function openLightbox(index) {
  const lightbox = document.getElementById("lightbox-modal");
  if (!lightbox) return;

  activeLightboxIndex = index;
  updateLightboxContent();

  lightbox.classList.add("active");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function updateLightboxContent() {
  const img = document.getElementById("lightbox-img");
  const caption = document.getElementById("lightbox-caption");
  if (!img || !caption) return;

  const moment = MOMENTS_DATA[activeLightboxIndex];
  if (!moment) return;

  img.src = moment.image;
  img.alt = moment.title;
  caption.textContent = `${moment.title} — ${moment.caption}`;
}

/* --------------------------------------------------------------------------
   Digital Wall Live Clock (WIB / UTC+7 Cilacap Time)
   -------------------------------------------------------------------------- */
function initDigitalWallClock() {
  const clockEl = document.getElementById("live-clock");
  if (!clockEl) return;

  function updateClock() {
    const now = new Date();
    const options = {
      timeZone: "Asia/Jakarta",
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    };
    const timeString = new Intl.DateTimeFormat("id-ID", options).format(now);
    clockEl.textContent = `${timeString} WIB`;
  }

  setInterval(updateClock, 1000);
  updateClock();
}

/* --------------------------------------------------------------------------
   ScrollSpy for Desktop Navigation Active States
   -------------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".desktop-nav .nav-link");

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            const href = link.getAttribute("href");
            if (href === `#${currentId}`) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          });
        }
      });
    },
    {
      rootMargin: "-25% 0px -65% 0px"
    }
  );

  sections.forEach((section) => observer.observe(section));
}
