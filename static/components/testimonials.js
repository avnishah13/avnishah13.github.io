const testimonials = {
  template: `
  <div id="testimonials">
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
          <router-link to="/testimonials" class="navbar-link-active" style="font-size: 15px;">Testimonials</router-link>
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
  </nav><br><br><br>

  <body>
    <div>
      <h1>Testimonials</h1><br>
      <div id="carouselExample" class="carousel slide" style="height: 350px; background-color: #eaf7e2">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <p style="margin-top: 60px;">"Avni's contributions to the creation of campaign proposals were invaluable. She conducted detailed analyses, evaluating parameters such as budget utilization, Incremental GMV, and new user acquisition, informing strategic decision-making and optimizing campaign performance.</p>
          <p>Overall, Avni demonstrated a deep understanding of data analysis principles and a keen ability to translate data insights into actionable recommendations. Her technical proficiency, coupled with her strategic mindset, make her a valuable asset to any organization seeking a skilled and experienced data analyst.</p>
          <p>I highly recommend Avni and am confident in her ability to excel in any data analyst role she pursues."</p>
          <p style="font-style: normal; font-size: 13px;"><span style="color: #013220">En Wong</span> - Head of Partnerships at <span style="color: #013220">Majid Al Futtaim - Retail</span></p>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
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
    stylesheet.href = '/static/css/testimonials.css';
    document.head.appendChild(stylesheet);
    },

  beforeUnmount() {
    const stylesheets = document.querySelectorAll('link[href="/static/css/testimonials.css"]');
    stylesheets.forEach(stylesheet => {
      document.head.removeChild(stylesheet);
    });
  },
}

export default testimonials
