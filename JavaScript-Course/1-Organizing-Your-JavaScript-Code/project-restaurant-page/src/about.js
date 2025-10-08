import "./about.css";

export function loadAbout() {
  const content = document.querySelector("#content");
  content.textContent = "";

  const aboutDiv = document.createElement("div");
  aboutDiv.classList.add("about-container");

  aboutDiv.innerHTML = `
    <h2> i was bored so this about section is not created by me i used chatgpt and man this mf is gonna take our job lol.</h2>
    <section class="about-hero">
      <h1>About Us</h1>
      <p>Welcome to <span class="highlight">Rest-o-Rant</span> — where flavor meets comfort.</p>
    </section>

    <section class="about-story">
      <h2>Our Story</h2>
      <p>Rest-o-Rant began in 2015 with a simple dream — to serve homemade-style meals with a modern twist. 
      What started as a small family kitchen has now become a beloved place for food lovers, 
      where every dish is crafted with care and the freshest ingredients.</p>
    </section>

    <section class="about-special">
      <h2>What Makes Us Special</h2>
      <div class="special-features">
        <div class="feature-card">
          <span>🍅</span>
          <h3>Fresh Ingredients</h3>
          <p>We source our produce daily to ensure the best flavors in every bite.</p>
        </div>
        <div class="feature-card">
          <span>🍕</span>
          <h3>Authentic Taste</h3>
          <p>Every recipe carries the warmth of home-cooked perfection.</p>
        </div>
        <div class="feature-card">
          <span>☕</span>
          <h3>Cozy Ambiance</h3>
          <p>Our restaurant is designed for comfort, laughter, and togetherness.</p>
        </div>
      </div>
    </section>

    <section class="about-vision">
      <h2>Our Promise</h2>
      <p>We’re more than just a restaurant — we’re a place to connect, unwind, and create memories. 
      Whether it’s your first visit or your hundredth, we’ll always treat you like family.</p>
    </section>
  `;

  content.append(aboutDiv);
}
