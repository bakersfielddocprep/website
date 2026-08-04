export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <a className="brand brand-inverse" href="/">
            <span className="brand-name"><strong>Bakersfield</strong><span>Doc Prep Co.</span></span>
          </a>
          <p>Affordable, organized, and reliable legal document preparation throughout California.</p>
        </div>
        <div>
          <h3>Explore</h3>
          <a href="/services">Services</a>
          <a href="/how-it-works">How it works</a>
          <a href="/about">About</a>
          <a href="/resources">Resources</a>
        </div>
        <div>
          <h3>Contact</h3>
          <a href="tel:+16612180111">661 218 0111</a>
          <a href="/start">Start your documents</a>
          <span>California LDA #232</span>
          <span>Registered &amp; Bonded</span>
        </div>
      </div>
      <div className="shell footer-legal-links">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Use</a>
      </div>
      <div className="shell footer-bottom">
        <p>
          Bakersfield Doc Prep Co. is a registered and bonded California Legal Document Assistant.
          We are not attorneys, cannot provide legal advice, and cannot represent clients in court.
        </p>
        <span>© {new Date().getFullYear()} Bakersfield Doc Prep Co.</span>
      </div>
    </footer>
  );
}
