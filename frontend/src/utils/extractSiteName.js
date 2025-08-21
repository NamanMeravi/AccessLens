export function extractSiteName(url) {
  const paresedUrl = new URL(url);
  const siteName = paresedUrl.hostname.replace("www.", "");
  return siteName;
}
