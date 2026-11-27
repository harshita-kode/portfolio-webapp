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
  { k: "studying",       v: "M.Tech in AI Systems · NUS-ISS, Singapore" },
  { k: "working across", v: "Deep learning, LLMs and agents, RAG, computer vision and classic ML" },
  { k: "curious about",  v: "How AI agents plan, use tools and check their own work" },
  { k: "favourite part", v: "The moment a model turns into something people can click on" },
  { k: "before this",    v: "B.Tech CS (9.54 CGPA), a full-stack internship and an IEEE paper" },
  { k: "looking for",    v: "An AI / ML internship in Singapore from March 2027" },
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
    metric: "89.4% accuracy · 0.83 macro F1 across defect types",
    stack: "PyTorch · LangGraph · ChromaDB · FastAPI",
    repo: GH + "wafer-lens", demo: "", gif: "assets/gifs/wafer-lens.gif",
    tilt: "-1.4deg", delay: "0s",
    peg: "assets/peg1.png", pegW: 67, pegTop: -130, pegML: -40,
  },
  {
    name: "Hybrid IDS", note: "group project",
    blurb: "XGBoost classifies known attacks; uncertain traffic is checked against a knowledge base and an autoencoder to catch attack types the classifier never trained on. SHAP explains every alert.",
    metric: "99.95% accuracy on known attacks · 99.8% of unseen attack types flagged",
    stack: "XGBoost · Autoencoder · KNN · SHAP · CIC-IDS2017",
    repo: GH + "Hybrid-Network-Intrusion-Detection", demo: "", gif: "assets/gifs/hybrid-IDS.gif",
    tilt: "-1deg", delay: "-3.4s",
    peg: "assets/peg3.png", pegW: 60, pegTop: -118, pegML: -35,
  },
  {
    name: "Echo Vision", note: "personal project",
    blurb: "A camera assistant for blind and low-vision users. BLIP describes what the camera sees and answers spoken questions about it, served through FastAPI and read aloud in the browser. Decoding strategies benchmarked on COCO.",
    metric: "CIDEr 1.25 on COCO · beam search +22% over greedy · prompting −11%",
    stack: "BLIP · PyTorch · Hugging Face · FastAPI · Docker",
    repo: GH + "Echo-Vision-Assistant", demo: "", gif: "assets/gifs/echo-vision.gif",
    tilt: "1.5deg", delay: "-1.2s",
    peg: "assets/peg1.png", pegW: 60, pegTop: -118, pegML: -35,
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