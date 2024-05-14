const resume = {
  template: `
  <div id="resume">
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
          <router-link to="/resume" class="navbar-link-active" style="font-size: 15px;">Resume</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="navbar-link" style="font-size: 15px;">Contact</router-link>
        </li>
      </ul>
    </div>
    </div>
  </div>
</nav>

  <body>
    <object class="pdf" data="/static/documents/Resume.pdf" width="800" height="500"></object>
  </body>
  
  </div>`,

  data() {
    return {
      dropdown_flag: false,
      collapse: false,
    }
  },

  methods: {},

  created() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/static/bootstrap/css/bootstrap.min.css';
    document.head.appendChild(link);

    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = '/static/css/resume.css';
    document.head.appendChild(stylesheet);
    },

  beforeUnmount() {
    const stylesheets = document.querySelectorAll('link[href="/static/css/resume.css"]');
    stylesheets.forEach(stylesheet => {
      document.head.removeChild(stylesheet);
    });
  },
}

export default resume
