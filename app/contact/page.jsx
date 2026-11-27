import ContactForm from "../contact-form";

export const metadata = {
  title: "Contact — RemoteWorkSecure",
  description:
    "Contact RemoteWorkSecure with corrections, questions or topic suggestions. We read every message.",
};

export default function ContactPage() {
  return (
    <div className="article-wrap">
      <p className="meta">Contact</p>
      <h1>Talk to us — we read every message.</h1>
      <p className="lead">
        Found an error in an article, have a question about a guide, or
        want us to cover a topic? Send us a message. We usually reply
        within a few days.
      </p>

      <h2>Send a message</h2>
      <p>
        Fill in the form below. It opens your email app with the message
        ready to send to us — nothing is stored on this website.
      </p>
      <ContactForm />

      <h2>Or email us directly</h2>
      <p>
        <a href="mailto:gulfamaslam41221@gmail.com">
          gulfamaslam41221@gmail.com
        </a>
      </p>

      <h2>What to write about</h2>
      <ul>
        <li>
          <strong>Corrections</strong> — a price, a feature or a fact in
          an article that has changed. Tell us the article and what is
          wrong, and we will fix it.
        </li>
        <li>
          <strong>Topic suggestions</strong> — a security question you
          face while working remotely. If it helps other remote workers,
          we will write about it.
        </li>
        <li>
          <strong>Questions about a guide</strong> — something in an
          article that was not clear enough. Your question helps us make
          the guide better for the next reader.
        </li>
      </ul>

      <h2>What we cannot do</h2>
      <p>
        We cannot give personal security advice for your specific situation,
        recover a hacked account, or recommend a product for a regulated
        business. For those, please speak to a qualified security
        professional or your employer's IT team.
      </p>
    </div>
  );
}
