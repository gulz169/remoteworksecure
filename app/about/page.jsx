export const metadata = {
  title: "About — RemoteWorkSecure",
  description:
    "RemoteWorkSecure publishes practical cybersecurity guides for remote workers and freelancers.",
};

export default function AboutPage() {
  return (
    <div className="article-wrap">
      <h1>About RemoteWorkSecure</h1>
      <p>
        RemoteWorkSecure publishes practical cybersecurity guides for remote
        workers and freelancers in the UK and US.
      </p>
      <p>
        We cover VPNs, password managers and public Wi-Fi safety. Our
        articles compare products using published information, prices and
        features. Where we have not tested a product ourselves, we say so
        clearly.
      </p>
      <p>
        We are not a security consultancy and our articles are not legal or
        financial advice. Always check the provider website for the latest
        price and terms before you buy.
      </p>
    </div>
  );
}
