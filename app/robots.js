export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://remoteworksecure.vercel.app/sitemap.xml",
  };
}
