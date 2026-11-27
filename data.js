// ============================================================
// All the site's content lives here.
// To add a GIF: put the file in assets/gifs/ and set gif: "assets/gifs/name.gif"
// To add a live demo: set demo: "https://..." (the button only shows when it's set)
// ============================================================

const SITE = {
  resume: "assets/resume.pdf",
  paper: "",            // link to your IEEE DLCV paper, e.g. "https://ieeexplore.ieee.org/document/..."
};

const GH = "https://github.com/harshita-kode/";

const FACTS = [
  { k: "now",         v: "M.Tech, AI Systems · NUS-ISS, Singapore" },
  { k: "before",      v: "B.Tech, Computer Science · CGPA 9.54" },
  { k: "shipped",     v: "Email + OTP modules in a live product, Finsentsis" },
  { k: "published",   v: "First-author paper at IEEE DLCV 2025" },
  { k: "in 24 hours", v: "A working prototype at J.P. Morgan Code for Good" },
  { k: "next",        v: "Credit-bearing internship from March 2027" },
];

const SKILLS = [
  { label: "AI & deep learning", items: ["PyTorch", "Computer vision", "BLIP-2", "NLP", "Multimodal AI", "Explainable AI"] },
  { label: "GenAI & LLMs",       items: ["RAG", "LangGraph", "ChromaDB", "Embeddings", "Prompt engineering"] },
  { label: "Machine learning",   items: ["scikit-learn", "XGBoost", "Ensembles", "Anomaly detection"] },
  { label: "Backend & data",     items: ["FastAPI", "Node.js", "REST APIs", "SQL", "Pandas"] },
  { label: "Languages",          items: ["Python", "Java", "TypeScript", "JavaScript"] },
];

// Main projects, hung on the clothesline (one real peg each).
// peg* values line each peg up with the rope; leave them as they are.
const PROJECTS = [
  {
    name: "WaferLens", note: "my favourite",
    blurb: "A wafer-defect analyst. A CNN classifies WM-811K wafer maps, RAG pulls similar past cases, and an LLM writes a cited report.",
    metric: "89.4% test accuracy · 0.832 macro F1",
    stack: "PyTorch · LangGraph · ChromaDB · FastAPI",
    repo: GH + "wafer-lens", demo: "", gif: "assets/gifs/wafer-lens.gif",
    tilt: "-1.4deg", delay: "0s",
    peg: "assets/peg1.png", pegW: 67, pegTop: -130, pegML: -40,
  },
  {
    name: "Echo-Vision", note: "sees & speaks",
    blurb: "Describes a scene out loud. BLIP-2 turns what the camera sees into plain-language captions, served through FastAPI.",
    metric: "Vision-language model",
    stack: "BLIP-2 · PyTorch · FastAPI",
    repo: GH + "Echo-Vision-Assistant", demo: "", gif: "",
    tilt: "1.2deg", delay: "-1.8s",
    peg: "assets/peg2.png", pegW: 74, pegTop: -123, pegML: -30,
  },
  {
    name: "Hybrid IDS", note: "group project",
    blurb: "Catches known and never-seen-before network attacks with an Isolation Forest ensemble, and explains why each alert fired.",
    metric: "Explainable alerts",
    stack: "scikit-learn · XGBoost · Isolation Forest",
    repo: GH + "Hybrid-Network-Intrusion-Detection", demo: "", gif: "",
    tilt: "-1deg", delay: "-3.4s",
    peg: "assets/peg3.png", pegW: 60, pegTop: -118, pegML: -35,
  },
];

const MORE = [
  {
    name: "Adaptive Meal Planner", note: "group project", tilt: "-.8deg",
    repo: "https://github.com/anagha253/Intelligent-Adaptive-Meal-Planner",
    blurb: "Plans meals around nutrition, dietary needs and a real grocery budget, and re-plans as those change. I built the data pipeline that matches recipes to Singapore grocery prices.",
  },
  {
    name: "NodeMail", note: "backend, from scratch", tilt: ".8deg",
    repo: "https://github.com/harshita-kode/smtp-server",
    blurb: "An email server built on raw TCP sockets, with DNS MX lookup, DKIM signing and spam filtering.",
  },
];

const FUN = [
  { name: "TXT photobooth",   blurb: "A Tomorrow X Together themed photobooth site", link: GH + "perfect-storm-photobooth", gif: "assets/gifs/photobooth.gif", bg: "#F9D3EC", tilt: "-3deg" },
  { name: "Cocktail recipes", blurb: "Search and shake: an EJS recipe app",          link: GH + "Cocktail-Recipe", gif: "assets/gifs/cocktail.gif", bg: "#FFE7A8", tilt: "2deg" },
  { name: "Catch the button",     blurb: "It runs from your cursor. Catch it for an oof and a surprise", link: GH + "button_click", gif: "assets/gifs/click-me.gif", bg: "#D8F0C4", tilt: "2.5deg" },
  { name: "URL shortener",    blurb: "Tiny links, Node.js",                          link: GH + "url_shortner",    gif: "assets/gifs/url-shortener.gif", bg: "#CFE6FF", tilt: "-1.5deg" },
];