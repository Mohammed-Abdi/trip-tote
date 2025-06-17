import "./About.css";
import { Icon } from "@iconify/react";

function About({ aboutIsOpen, toggleAbout }) {
  return (
    <div className={`about-wrapper ${aboutIsOpen ? "" : "close"}`}>
      <div className="header">
        <h1>About Trip Tote</h1>
        <div className="close-about" onClick={toggleAbout}>
          <Icon icon="ic:baseline-close" className="icon" />
        </div>
      </div>
      <div className="body">
        <p>
          Welcome to <strong>Trip Tote</strong> — your personal packing
          assistant! 🎒✈️ Whether you're a frequent traveler or a first-timer,
          our goal is to help you pack smarter and travel stress-free.
        </p>
        <h2>🧳 Our Mission</h2>
        <ul>
          <li>💡 Simplify packing with smart lists</li>
          <li>✨ Personalize for every journey</li>
          <li>🚀 Focus on memories, not missing items</li>
        </ul>
        <h2>🛠️ How It Works</h2>
        <ol>
          <li>Choose a quantity</li>
          <li>Add the item name (e.g., "Passport", "Charger")</li>
          <li>Mark it packed ✅</li>
          <li>Start fresh when you need a new list</li>
        </ol>
        <h2>💻 Built For Developers, By Developers</h2>
        <p>
          I’m <strong>Mohammed Abdi</strong>, a software engineer who loves
          clean UI and functional UX. Trip Tote is built using:
        </p>
        <ul>
          <li>⚛️ React for dynamic UI</li>
          <li>🔐 nanoid for unique item IDs</li>
          <li>🎨 CSS variables for responsive styling</li>
          <li>📈 Lighthouse-optimized for speed & accessibility</li>
        </ul>
        <p>
          🔗{" "}
          <a href="https://github.com/Mohammed-Abdi/trip-tote" target="_blank">
            Check it out on GitHub
          </a>
        </p>
        <h2>🧭 Why Trip Tote?</h2>
        <ul>
          <li>⚡ Ultra-fast & minimal</li>
          <li>✅ Accessible & semantic HTML</li>
          <li>🧩 Reusable components</li>
          <li>📱 Mobile-first design</li>
        </ul>
        <h2>🎯 Join the Journey</h2>
        <p>
          Trip Tote is open source and growing! Have ideas? Contributions are
          welcome 💡
        </p>
        <p>
          Made with ❤️ by <strong>Mohammed Abdi</strong>
        </p>
      </div>
    </div>
  );
}

export default About;
