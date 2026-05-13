type Category =
  | "cat-math"
  | "cat-sci"
  | "cat-eng"
  | "cat-thai"
  | "cat-soc"
  | "cat-health"
  | "cat-art"
  | "cat-work";

type DayKey = "จันทร์" | "อังคาร" | "พุธ" | "พฤหัสบดี" | "ศุกร์";

interface Subject {
  subject: string;
  teacher: string;
  room: string;
  cat: Category;
}

interface Period {
  num: number;
  start: [number, number];
  end: [number, number];
}

interface PeriodWithSubject extends Period, Subject {}

const PERIODS: Period[] = [
  { num: 1, start: [8, 30],  end: [9, 20]  },
  { num: 2, start: [9, 20],  end: [10, 10] },
  { num: 3, start: [10, 10], end: [11, 0]  },
  { num: 4, start: [11, 0],  end: [11, 50] },
  // lunch 11:50 - 12:50
  { num: 5, start: [12, 50], end: [13, 40] },
  { num: 6, start: [13, 40], end: [14, 30] },
  { num: 7, start: [14, 30], end: [15, 20] },
  { num: 8, start: [15, 20], end: [16, 10] },
];

// null = คาบที่ไม่แสดง (ชุมนุม, homeroom, ค้นคว้า, จิตอาสา, แนะแนว, เวรอาหาร, ประชุม)
const SCHEDULE: Record<DayKey, (Subject | null)[]> = {
  จันทร์: [
    { subject: "EngSME",       teacher: "แก่นกานต์",  room: "333", cat: "cat-eng"  },
    { subject: "EngSME",       teacher: "แก่นกานต์",  room: "333", cat: "cat-eng"  },
    { subject: "ภาษาไทย",      teacher: "เกียรติสุดา", room: "333", cat: "cat-thai" },
    null, // ค้นคว้า
    { subject: "สังคมศึกษา",  teacher: "ประพาก",           room: "333", cat: "cat-soc"  },
    { subject: "ชีววิทยา",     teacher: "ยุทธพงษ์",   room: "333", cat: "cat-sci"  },
    { subject: "ชีววิทยา",     teacher: "ยุทธพงษ์",   room: "333", cat: "cat-sci"  },
    null, // จิตอาสา
  ],
  อังคาร: [
    { subject: "สังคมศึกษา",        teacher: "ประพาก",         room: "333", cat: "cat-soc"  },
    null, // แนะแนว
    { subject: "English 3 (ฟัง–พูด)", teacher: "",         room: "333", cat: "cat-eng"  },
    { subject: "English 3 (ฟัง–พูด)", teacher: "",         room: "333", cat: "cat-eng"  },
    null, // ค้นคว้า
    { subject: "คณิตศาสตร์",          teacher: "พันธุ์นิภา", room: "333", cat: "cat-math" },
    { subject: "คณิตศาสตร์เพิ่มเติม",        teacher: "อัจฉรา",   room: "333", cat: "cat-math" },
    { subject: "คณิตศาสตร์เพิ่มเติม",        teacher: "อัจฉรา",   room: "333", cat: "cat-math" },
  ],
  พุธ: [
    { subject: "สุขศึกษาและพลศึกษา",   teacher: "สุวิท",     room: "โรงยิม", cat: "cat-health" },
    { subject: "เคมี",     teacher: "จิรารัตน์", room: "333",    cat: "cat-sci"    },
    { subject: "เคมี",     teacher: "จิรารัตน์", room: "333",    cat: "cat-sci"    },
    { subject: "ชีววิทยา", teacher: "ยุทธพงษ์",  room: "333",    cat: "cat-sci"    },
    { subject: "ฟิสิกส์",  teacher: "รังสิมา",   room: "333",    cat: "cat-sci"    },
    { subject: "ดนตรี",    teacher: "นิธิภูมิ",  room: "312",    cat: "cat-art"  },
    null, // homeroom
    null, // ชุมนุม
  ],
  พฤหัสบดี: [
    { subject: "การงานอาชีพ",       teacher: "เกศราภรณ์", room: "511", cat: "cat-work" },
    { subject: "การงานอาชีพ",       teacher: "เกศราภรณ์", room: "511", cat: "cat-work" },
    { subject: "คณิตศาสตร์เพิ่มเติม", teacher: "อัจฉรา",   room: "333", cat: "cat-math" },
    { subject: "ภาษาไทย",       teacher: "เกียรติสุดา", room: "333", cat: "cat-thai" },
    { subject: "วิทยาการคำนวณ",       teacher: "ชัยยศ",     room: "721", cat: "cat-sci"  },
    { subject: "เคมี",          teacher: "จิรารัตน์", room: "333", cat: "cat-sci"  },
    { subject: "ฟิสิกส์",       teacher: "รังสิมา",   room: "333", cat: "cat-sci"  },
    null, // ค้นคว้า
  ],
  ศุกร์: [
    { subject: "คณิตศาสตร์เพิ่มเติม", teacher: "อัจฉรา",    room: "333", cat: "cat-math" },
    { subject: "ฟิสิกส์",       teacher: "รังสิมา",   room: "333", cat: "cat-sci"  },
    { subject: "ฟิสิกส์",       teacher: "รังสิมา",   room: "333", cat: "cat-sci"  },
    null, // เวรอาหาร/จิตอาสา
    { subject: "อังกฤษ",        teacher: "แก่นกานต์", room: "333", cat: "cat-eng"  },
    { subject: "อังกฤษ",        teacher: "แก่นกานต์", room: "333", cat: "cat-eng"  },
    { subject: "คณิตศาสตร์",    teacher: "พันธุ์นิภา", room: "333", cat: "cat-math" },
    null, // ประชุม
  ],
};

