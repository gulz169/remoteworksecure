export const metadata = {
  title: "About — RemoteWorkSecure",
  description:
    "RemoteWorkSecure publishes practical cybersecurity guides for remote workers and freelancers — research-based, honest about what we have not tested, and free to read.",
};

export default function AboutPage() {
  return (
    <div className="article-wrap">
      <p className="meta">About RemoteWorkSecure</p>
      <h1>Security advice for people who work from anywhere.</h1>
      <p className="lead">
        RemoteWorkSecure is an independent magazine for remote workers and
        freelancers in the UK and US. We explain VPNs, password managers
        and public Wi-Fi safety in plain English — no jargon, no scare
        stories, and no pretending we tested something we did not.
      </p>

      <h2>Why this site exists</h2>
      <p>
        Working from a cafe, a co-working space or a spare room means your
        laptop is your office, and your home Wi-Fi is your company network.
        Most security advice is written for IT teams, not for the person
        actually sitting with the laptop. We write for that person.
      </p>
      <p>
        Every guide answers one practical question: what should I do, what
        should I buy, and what can I skip? If a product is not worth the
        money for most remote workers, we say so.
      </p>

      <h2>How we research</h2>
      <p>Every article follows the same process:</p>
      <ol>
        <li>
          <strong>Read the official source first</strong> — the provider's
          own pricing, features and terms, not a copy of another blog.
        </li>
        <li>
          <strong>Compare like with like</strong> — the same price, device
          limit, protocol and server coverage for every product in a
          comparison.
        </li>
        <li>
          <strong>Check the date</strong> — prices and features change.
          Articles carry a publication date, and we update them when the
          facts change.
        </li>
        <li>
          <strong>Say what we did not do</strong> — our articles are
          research-based. Where we have not tested a product ourselves,
          the article says so clearly at the top.
        </li>
      </ol>

      <h2>What we cover</h2>
      <ul>
        <li>
          <strong>VPNs</strong> — which one to choose, how to set one up
          on a work laptop, and whether a free VPN is ever a good idea.
        </li>
        <li>
          <strong>Password managers</strong> — for individuals, freelancers
          and small remote teams.
        </li>
        <li>
          <strong>Public Wi-Fi</strong> — what is actually risky in a cafe
          or airport, and what to do before logging on.
        </li>
        <li>
          <strong>Home office security</strong> — routers, two-factor
          authentication, backups and simple checklists.
        </li>
      </ul>

      <h2>How we make money</h2>
      <p>
        This site is free to read. We may earn a commission if you buy a
        product through an affiliate link, and we may show ads in future.
        That never changes what we recommend — a commission does not make
        a bad product good. Read the full{" "}
        <a href="/disclosure">Affiliate Disclosure</a>.
      </p>

      <h2>What we are not</h2>
      <p>
        We are not a security consultancy, and our articles are not legal,
        financial or professional advice. Always check the provider's own
        website for the latest price and terms before you buy. If you
        handle sensitive data for an employer, follow your employer's
        security policy first.
      </p>

      <h2>Talk to us</h2>
      <p>
        Found an error, or want us to cover a topic? We read every
        message. Email us at{" "}
        <a href="mailto:gulfamaslam41221@gmail.com">
          gulfamaslam41221@gmail.com
        </a>{" "}
        or use the <a href="/contact">contact page</a>.
      </p>
    </div>
  );
}
