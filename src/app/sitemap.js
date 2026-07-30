export default function sitemap() {
  const base = "https://top-ten-nails-spa.ductnguyen3112.chatgpt.site";
  return ["", "/services", "/gallery", "/about", "/contact"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
