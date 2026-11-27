"use client";

export default function Newsletter() {
  function onSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value;
    window.location.href = `mailto:gulfamaslam41221@gmail.com?subject=${encodeURIComponent(
      "Subscribe to RemoteWorkSecure"
    )}&body=${encodeURIComponent(
      `Please add me to the new-guides email list.\n\nMy email: ${email}`
    )}`;
  }

  return (
    <section className="newsletter">
      <h2>New guides, by email</h2>
      <p>
        When we publish a new guide, we will send you one short email.
        No spam, no selling your address.
      </p>
      <form className="newsletter-form" onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          required
          placeholder="Your email address"
          aria-label="Email address"
        />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
}
