const about = {
  template: `
  <div id="about">
  <nav class="navbar navbar-dark navbar-expand-lg bg-body-tertiary" style="overflow: auto;">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/" id="main" style="font-size: 30px;">&nbsp;Home</router-link>
      <div class="pull-right">
      <button class="navbar-toggler" style="background-color: #00A86B; opacity: 0.5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <router-link to="/about" class="navbar-link-active" style="font-size: 15px;">About</router-link>
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
          <router-link to="/contact" class="navbar-link" style="font-size: 15px;">Contact</router-link>
        </li>
      </ul>
    </div>
    </div>
  </div>
</nav><br><br>

  <div id="main">
  <body>
    <img src="../static/images/avni.jpg"></img>

    <div id="desc" style="float: right; width: 60%; padding-left: 0; margin-right: 200px">
      <p style="text-align: left;">Hi, I'm Avni, currently navigating through the maze of academia at Indian Institute of Technology, Madras.</p>
      <p>In a nutshell, I'm fueled by the challenge of deciphering data and crafting intuitive web experiences. From analyzing market trends to developing ticket booking and music streaming platforms, I blend analytical rigor with creative problem-solving to tackle diverse projects in both data analysis and web development.</p>
      <p>In terms of work, I've donned multiple hats - from being a tech manager, aiding in sales and support, to diving into Python development for crafting engaging Telegram bots. Plus, I've delved into the realms of marketing data analysis, crunching numbers to unearth insights that led to substantial business growth.</p>
      <p>When I'm not crunching numbers or coding, you'll often find me lost in the pages of a good book, sketching people, experimenting in the kitchen, jamming out to tunes and gaming, or diving into the latest tech trends!</p>
      <p>Cheers to curiosity and the endless possibilities it unveils! 🍃</p>
    </div>
  </div><br><br><br>

  <div class="timeline">
    <div class="line"></div>
    <div class="timeline-item" style="margin-right: -15px;">
    <div class="circle"><div class="inner-circle"></div></div>
      <div class="role">Tech Management Intern</div>
      <div class="company">WA Team</div>
      <div class="period">June 2022 – Oct 2022</div>
    </div>
    <div class="timeline-item">
      <div class="circle"><div class="inner-circle"></div></div>
      <div class="role">Python Development Intern</div>
      <div class="company">Maskottchen Technology</div>
      <div class="period">August 2023 – September 2023</div>
    </div>
    <div class="timeline-item" style="margin-left: -15px;">
      <div class="role">Marketing Data Analysis Intern</div>
      <div class="company">Majid Al Futtaim</div>
      <div class="period">September 2023 – March 2024</div>
    </div>
  </div>
    
  </body>
  
  </div>`,

  created() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/static/bootstrap/css/bootstrap.min.css';
    document.head.appendChild(link);

    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = '/static/css/about.css';
    document.head.appendChild(stylesheet);
  },

  beforeUnmount() {
    const stylesheets = document.querySelectorAll('link[href="/static/css/about.css"]');
    stylesheets.forEach(stylesheet => {
      document.head.removeChild(stylesheet);
    });
  }
}

export default about