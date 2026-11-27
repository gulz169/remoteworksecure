"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("Correction");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`RemoteWorkSecure — ${topic}`);
    const body = encodeURIComponent(
      `Name: ${name}\nTopic: ${topic}\n\n${message}`
    );
    window.location.href = `mailto:gulfamaslam41221@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <label>
        Your name
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
        />
      </label>
      <label>
        Topic
        <select value={topic} onChange={(e) => setTopic(e.target.value)}>
          <option>Correction</option>
          <option>Topic suggestion</option>
          <option>Question about a guide</option>
          <option>Something else</option>
        </select>
      </label>
      <label>
        Message
        <textarea
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what is wrong, or what you would like us to cover..."
        />
      </label>
      <button type="submit">Send message</button>
      {sent && (
        <p className="form-note">
          Your email app should now be open with the message ready to send.
        </p>
      )}
    </form>
  );
}
