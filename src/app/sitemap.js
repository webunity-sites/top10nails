export default function sitemap() {
  const base = "https://www.top10nailsspa.com";
  return ["", "/services", "/services/featured", "/gallery", "/about", "/contact"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
