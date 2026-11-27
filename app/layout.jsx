import "./globals.css";

// Lesson: metadata in layout.jsx is the site-wide SEO default.
// Every article page overrides title and description with its own.
export const metadata = {
  title: "RemoteWorkSecure — Cybersecurity for Remote Workers",
  description:
    "Practical cybersecurity guides for remote workers and freelancers: VPNs, password managers and public Wi-Fi safety.",
  metadataBase: new URL("https://remoteworksecure.vercel.app"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="site-header-inner">
            <a href="/" className="logo">
              <span className="logo-mark">R</span>
              RemoteWork<span>Secure</span>
            </a>
            <nav>
              <a href="/about" className="nav-link" style={{ marginRight: 16 }}>
                About
              </a>
              <a href="/" className="nav-link">
                Home
              </a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer>
          <p>
            <a href="/about">About</a> &middot;{" "}
            <a href="/contact">Contact</a> &middot;{" "}
            <a href="/privacy">Privacy Policy</a> &middot;{" "}
            <a href="/disclosure">Affiliate Disclosure</a>
          </p>
          <p>
            RemoteWorkSecure — Cybersecurity for remote workers. This site
            contains affiliate links. We may earn a commission if you buy
            through them, at no extra cost to you.
          </p>
        </footer>
      </body>
    </html>
  );
}
