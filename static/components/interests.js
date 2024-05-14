const interests = {
  template: `
  <div id="interests">
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
          <router-link to="/interests" class="navbar-link-active" style="font-size: 15px;">Interests</router-link>
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
  </nav><br>

  <body>
  <div>
    <div id="carouselExample" class="carousel slide" style="height: 350px; width: 20%; display: inline-block; margin-left: 70px">
    <h1>Sketchbook</h1><br>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="/static/images/art4.jpg" class="d-block w-100" style="height: 350px; width: 300px">
      </div>
      <div class="carousel-item">
        <img src="/static/images/art2.jpg" class="d-block w-100" style="height: 350px; width: 300px">
      </div>
      <div class="carousel-item">
        <img src="/static/images/art3.jpg" class="d-block w-100" style="height: 350px; width: 300px">
      </div>
      <div class="carousel-item">
        <img src="/static/images/art1.jpg" class="d-block w-100" style="height: 350px; width: 300px">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" style="margin-top: 150px;">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" style="margin-top: 150px">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div class="container" style="display: inline-block; width: 30%; vertical-align: 260px; margin-left: 70px;">
    <h1>Top Reads</h1><br>
    <ul class="myUL">
      <li>Turtles All The Way Down</li>
      <li>The Bell Jar</li>
      <li>All The Bright Places</li>
      <li>13 Reasons Why</li>
    </ul>
  </div>
  <div style="display: inline-block; width: 30%; margin-left: 70px; margin-right: 50px">
    <h1>Soundtrack</h1><br>
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/2Ewe74JGVubMPojf5NLuyS?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
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
    stylesheet.href = '/static/css/interests.css';
    document.head.appendChild(stylesheet);
    },

  beforeUnmount() {
    const stylesheets = document.querySelectorAll('link[href="/static/css/interests.css"]');
    stylesheets.forEach(stylesheet => {
      document.head.removeChild(stylesheet);
    });
  },
}

export default interests