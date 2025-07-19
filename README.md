<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Itishree Tripathy | Portfolio</title>
  <style>
    /* === RESET & BASE === */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: 'Segoe UI', sans-serif;
      background: #f0f2f5;
      color: #333;
      line-height: 1.6;
    }

    /* === HEADER === */
    header {
      background: #282c34;
      color: #fff;
      padding: 1rem 0;
      position: sticky;
      top: 0;
      z-index: 1000;
    }
    nav {
      max-width: 1100px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
    }
    nav h1 {
      font-size: 1.5rem;
    }
    nav ul {
      list-style: none;
      display: flex;
    }
    nav li {
      margin-left: 20px;
    }
    nav a {
      color: #fff;
      text-decoration: none;
      transition: color 0.3s ease;
    }
    nav a:hover {
      color: #61dafb;
    }

    /* === SECTIONS === */
    section {
      padding: 3rem 1rem;
      max-width: 900px;
      margin: auto;
    }
    #home {
      text-align: center;
      background: #61dafb;
      color: #fff;
      padding: 5rem 1rem;
      border-radius: 10px;
    }
    #home h2 {
      font-size: 2rem;
    }
    #about p {
      margin-top: 1rem;
    }

    /* === PROJECTS === */
    .project {
      background: white;
      padding: 1rem;
      margin-bottom: 1.5rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      border-radius: 8px;
    }

    /* === CONTACT FORM === */
    form input, form textarea {
      width: 100%;
      padding: 10px;
      margin-bottom: 1rem;
      border-radius: 4px;
      border: 1px solid #ccc;
    }
    form button {
      padding: 10px 20px;
      background: #282c34;
      color: white;
      border: none;
      cursor: pointer;
      border-radius: 4px;
    }

    /* === FOOTER === */
    footer {
      text-align: center;
      padding: 1rem;
      background: #282c34;
      color: #fff;
    }

    /* === RESPONSIVE === */
    @media (max-width: 600px) {
      nav ul {
        flex-direction: column;
        gap: 10px;
      }
    }
  </style>
</head>
<body>

  <!-- Header & Navigation -->
  <header>
    <nav>
      <h1>Itishree</h1>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <!-- Home -->
  <section id="home">
    <h2>Hello, I'm Itishree Tripathy</h2>
    <p>Frontend Developer | Creative Designer | Learner</p>
  </section>

  <!-- About -->
  <section id="about">
    <h2>About Me</h2>
    <p>I’m a passionate frontend developer skilled in HTML, CSS, and JavaScript. I enjoy designing and building elegant, responsive websites and am always learning new tools to improve my craft.</p>
  </section>

  <!-- Projects -->
  <section id="projects">
    <h2>Projects</h2>

    <div class="project">
      <h3>Portfolio Website</h3>
      <p>A personal website to showcase my skills, projects, and contact information.</p>
    </div>

    <div class="project">
      <h3>ToDo App</h3>
      <p>A simple app to manage tasks using JavaScript and localStorage.</p>
    </div>

    <div class="project">
      <h3>Weather App</h3>
      <p>Fetches weather data using a public API and displays current weather.</p>
    </div>
  </section>

  <!-- Contact -->
  <section id="contact">
    <h2>Contact Me</h2>
    <form id="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea rows="5" placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
    <p id="form-msg"></p>
  </section>

  <!-- Footer -->
  <footer>
    <p>&copy; 2025 Itishree Tripathy. All rights reserved.</p>
  </footer>

  <!-- JavaScript -->
  <script>
    // Contact Form Submission
    document.getElementById('contact-form').addEventListener('submit', function(e) {
      e.preventDefault();
      document.getElementById('form-msg').innerText = 'Thank you! Your message has been sent.';
      this.reset();
    });
  </script>

</body>
</html>
