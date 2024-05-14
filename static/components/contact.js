const contact = {
  template: `
  <div id="contact">
  <nav class="navbar navbar-dark navbar-expand-lg bg-body-tertiary" style="overflow: auto;">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/" id="main" style="font-size: 30px;">&nbsp;Home</router-link>
      <div class="pull-right">
      <button class="navbar-toggler" type="button" style="background-color: #00A86B; opacity: 0.5" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <router-link to="/about" class="navbar-link" style="font-size: 15px;">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/interests" class="navbar-link" style="font-size: 15px;">Interests</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/portfolio" class="navbar-link" style="font-size: 15px;">Portfolio</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/testimonials" class="navbar-link" style="font-size: 15px;">Testimonials</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/resume" class="navbar-link" style="font-size: 15px;">Resume</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="navbar-link-active" style="font-size: 15px;">Contact</router-link>
        </li>
      </ul>
      </div>
      </div>
    </div>
  </nav><br><br><br>

  <body>
    <h1>Contact</h1><br>
    <p style="width: 50%; margin: auto;">Questions about my work, looking to collaborate or just want to say hi? Feel free to reach out – I'm always up for a chat! Drop me a message or fill out the form below, and let's explore how we can work together to bring your data projects to life.</p><br><br>
    <div id="logos">
      <a href="https://github.com/avnishah13"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg></a>
      &nbsp;&nbsp;&nbsp;<a href="https://www.linkedin.com/in/avni-s-5b7165124"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-linkedin" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/></svg></a>
      &nbsp;&nbsp;&nbsp;<a href="mailto:avnishahv@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-envelope-at" viewBox="0 0 16 16"><path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/><path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/></svg></a>
    </div><br><br>

    <hr style="color:black;"></hr><br><br>

    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc6CSGTzTmmWjPQa152dhC9p4AE02WpUwiVjgaxy7Vs5mW98Q/viewform?embedded=true" scrolling="no" width="100%" height="719" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
  </body>
  </div>`,

  created() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/static/bootstrap/css/bootstrap.min.css';
    document.head.appendChild(link);

    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = '/static/css/contact.css';
    document.head.appendChild(stylesheet);
    },

  beforeUnmount() {
    const stylesheets = document.querySelectorAll('link[href="/static/css/contact.css"]');
    stylesheets.forEach(stylesheet => {
      document.head.removeChild(stylesheet);
    });
  },
}

export default contact