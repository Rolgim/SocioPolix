/* SocioPolix — application (routeur par hash, vues, quiz) */
(function () {
  "use strict";

  const DATA = window.IDEOLOGIES || [];
  const byId = Object.fromEntries(DATA.map((d) => [d.id, d]));
  const app = document.getElementById("app");

  /* ---------- Utilitaires ---------- */

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const norm = (s) => String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

  function shuffle(list) {
    const a = list.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const store = {
    get(key, fallback) {
      try {
        const v = localStorage.getItem(key);
        return v == null ? fallback : JSON.parse(v);
      } catch (e) {
        return fallback;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (e) { /* stockage indisponible : on continue sans */ }
    },
  };

  function initials(name) {
    const parts = name.replace(/[^\p{L}\s-]/gu, "").split(/[\s-]+/).filter((p) => p && p[0] === p[0].toUpperCase());
    if (!parts.length) return name.slice(0, 2).toUpperCase();
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  const ROMAN = { 17: "XVIIe", 18: "XVIIIe", 19: "XIXe", 20: "XXe", 21: "XXIe" };
  const century = (y) => Math.floor((y - 1) / 100) + 1;

  // Chronologie d'une idéologie : ses propres dates, plus celles d'autres fiches
  // qui la citent en 4e élément. Chaque entrée garde la liste des idéologies liées.
  function timelineOf(d) {
    const out = [];
    for (const o of DATA) {
      for (const [y, t, x, aussi = []] of o.histoire) {
        if (o === d || aussi.includes(d.id)) out.push({ y, t, x, ideos: [o, ...aussi.map((id) => byId[id])] });
      }
    }
    return out.sort((a, b) => a.y - b.y);
  }

  const tagsHtml = (list) =>
    list.map((o) => `<a class="tag" href="#/ideologie/${o.id}" style="--accent:${o.couleur}">${esc(o.nom)}</a>`).join(" ");

  /* ---------- Accueil ---------- */

  function viewHome() {
    document.title = "SocioPolix — Comprendre les idéologies politiques";
    const nbFig = DATA.reduce((n, d) => n + d.figures.length, 0);
    const nbEv = DATA.reduce((n, d) => n + d.histoire.length, 0);

    app.innerHTML = `
      <section class="hero">
        <p class="eyebrow">Atlas des idées politiques</p>
        <h1>Comprendre les idéologies qui ont façonné le monde</h1>
        <p class="lead">Libéralisme, socialisme, conservatisme, écologie… D’où viennent ces idées, que défendent-elles, qui les a portées et que leur reproche-t-on ? Lisez les fiches, puis testez-vous avec les quiz.</p>
        <div class="hero-actions">
          <a class="btn primary" href="#/quiz">Lancer un quiz</a>
          <a class="btn" href="#/frise">Parcourir la frise</a>
        </div>
        <p class="stats">
          <span><b>${DATA.length}</b>idéologies</span>
          <span><b>${nbFig}</b>figures</span>
          <span><b>${nbEv}</b>dates clés</span>
        </p>
      </section>

      <div class="section-head">
        <h2>Les idéologies</h2>
        <input class="search" id="search" type="search" placeholder="Chercher une idée, un nom, un livre…" aria-label="Rechercher dans les idéologies">
      </div>
      <div class="grid" id="grid"></div>
      <p class="empty" id="empty" hidden>Aucun résultat. Essayez un autre mot, par exemple « Marx », « marché » ou « nation ».</p>
    `;

    const grid = document.getElementById("grid");
    const empty = document.getElementById("empty");

    // Pour chaque idéologie : texte principal + éléments secondaires recherchables
    const index = DATA.map((d) => ({
      d,
      main: norm([d.nom, d.accroche, d.resume, d.naissance].join(" ")),
      extra: [
        ...d.figures.map((f) => f[0]),
        ...d.oeuvres.map((o) => `${o[0]} (${o[1]})`),
        ...d.courants.map((c) => c[0]),
        ...d.exemples.map((x) => `${x[1]} (${x[2]})`),
        ...[...d.partis.hier, ...d.partis.aujourdhui].map((x) => `${x[0]} (${x[1]})`),
        ...d.idees.map((i) => i[0]),
      ],
    }));

    function draw(query) {
      const q = norm(query.trim());
      const cards = [];
      for (const { d, main, extra } of index) {
        let hit = "";
        if (q) {
          const inMain = main.includes(q);
          const found = extra.find((x) => norm(x).includes(q));
          if (!inMain && !found) continue;
          if (found) hit = found;
        }
        cards.push(`
          <a class="card" href="#/ideologie/${d.id}" style="--accent:${d.couleur}">
            <span class="eyebrow">${esc(d.naissance)}</span>
            <h3>${esc(d.nom)}</h3>
            <p>${esc(d.accroche)}</p>
            ${hit ? `<span class="hit">↳ ${esc(hit)}</span>` : ""}
          </a>`);
      }
      grid.innerHTML = cards.join("");
      empty.hidden = cards.length > 0;
    }

    document.getElementById("search").addEventListener("input", (e) => draw(e.target.value));
    draw("");
  }

  /* ---------- Fiche d'une idéologie ---------- */

  function viewIdeo(d) {
    document.title = `${d.nom} — SocioPolix`;
    const i = DATA.indexOf(d);
    const prev = DATA[(i - 1 + DATA.length) % DATA.length];
    const next = DATA[(i + 1) % DATA.length];

    const sections = [
      ["idees", "Idées clés"],
      ["histoire", "Histoire"],
      ["exemples", "Exemples historiques"],
      ["figures", "Figures"],
      ["oeuvres", "Œuvres"],
      ["courants", "Courants"],
      ["partis", "Partis et mouvements"],
      ["critiques", "Critiques et débats"],
    ];

    app.innerHTML = `
      <article class="fiche" style="--accent:${d.couleur}">
        <a class="back" href="#/">← Toutes les idéologies</a>
        <header class="fiche-head">
          <p class="eyebrow">Apparition : ${esc(d.naissance)}</p>
          <h1>${esc(d.nom)}</h1>
          <p class="tagline">${esc(d.accroche)}</p>
          <p class="resume">${esc(d.resume)}</p>
          <div><a class="btn primary" href="#/quiz/${d.id}">Quiz sur ce thème</a></div>
        </header>

        <div class="toc" role="navigation" aria-label="Sections de la fiche">
          ${sections.map(([id, label]) => `<button type="button" data-target="s-${id}">${label}</button>`).join("")}
        </div>

        <section id="s-idees">
          <h2>Idées clés</h2>
          <div class="ideas">
            ${d.idees.map(([t, x]) => `<div class="idea"><h3>${esc(t)}</h3><p>${esc(x)}</p></div>`).join("")}
          </div>
        </section>

        <section id="s-histoire">
          <h2>Histoire</h2>
          <ol class="timeline">
            ${timelineOf(d).map((e) => {
              const others = e.ideos.filter((o) => o !== d);
              return `
              <li><span class="year">${e.y}</span>
                <div class="body"><h3>${esc(e.t)}</h3><p>${esc(e.x)}</p>
                ${others.length ? `<p class="shared">Aussi : ${tagsHtml(others)}</p>` : ""}</div></li>`;
            }).join("")}
          </ol>
        </section>

        <section id="s-exemples">
          <h2>Exemples historiques</h2>
          <p class="section-intro">Des moments où ces idées ont été mises en pratique, entièrement ou en partie.</p>
          <div class="cases">
            ${d.exemples.map(([when, t, where, x]) => `
              <div class="case">
                <p class="meta"><span>${esc(when)}</span><span>${esc(where)}</span></p>
                <h3>${esc(t)}</h3><p>${esc(x)}</p>
              </div>`).join("")}
          </div>
        </section>

        <section id="s-figures">
          <h2>Figures</h2>
          <div class="people">
            ${d.figures.map(([n, dates, role]) => `
              <div class="person">
                <span class="avatar" aria-hidden="true">${esc(initials(n))}</span>
                <div><h3>${esc(n)}</h3><span class="dates">${esc(dates)}</span><p>${esc(role)}</p></div>
              </div>`).join("")}
          </div>
        </section>

        <section id="s-oeuvres">
          <h2>Œuvres</h2>
          <ul class="books">
            ${d.oeuvres.map(([t, a, y]) => `
              <li><span class="year">${y}</span><div><cite>${esc(t)}</cite><span class="by">${esc(a)}</span></div></li>`).join("")}
          </ul>
        </section>

        <section id="s-courants">
          <h2>Courants</h2>
          <dl class="defs">
            ${d.courants.map(([n, x]) => `<div><dt>${esc(n)}</dt><dd>${esc(x)}</dd></div>`).join("")}
          </dl>
        </section>

        <section id="s-partis">
          <h2>Partis et mouvements</h2>
          <p class="section-intro">${esc(d.partis.note || "Les formations les plus proches de ces idées, hier et aujourd’hui.")}</p>
          <div class="parties">
            ${[["Hier", d.partis.hier], ["Aujourd’hui", d.partis.aujourdhui]].map(([label, list]) => `
              <div>
                <h3 class="parties-head">${label}</h3>
                <ul>
                  ${list.map(([n, where, when, x]) => `
                    <li><b>${esc(n)}</b><span class="meta"><span>${esc(where)}</span><span>${esc(when)}</span></span><p>${esc(x)}</p></li>`).join("")}
                </ul>
              </div>`).join("")}
          </div>
          <p class="fineprint">Rattacher un parti à une idéologie est toujours une simplification : les partis évoluent et mêlent plusieurs influences. Situation à la mi-2026.</p>
        </section>

        <section id="s-critiques">
          <h2>Critiques et débats</h2>
          <ul class="critiques">${d.critiques.map((c) => `<li>${esc(c)}</li>`).join("")}</ul>
        </section>

        <div class="cta">
          <div><h3>Vous avez tout retenu ?</h3><p>Idées, dates, figures, œuvres et partis en quelques questions.</p></div>
          <a class="btn primary" href="#/quiz/${d.id}">Faire le quiz</a>
        </div>

        <nav class="pager" aria-label="Autres idéologies">
          <a href="#/ideologie/${prev.id}">← Précédente<b>${esc(prev.nom)}</b></a>
          <a href="#/ideologie/${next.id}">Suivante →<b>${esc(next.nom)}</b></a>
        </nav>
      </article>
    `;

    app.querySelector(".toc").addEventListener("click", (e) => {
      const b = e.target.closest("button[data-target]");
      if (b) document.getElementById(b.dataset.target).scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  /* ---------- Frise chronologique ---------- */

  function viewFrise() {
    document.title = "Frise chronologique — SocioPolix";
    const events = DATA.flatMap((d) => d.histoire.map(([y, t, x, aussi = []]) => ({ y, t, x, d, ideos: [d, ...aussi.map((id) => byId[id])] }))).sort((a, b) => a.y - b.y);
    const active = new Set();

    app.innerHTML = `
      <header class="page-head">
        <p class="eyebrow">Frise chronologique</p>
        <h1>Trois siècles d’idées politiques</h1>
        <p class="lead">Toutes les dates clés réunies. Sélectionnez une ou plusieurs idéologies pour comparer leurs trajectoires.</p>
      </header>
      <div class="chips" id="chips" role="group" aria-label="Filtrer par idéologie">
        <button type="button" class="chip reset" data-id="" aria-pressed="true">Toutes</button>
        ${DATA.map((d) => `<button type="button" class="chip" data-id="${d.id}" aria-pressed="false" style="--accent:${d.couleur}">${esc(d.nom)}</button>`).join("")}
      </div>
      <div id="frise"></div>
    `;

    const out = document.getElementById("frise");
    const chips = document.getElementById("chips");

    function draw() {
      const list = events.filter((e) => !active.size || e.ideos.some((o) => active.has(o.id)));
      let html = "";
      let cur = null;
      for (const e of list) {
        const c = century(e.y);
        if (c !== cur) {
          if (cur !== null) html += "</ol>";
          html += `<h2 class="century">${ROMAN[c] || c + "e"} siècle</h2><ol class="timeline">`;
          cur = c;
        }
        html += `
          <li style="--accent:${e.d.couleur}"><span class="year" style="color:inherit">${e.y}</span>
            <div class="body"><h3>${esc(e.t)}</h3><p>${esc(e.x)}</p>
            <p class="shared">${tagsHtml(e.ideos)}</p></div></li>`;
      }
      if (cur !== null) html += "</ol>";
      out.innerHTML = html;
      chips.querySelectorAll(".chip").forEach((b) => {
        const on = b.dataset.id ? active.has(b.dataset.id) : active.size === 0;
        b.setAttribute("aria-pressed", String(on));
      });
    }

    chips.addEventListener("click", (e) => {
      const b = e.target.closest(".chip");
      if (!b) return;
      const id = b.dataset.id;
      if (!id) active.clear();
      else if (active.has(id)) active.delete(id);
      else active.add(id);
      draw();
    });
    draw();
  }

  /* ---------- Quiz : génération des questions ---------- */

  function buildPool(scope) {
    const scoped = scope === "all" ? DATA : [byId[scope]];
    const global = scope === "all";
    const allAuthors = [...new Set(DATA.flatMap((d) => d.oeuvres.map((o) => o[1])))];
    const allYears = [...new Set(DATA.flatMap((d) => d.histoire.map((h) => h[0])))];
    const hand = [];
    const gen = [];

    for (const d of scoped) {
      // Questions rédigées à la main
      for (const x of d.quiz) {
        hand.push({ q: x.q, options: shuffle(x.r), answer: x.r[0], e: x.e, ideo: d.id });
      }

      // Œuvre → auteur
      for (const [t, a, y] of d.oeuvres) {
        const wrong = shuffle(allAuthors.filter((o) => o !== a && !o.includes(a) && !a.includes(o))).slice(0, 3);
        gen.push({ q: "Qui a écrit cet ouvrage ?", ctx: `« ${t} » (${y})`, options: shuffle([a, ...wrong]), answer: a, e: `« ${t} » est publié en ${y} par ${a}.`, ideo: d.id });
      }

      // Événement → année (mauvaises réponses prises parmi les années proches)
      // (en quiz thématique, on inclut les dates partagées avec d'autres fiches)
      for (const { y, t, x } of global ? d.histoire.map(([y, t, x]) => ({ y, t, x })) : timelineOf(d)) {
        const near = allYears.filter((v) => v !== y).sort((a, b) => Math.abs(a - y) - Math.abs(b - y)).slice(0, 8);
        const opts = [y, ...shuffle(near).slice(0, 3)].sort((a, b) => a - b).map(String);
        gen.push({ q: "En quelle année ?", ctx: t, options: opts, answer: String(y), e: `${y} — ${x}`, ideo: d.id });
      }

      // Description → figure (mauvaises réponses dans la même idéologie)
      for (const [n, dates, role] of d.figures) {
        const wrong = shuffle(d.figures.filter((f) => f[0] !== n)).slice(0, 3).map((f) => f[0]);
        if (wrong.length < 3) continue;
        gen.push({ q: "De qui s’agit-il ?", ctx: role, options: shuffle([n, ...wrong]), answer: n, e: `${n} (${dates}).`, ideo: d.id });
      }

      if (global) {
        const others = DATA.filter((o) => o.id !== d.id && !d.proches.includes(o.id) && !o.proches.includes(d.id)).map((o) => o.nom);
        // Figure → idéologie
        for (const [n, dates, role] of d.figures) {
          gen.push({ q: `À quelle idéologie associe-t-on principalement ${n} ?`, options: shuffle([d.nom, ...shuffle(others).slice(0, 3)]), answer: d.nom, e: `${n} (${dates}). ${role}`, ideo: d.id });
        }
        // Parti ou mouvement → idéologie
        for (const [n, where, when, x] of [...d.partis.hier, ...d.partis.aujourdhui]) {
          gen.push({ q: "De quelle idéologie ce parti ou mouvement est-il le plus proche ?", ctx: `${n} (${where}, ${when})`, options: shuffle([d.nom, ...shuffle(others).slice(0, 3)]), answer: d.nom, e: `${n} : ${x}`, ideo: d.id });
        }
        // Courant → idéologie
        for (const [n, x] of d.courants) {
          gen.push({ q: "De quelle famille politique ce courant relève-t-il ?", ctx: n, options: shuffle([d.nom, ...shuffle(others).slice(0, 3)]), answer: d.nom, e: `${n} : ${x}`, ideo: d.id });
        }
      }
    }
    return { hand, gen };
  }

  function poolSize(scope) {
    const p = buildPool(scope);
    return p.hand.length + p.gen.length;
  }

  function pickQuestions(scope, n) {
    const { hand, gen } = buildPool(scope);
    const h = shuffle(hand);
    const g = shuffle(gen);
    const nHand = Math.min(h.length, Math.ceil(n * 0.4));
    const picked = [...h.slice(0, nHand), ...g.slice(0, n - nHand)];
    // Complète avec les questions rédigées restantes si le générateur n'a pas suffi
    for (let i = nHand; picked.length < n && i < h.length; i++) picked.push(h[i]);
    return shuffle(picked);
  }

  /* ---------- Quiz : interface ---------- */

  let quiz = null; // état de la partie en cours

  const scopeLabel = (s) => (s === "all" ? "Toutes les idéologies" : byId[s].nom);

  function viewQuizSetup(scope) {
    quiz = null;
    document.title = "Quiz — SocioPolix";
    let count = store.get("sp-count", 10);
    if (![5, 10, 20].includes(count)) count = 10;

    app.innerHTML = `
      <div class="quiz">
        <header class="page-head">
          <p class="eyebrow">Quiz</p>
          <h1>Testez vos connaissances</h1>
          <p class="lead">Choisissez un thème et une durée. Chaque réponse est suivie d’une explication, et les questions changent à chaque partie.</p>
        </header>
        <form class="panel" id="setup">
          <div class="field">
            <label for="scope">Thème</label>
            <select id="scope">
              <option value="all">Toutes les idéologies</option>
              ${DATA.map((d) => `<option value="${d.id}">${esc(d.nom)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <span class="label" id="count-label">Nombre de questions</span>
            <div class="seg" role="group" aria-labelledby="count-label">
              ${[5, 10, 20].map((n) => `<button type="button" data-n="${n}" aria-pressed="${n === count}">${n}</button>`).join("")}
            </div>
          </div>
          <button class="btn primary" type="submit">Commencer</button>
          <p class="best" id="best"></p>
        </form>
      </div>
    `;

    const sel = document.getElementById("scope");
    sel.value = scope;
    const best = document.getElementById("best");

    function showBest() {
      const b = store.get("sp-best", {})[sel.value];
      best.textContent = b ? `Meilleur score sur ce thème : ${b.score}/${b.total}` : "";
    }
    sel.addEventListener("change", showBest);
    showBest();

    app.querySelector(".seg").addEventListener("click", (e) => {
      const b = e.target.closest("button[data-n]");
      if (!b) return;
      count = Number(b.dataset.n);
      store.set("sp-count", count);
      app.querySelectorAll(".seg button").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
    });

    document.getElementById("setup").addEventListener("submit", (e) => {
      e.preventDefault();
      startQuiz(sel.value, count);
    });
  }

  function startQuiz(scope, count) {
    const questions = pickQuestions(scope, count);
    quiz = { scope, count, questions, i: 0, score: 0, misses: [], answered: false };
    renderQuestion();
  }

  function renderQuestion() {
    const { questions, i, scope } = quiz;
    const q = questions[i];
    const d = byId[q.ideo];
    quiz.answered = false;
    document.title = `Question ${i + 1}/${questions.length} — SocioPolix`;

    app.innerHTML = `
      <div class="quiz" style="--accent:${scope === "all" ? "var(--brand)" : d.couleur}">
        <div class="panel">
          <div class="progress">
            <span>Question ${i + 1} / ${questions.length}</span>
            <span class="track" aria-hidden="true"><i style="width:${(i / questions.length) * 100}%"></i></span>
            <span>Score ${quiz.score}</span>
          </div>
          <p class="eyebrow q-topic">${esc(scopeLabel(scope))}</p>
          <h1 class="q-text" id="q-text">${esc(q.q)}</h1>
          ${q.ctx ? `<p class="q-ctx">${esc(q.ctx)}</p>` : ""}
          <div class="options" role="group" aria-labelledby="q-text">
            ${q.options.map((o, k) => `<button type="button" class="opt" data-k="${k}"><kbd>${k + 1}</kbd><span>${esc(o)}</span></button>`).join("")}
          </div>
          <div class="feedback" id="feedback" aria-live="polite"></div>
          <div class="q-actions">
            <button type="button" class="linkish" id="quit">Abandonner</button>
            <span class="hint" id="hint">Touches 1 à ${q.options.length} pour répondre</span>
          </div>
        </div>
      </div>
    `;

    app.querySelector(".options").addEventListener("click", (e) => {
      const b = e.target.closest(".opt");
      if (b) answer(Number(b.dataset.k));
    });
    document.getElementById("quit").addEventListener("click", () => viewQuizSetup(scope));
  }

  function answer(k) {
    if (!quiz || quiz.answered) return;
    const q = quiz.questions[quiz.i];
    if (k < 0 || k >= q.options.length) return;
    quiz.answered = true;
    const chosen = q.options[k];
    const ok = chosen === q.answer;
    if (ok) quiz.score++;
    else quiz.misses.push({ q, chosen });

    app.querySelectorAll(".opt").forEach((b, idx) => {
      b.disabled = true;
      if (q.options[idx] === q.answer) b.classList.add("right");
      else if (idx === k) b.classList.add("wrong");
      else b.classList.add("dim");
    });

    const last = quiz.i === quiz.questions.length - 1;
    document.getElementById("feedback").innerHTML = `
      <p class="verdict ${ok ? "ok" : "ko"}">${ok ? "Bonne réponse." : `Raté — la bonne réponse était : ${esc(q.answer)}.`}</p>
      <p>${esc(q.e)}</p>`;
    const hint = document.getElementById("hint");
    hint.outerHTML = `<button type="button" class="btn primary" id="next">${last ? "Voir mon score" : "Question suivante"}</button>`;
    const next = document.getElementById("next");
    next.addEventListener("click", nextQuestion);
    next.focus();
  }

  function nextQuestion() {
    if (!quiz || !quiz.answered) return;
    quiz.i++;
    if (quiz.i >= quiz.questions.length) renderScore();
    else renderQuestion();
    window.scrollTo(0, 0);
  }

  function renderScore() {
    const { score, questions, misses, scope, count } = quiz;
    const total = questions.length;
    quiz = null;
    document.title = `Score ${score}/${total} — SocioPolix`;

    const bests = store.get("sp-best", {});
    const prev = bests[scope];
    const record = !prev || score / total > prev.score / prev.total || (score / total === prev.score / prev.total && total > prev.total);
    if (record) {
      bests[scope] = { score, total };
      store.set("sp-best", bests);
    }

    const ratio = score / total;
    const msg =
      ratio === 1 ? "Sans faute. Vous pourriez donner le cours."
      : ratio >= 0.8 ? "Très solide. Il ne reste que quelques détails à réviser."
      : ratio >= 0.5 ? "Bonne base. Les fiches ci-dessous vous aideront à combler les trous."
      : "C’est en se trompant qu’on apprend : relisez les fiches liées, puis retentez.";

    app.innerHTML = `
      <div class="quiz">
        <div class="panel score">
          <p class="eyebrow">${esc(scopeLabel(scope))}</p>
          <h1 class="big">${score}<small> / ${total}</small></h1>
          <p>${msg}</p>
          ${record && prev ? `<p class="muted">Nouveau record sur ce thème (précédent : ${prev.score}/${prev.total}).</p>` : ""}
          <div class="score-actions">
            <button type="button" class="btn primary" id="again">Rejouer</button>
            <a class="btn" href="#/quiz" id="change">Changer de thème</a>
            ${scope !== "all" ? `<a class="btn" href="#/ideologie/${scope}">Relire la fiche</a>` : ""}
          </div>
        </div>
        ${misses.length ? `
          <section class="review">
            <h2>À revoir</h2>
            <ol>
              ${misses.map(({ q, chosen }) => `
                <li>
                  <p class="rq">${esc(q.q)}${q.ctx ? ` — ${esc(q.ctx)}` : ""}</p>
                  <p class="ra">Votre réponse : <s>${esc(chosen)}</s> · Bonne réponse : <b>${esc(q.answer)}</b></p>
                  <p class="re">${esc(q.e)}</p>
                  <a href="#/ideologie/${q.ideo}">Fiche : ${esc(byId[q.ideo].nom)} →</a>
                </li>`).join("")}
            </ol>
          </section>` : ""}
      </div>
    `;

    document.getElementById("again").addEventListener("click", () => {
      startQuiz(scope, count);
      window.scrollTo(0, 0);
    });
    document.getElementById("change").addEventListener("click", (e) => {
      // Même hash que la route courante : on redessine à la main
      if (location.hash.replace(/^#\/?/, "") === "quiz") {
        e.preventDefault();
        viewQuizSetup("all");
        window.scrollTo(0, 0);
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (!quiz || e.ctrlKey || e.metaKey || e.altKey) return;
    if (/^[1-9]$/.test(e.key) && !quiz.answered) {
      e.preventDefault();
      answer(Number(e.key) - 1);
    }
  });

  /* ---------- Routeur ---------- */

  function viewNotFound() {
    document.title = "Page introuvable — SocioPolix";
    app.innerHTML = `
      <header class="page-head">
        <p class="eyebrow">Erreur 404</p>
        <h1>Cette page n’existe pas</h1>
        <p class="lead">Le lien est peut-être incomplet.</p>
        <div><a class="btn primary" href="#/">Retour aux idéologies</a></div>
      </header>`;
  }

  function route() {
    const [page, arg] = decodeURIComponent(location.hash.replace(/^#\/?/, "")).split("/");
    quiz = null;
    let nav = "";

    if (!page) { viewHome(); nav = "home"; }
    else if (page === "ideologie" && byId[arg]) { viewIdeo(byId[arg]); nav = "home"; }
    else if (page === "frise") { viewFrise(); nav = "frise"; }
    else if (page === "quiz" && (!arg || byId[arg])) { viewQuizSetup(arg || "all"); nav = "quiz"; }
    else viewNotFound();

    document.querySelectorAll("nav a[data-nav]").forEach((a) => {
      if (a.dataset.nav === nav) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
    window.scrollTo(0, 0);
  }

  /* ---------- Thème clair / sombre ---------- */

  document.getElementById("theme").addEventListener("click", () => {
    const root = document.documentElement;
    const current = root.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    syncThemeColor();
    try { localStorage.setItem("sp-theme", next); } catch (e) { /* ignoré */ }
  });

  // Couleur de la barre système du téléphone, alignée sur le fond de page
  function syncThemeColor() {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = getComputedStyle(document.documentElement).getPropertyValue("--bg").trim();
  }
  syncThemeColor();
  matchMedia("(prefers-color-scheme: dark)").addEventListener("change", syncThemeColor);

  window.addEventListener("hashchange", route);
  route();

  // Mode hors ligne et installation (indisponible quand la page est ouverte en file://)
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
})();