const DAYS: DayKey[] = ["จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์"];

const JS_DAY_MAP: Record<number, DayKey> = {
  1: "จันทร์",
  2: "อังคาร",
  3: "พุธ",
  4: "พฤหัสบดี",
  5: "ศุกร์",
};

const CAT_LABELS: Record<Category, string> = {
  "cat-math":   "คณิตศาสตร์",
  "cat-sci":    "วิทยาศาสตร์และเทคโนโลยี",
  "cat-eng":    "ภาษาอังกฤษ",
  "cat-thai":   "ภาษาไทย",
  "cat-soc":    "สังคมศึกษา",
  "cat-health": "สุขศึกษาและพลศึกษา",
  "cat-art":    "ศิลปะ",
  "cat-work":   "การงานอาชีพ",
};

// ── helpers ──────────────────────────────────────────────

function padTime(h: number, m: number): string {
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

function toMinutes(h: number, m: number): number {
  return h * 60 + m;
}

function getCurrentPeriod(now: Date): number | null {
  const nowMin = toMinutes(now.getHours(), now.getMinutes());
  for (const p of PERIODS) {
    if (nowMin >= toMinutes(...p.start) && nowMin < toMinutes(...p.end)) {
      return p.num;
    }
  }
  return null;
}

function getTodayKey(): DayKey | null {
  return JS_DAY_MAP[new Date().getDay()] ?? null;
}

// ── state ─────────────────────────────────────────────────

let selectedDay: DayKey = getTodayKey() ?? "จันทร์";

// ── render ────────────────────────────────────────────────

function renderTabs(): void {
  const tabsEl = document.getElementById("dayTabs")!;
  tabsEl.innerHTML = "";
  const today = getTodayKey();

  for (const day of DAYS) {
    const btn = document.createElement("button");
    btn.className = [
      "day-tab",
      day === today ? "today-tab" : "",
      day === selectedDay ? "active" : "",
    ].filter(Boolean).join(" ");
    btn.textContent = day;
    btn.addEventListener("click", () => { selectedDay = day; render(); });
    tabsEl.appendChild(btn);
  }
}

function renderPeriods(): void {
  const grid = document.getElementById("periodsGrid")!;
  grid.innerHTML = "";

  const today = getTodayKey();
  const currentP = selectedDay === today ? getCurrentPeriod(new Date()) : null;
  const dayData = SCHEDULE[selectedDay] ?? [];

  const shown: PeriodWithSubject[] = dayData
    .map((s, i) => (s ? { ...PERIODS[i]!, ...s } : null))
    .filter((x): x is PeriodWithSubject => x !== null);

  if (!shown.length) {
    grid.innerHTML = '<div class="empty-day">ไม่มีวิชาเรียนวันนี้ 🎉</div>';
    return;
  }

  shown.forEach((p, idx) => {
    const card = document.createElement("div");
    card.className = "period-card" + (p.num === currentP ? " current" : "");
    card.style.animationDelay = `${idx * 40}ms`;

    card.innerHTML = `
      <div class="period-num">
        <div class="p-num">${p.num}</div>
        <div class="p-time">${padTime(...p.start)}<br>${padTime(...p.end)}</div>
      </div>
      <div class="period-info">
        <div class="subject-name">${p.subject}</div>
        <div class="subject-meta">
          ${p.teacher ? `<span class="teacher-name">${p.teacher}</span>` : ""}
          <span class="room-tag">${p.room}</span>
          <span class="cat-tag ${p.cat}">${CAT_LABELS[p.cat]}</span>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function render(): void {
  renderTabs();
  renderPeriods();
}

// ── clock ─────────────────────────────────────────────────

function updateClock(): void {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");

  document.getElementById("clock")!.textContent = `${hh}:${mm}:${ss}`;

  const today = getTodayKey();
  const subjectEl = document.getElementById("now-subject")!;

  if (selectedDay === today) {
    const cp = getCurrentPeriod(now);
    if (cp) {
      const s = SCHEDULE[today!]?.[cp - 1];
      subjectEl.textContent = s ? `คาบ ${cp} · ${s.subject}` : `คาบ ${cp} · (ไม่มีวิชา)`;
    } else {
      subjectEl.textContent = "นอกเวลาเรียน";
    }
  } else {
    subjectEl.textContent = "–";
  }
}

// ── init ──────────────────────────────────────────────────

render();
updateClock();
setInterval(updateClock, 1000);
