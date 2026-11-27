import "./globals.css";

// Lesson: metadata in layout.jsx is the site-wide SEO default.
// Every article page overrides title and description with its own.
export const metadata = {
  title: "RemoteWorkSecure — Cybersecurity for Remote Workers",
  description:
    "Practical cybersecurity guides for remote workers and freelancers: VPNs, password managers and public Wi-Fi safety.",
  metadataBase: new URL("https://remoteworksecure.vercel.app"),
  alternates: { canonical: "https://remoteworksecure.vercel.app" },
  openGraph: {
    title: "RemoteWorkSecure — Cybersecurity for Remote Workers",
    description:
      "Practical cybersecurity guides for remote workers and freelancers: VPNs, password managers and public Wi-Fi safety.",
    url: "https://remoteworksecure.vercel.app",
    siteName: "RemoteWorkSecure",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RemoteWorkSecure — Cybersecurity for Remote Workers",
    description:
      "Practical cybersecurity guides for remote workers and freelancers.",
  },
};

export default function RootLayout({ children }) {
  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <html lang="en">
      <body>
        <div className="topbar">
          <div className="topbar-inner">
            <span>{today}</span>
            <span>UK &amp; US &middot; Free guides</span>
          </div>
        </div>
        <header className="masthead">
          <a href="/" className="logo">
            RemoteWork<span>Secure</span>
          </a>
          <p className="tagline">The remote work security magazine</p>
          <nav className="site-nav">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/privacy">Privacy</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>
            <strong style={{ color: "#111" }}>Popular guides:</strong>{" "}
            <a href="/articles/best-vpn-for-remote-workers">Best VPN</a>{" "}
            &middot;{" "}
            <a href="/articles/best-password-manager-for-small-remote-team">
              Password Manager
            </a>{" "}
            &middot;{" "}
            <a href="/articles/is-public-wifi-safe-for-work">
              Public Wi-Fi Safety
            </a>
          </p>
          <p>
            <a href="/about">About</a> &middot;{" "}
            <a href="/contact">Contact</a> &middot;{" "}
            <a href="/privacy">Privacy Policy</a> &middot;{" "}
            <a href="/disclosure">Affiliate Disclosure</a>
          </p>
          <p>
            &copy; {new Date().getFullYear()} RemoteWorkSecure —
            Cybersecurity for remote workers. This site contains affiliate
            links. We may earn a commission if you buy through them, at no
            extra cost to you.
          </p>
        </footer>
      </body>
    </html>
  );
}
