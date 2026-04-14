import "./LandingPage.scss";

const services = [
  { icon: "🏠", label: "Residential Cleaning" },
  { icon: "🏢", label: "Office Cleaning" },
  { icon: "✨", label: "Deep Cleaning" },
  { icon: "🔑", label: "Move In / Move Out" },
  { icon: "📅", label: "Recurring Service" },
];

const whyItems = [
  "100% eco-friendly, non-toxic products",
  "Trusted by hundreds of Toronto households",
  "Fully insured and background-checked cleaners",
  "Flexible scheduling — weekdays and weekends",
  "Satisfaction guaranteed on every visit",
];

export default function LandingPage() {
  return (
    <main className="ecoclean">

      {/* ── Hero ── */}
      <section className="ecoclean__hero">
        <div className="ecoclean__hero-inner">
          <span className="ecoclean__eyebrow">Toronto's Green Cleaning Experts</span>
          <h1 className="ecoclean__h1">
            Eco-Friendly Cleaning<br />Services in Toronto
          </h1>
          <p className="ecoclean__hero-sub">
            Professional, sustainable cleaning for homes and offices across Toronto.
            Safe for your family, pets, and the planet — using only certified
            eco-friendly products.
          </p>
          <div className="ecoclean__btn-row">
            <button className="ecoclean__btn ecoclean__btn--primary">Book Now</button>
            <button className="ecoclean__btn ecoclean__btn--outline">Get Free Quote</button>
          </div>
        </div>
        <div className="ecoclean__hero-leaf" aria-hidden="true" />
      </section>

      {/* ── Section 1: Intro ── */}
      <section className="ecoclean__section ecoclean__section--white">
        <div className="ecoclean__content">
          <span className="ecoclean__label">Who we are</span>
          <h2 className="ecoclean__h2">Welcome to EcoClean Toronto</h2>
          <p>
            Your trusted partner for <strong>eco-friendly cleaning services in Toronto</strong>.
            We believe a clean home shouldn't come at the cost of the environment. Our team
            uses biodegradable, non-toxic products that are safe for kids, pets, and the
            planet — while delivering the deep clean your space deserves.
          </p>
        </div>
      </section>

      {/* ── Section 2: Value ── */}
      <section className="ecoclean__section ecoclean__section--blue">
        <div className="ecoclean__content">
          <span className="ecoclean__label">Our promise</span>
          <h2 className="ecoclean__h2">Beyond surface-level cleaning</h2>
          <p>
            At EcoClean, every visit is a commitment to sustainability, quality, and your
            peace of mind. We source only certified green products and train our staff to
            minimize waste — because we know the choices we make today shape the Toronto
            of tomorrow.
          </p>
        </div>
      </section>

      {/* ── Section 3: Services ── */}
      <section className="ecoclean__section ecoclean__section--white">
        <div className="ecoclean__content">
          <span className="ecoclean__label">What we offer</span>
          <h2 className="ecoclean__h2">Our services</h2>
          <p>
            A full range of <strong>eco-friendly cleaning solutions</strong> across Toronto,
            tailored to your schedule and needs.
          </p>
          <div className="ecoclean__services">
            {services.map(({ icon, label }) => (
              <div className="ecoclean__service-card" key={label}>
                <span className="ecoclean__service-icon">{icon}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Why Choose Us ── */}
      <section className="ecoclean__section ecoclean__section--beige">
        <div className="ecoclean__content">
          <span className="ecoclean__label">Why EcoClean</span>
          <h2 className="ecoclean__h2">Why choose us</h2>
          <ul className="ecoclean__why-list">
            {whyItems.map((item) => (
              <li key={item}>
                <span className="ecoclean__check">✔</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Section 5: CTA ── */}
      <section className="ecoclean__cta">
        <div className="ecoclean__cta-inner">
          <h2 className="ecoclean__cta-title">Ready for a cleaner, greener home?</h2>
          <p className="ecoclean__cta-sub">
            Join hundreds of Toronto families who've made the switch to eco-friendly
            cleaning. Book your first session today — and experience the EcoClean difference.
          </p>
          <div className="ecoclean__btn-row">
            <button className="ecoclean__btn ecoclean__btn--white">Book Now</button>
            <button className="ecoclean__btn ecoclean__btn--outline-white">Get Free Quote</button>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="ecoclean__footer">
        <p>© 2025 EcoClean Toronto · eco-friendly cleaning Toronto</p>
      </footer>

    </main>
  );
}