import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowRight, FlaskConical, BookOpen, Shield, Brain, Crown } from "lucide-react";
import "./styles.css";
import productHero from "../product-herov2.final.png";

const pages = {
  home: {
    title: "Built on discipline. Backed by science.",
    kicker: "Welcome to Born Then Built",
    body: "Performance, longevity, and optimization for men who refuse mediocrity.",
    items: []
  },
  compounds: {
    title: "Compounds",
    kicker: "Flagship Product",
    body: "GLP-3RT is the first flagship compound in the Born Then Built ecosystem. Built for research, transparency, and high-standard verification.",
    items: ["GLP-3RT / Retatrutide", "BPC-157", "MOTS-c", "Tesamorelin", "Future compound library"]
  },
  blog: {
    title: "Blog",
    kicker: "Knowledge Builds Freedom",
    body: "Articles on peptides, testosterone, longevity, recovery, discipline, sleep, money, and masculine responsibility.",
    items: [
      "Testosterone: The Foundation of Manhood",
      "Peptides 101: How They Work & Why They Matter",
      "Discipline in a World Designed to Distract",
      "Longevity Is Not a Trend. It Is Responsibility."
    ]
  },
  about: {
    title: "About Born Then Built",
    kicker: "The Standard",
    body: "Born Then Built is a way of life for men who build themselves so they can build everything that matters. Body. Mind. Purpose.",
    items: ["Built on discipline", "Backed by science", "Designed for men", "Rooted in responsibility"]
  },
  contact: {
    title: "Contact",
    kicker: "Connect",
    body: "For product questions, lab verification, support, partnerships, and media inquiries.",
    items: ["Support", "Wholesale / partnerships", "Lab verification", "Press / media"]
  }
};

function App() {
  const [page, setPage] = useState("home");
  const active = pages[page];
  const nav = ["home", "compounds", "blog", "about", "contact", "instagram"];

  return (
    <div className="site">
      <header className="header">
        <button className="logo" onClick={() => setPage("home")} aria-label="Born Then Built home">
          BORN<br />THEN<br />BUILT
        </button>

        <nav className="nav">
        {nav.map((item) =>
  item === "instagram" ? (
    <a
      key={item}
      href="https://instagram.com/theofficialjohngabriel"
      target="_blank"
      rel="noopener noreferrer"
      className="nav-instagram"
>
      @theofficialjohngabriel
    </a>
  ) : (
    <button
      key={item}
      onClick={() => setPage(item)}
      className={page === item ? "active" : ""}
    >
      {item}
    </button>
  )
)}
        </nav>
      </header>

      <main>
       <section className="hero">
  <div className="heroGlow" />

  <div className="heroContent">
    <div className="heroCopy">
      <p className="kicker">Precision. Quality. Results.</p>

      <h1>
        Research
        <span>Without</span>
        Compromise
      </h1>

      <div className="goldLine" />

      <p className="bodyCopy">
        Research compounds built on transparency, independent
        verification, and uncompromising quality standards.
      </p>

      <button
        className="primaryBtn"
        onClick={() => setPage("compounds")}
      >
        Explore Compounds
        <ArrowRight size={17} />
      </button>

      <div className="heroTrust">
        <span>Third-Party Tested</span>
        <span>Research Use Only</span>
      </div>
    </div>

    <div className="productVisual">
  <img
    className="productImage"
    src={productHero}
    alt="Born Then Built GLP-3RT research compound"
  />
</div>
  </div>
</section>
        

        <section className="foundation">
          <p className="kicker center">Our Foundation</p>
          <h2>Three Pillars. One Standard.</h2>

          <div className="pillars">
            <Pillar icon={<Shield />} number="01" title="Body" text="Train. Recover. Optimize. Your body is your foundation." />
            <Pillar icon={<Brain />} number="02" title="Mind" text="Clarity creates power. Control your thoughts or they will control you." />
            <Pillar icon={<Crown />} number="03" title="Purpose" text="Build wealth. Create value. Lead with competence. Leave a legacy." />
          </div>
        </section>

        <section className="features">
          <Feature
            icon={<FlaskConical />}
            kicker="Our Flagship Compound"
            title="GLP-3RT"
            text="Research-focused compound positioning with testing, verification, and transparency at the center."
            button="View Compound"
          />
          <Feature
            icon={<BookOpen />}
            kicker="From the Blog"
            title="Knowledge Builds Freedom."
            text="Education on physiology, longevity, peptides, discipline, and optimization for men building higher standards."
            button="View Articles"
          />
        </section>

        <section className="standard">
          <p className="kicker center">The Standard</p>
          <h3>We reject passivity. We reject weakness. We reject victimhood. We build ourselves so we can build others.</h3>
          <p className="tagline">Built on discipline. Backed by science.</p>
        </section>
      </main>

      <footer className="footer">
        <div className="logo small">BORN<br />THEN<br />BUILT</div>
        <div className="footerLinks">
          {nav.slice(1).map((item) => (
            <button key={item} onClick={() => setPage(item)}>{item}</button>
          ))}
        </div>
        <p>© 2026 Born Then Built. All rights reserved.</p>
      </footer>
    </div>
  );
}

function Pillar({ icon, number, title, text }) {
  return (
    <div className="pillar">
      <div className="pillarIcon">{icon}</div>
      <p className="number">{number}</p>
      <h3>{title}</h3>
      <div className="miniLine" />
      <p>{text}</p>
    </div>
  );
}

function Feature({ icon, kicker, title, text, button }) {
  return (
    <div className="feature">
      <div className="featureIcon">{icon}</div>
      <p className="kicker">{kicker}</p>
      <h3>{title}</h3>
      <p>{text}</p>
      <button className="outlineBtn smallBtn">
        {button} <ArrowRight size={15} />
      </button>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
