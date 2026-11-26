// ============================================================
// Builds the repeating parts of the page from data.js.
// Uses textContent everywhere, so content can never break the HTML.
// ============================================================
{
  // small helper: el("a", { class: "btn", href: "#" }, "text", childNode, ...)
  const el = (tag, attrs = {}, ...kids) => {
    const node = document.createElement(tag);
    for (const [key, val] of Object.entries(attrs)) {
      if (val === undefined || val === null || val === "") continue;
      if (key === "style") Object.assign(node.style, val);
      else node.setAttribute(key, val);
    }
    for (const kid of kids) {
      if (kid === null || kid === undefined || kid === false) continue;
      node.append(typeof kid === "string" ? document.createTextNode(kid) : kid);
    }
    return node;
  };
  const external = (url) => (url && url.startsWith("http") ? { target: "_blank", rel: "noopener" } : {});

  // the dashed "GIF goes here" box, or the real GIF once data.js has one
  const media = (item, cls, bg) => {
    if (item.gif) {
      return el("div", { class: `${cls} has-gif` },
        el("img", { src: item.gif, alt: `${item.name} demo`, loading: "lazy" }));
    }
    const box = el("div", { class: cls, style: bg ? { background: bg } : undefined });
    box.innerHTML = '<svg viewBox="0 0 40 40" width="42" aria-hidden="true"><circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 13 L28 20 L16 27Z" fill="currentColor"/></svg>';
    return box;
  };

  // ---------- about: facts ----------
  document.getElementById("facts").append(
    ...FACTS.map((f) => el("div", { class: "fact" },
      el("span", { class: "fact-k" }, f.k),
      el("span", { class: "fact-v" }, f.v)))
  );

  // ---------- about: toolbox ----------
  document.getElementById("skills").append(
    ...SKILLS.map((g) => el("div", {},
      el("span", { class: "skill-label" }, g.label),
      el("div", { class: "chips" }, ...g.items.map((it) => el("span", { class: "chip" }, it)))))
  );

  // ---------- projects on the clothesline ----------
  document.getElementById("projects").append(
    ...PROJECTS.map((p) => {
      const links = el("div", { class: "card-links" },
        el("a", { class: "btn btn-dark", href: p.repo, ...external(p.repo) }, "Repo ↗"),
        p.demo ? el("a", { class: "btn btn-outline-dark", href: p.demo, ...external(p.demo) }, "Live demo ↗") : null);

      const card = el("article", { class: "card" },
        media(p, "media"),
        el("div", { class: "card-head" },
          el("h3", {}, p.name),
          el("span", { class: "card-note" }, p.note)),
        el("p", { class: "card-blurb" }, p.blurb),
        el("p", { class: "card-metric" }, p.metric),
        el("p", { class: "card-stack" }, p.stack),
        links);

      const peg = el("img", {
        class: "peg", src: p.peg, alt: "", "aria-hidden": "true",
        style: { width: `${p.pegW}px`, top: `${p.pegTop}px`, marginLeft: `${p.pegML}px` },
      });

      const sway = el("div", { class: "sway", style: { animationDelay: p.delay } }, peg, card);
      sway.style.setProperty("--r", p.tilt);
      return el("div", { class: "hang" }, sway);
    })
  );

  // ---------- workbench ----------
  document.getElementById("more").append(
    ...MORE.map((m) => el("article", { class: "bench-card", style: { transform: `rotate(${m.tilt})` } },
      el("span", { class: "tape-c", "aria-hidden": "true" }),
      el("div", { class: "card-head" },
        el("h3", {}, m.name),
        el("span", { class: "card-note" }, m.note)),
      el("p", { class: "card-blurb" }, m.blurb),
      el("a", { class: "bench-link", href: m.repo, ...external(m.repo) }, "Repo ↗")))
  );

  // ---------- just for fun polaroids ----------
  document.getElementById("fun").append(
    ...FUN.map((f) => {
      const inner = [
        f.gif
          ? el("div", { class: "polaroid-media" }, el("img", { src: f.gif, alt: `${f.name} demo`, loading: "lazy" }))
          : media(f, "polaroid-media", f.bg),
        el("span", { class: "polaroid-name" }, f.name),
        el("span", { class: "polaroid-blurb" }, f.blurb),
      ];
      const attrs = { class: "polaroid", style: { transform: `rotate(${f.tilt})` } };
      return f.link
        ? el("a", { ...attrs, href: f.link, ...external(f.link) }, ...inner)
        : el("div", attrs, ...inner);
    })
  );

  // ---------- links from SITE ----------
  document.querySelectorAll("[data-resume]").forEach((a) => (a.href = SITE.resume));
  const paper = document.getElementById("paper-link");
  if (SITE.paper) Object.assign(paper, { href: SITE.paper, target: "_blank", rel: "noopener" });
  else paper.hidden = true;

  document.getElementById("year").textContent = new Date().getFullYear();
}