const portfolio = {
  template: `
  <div id="app">
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
          <router-link to="/portfolio" class="navbar-link-active" style="font-size: 15px;">Portfolio</router-link>
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

  <body>
    <div>
    <h1>Development Projects</h1><br>
      <div style="width: 33%; display: inline-block">
        <img class="pointer" src="../static/images/harmonix.png" @click="mark_project('harmonix')" data-bs-toggle="modal" data-bs-target="#modal" style="border-radius: 25px; height: 300px; width: 300px; margin-left: 100px;"></img>
      </div>
      <div style="width: 33%; display: inline-block">
        <img class="pointer" src="../static/images/ticketable.png" @click="mark_project('ticketable')" data-bs-toggle="modal" data-bs-target="#modal" style="border-radius: 25px; height: 300px; width: 300px; margin-left: 100px;"></img>
      </div>
      <div style="width: 33%; display: inline-block">
        <img class="pointer" src="../static/images/telegram.png" @click="mark_project('telegram')" data-bs-toggle="modal" data-bs-target="#modal" style="border-radius: 25px; height: 300px; width: 300px; margin-left: 100px;"></img>
      </div>
    </div><br><br><br>
    <div>
    <h1>Data Analysis Projects</h1><br>
      <div style="width: 25%; display: inline-block">
        <img class="pointer" src="../static/images/vaccine.png" @click="mark_project('vaccine')" data-bs-toggle="modal" data-bs-target="#modal" style="border-radius: 25px; height: 300px; width: 300px; margin-left: 40px;"></img>
      </div>
      <div style="width: 25%; display: inline-block">
        <img class="pointer" src="../static/images/maf.png" @click="mark_project('maf')" data-bs-toggle="modal" data-bs-target="#modal" style="border-radius: 25px; height: 300px; width: 300px; margin-left: 40px;"></img>
      </div>
      <div style="width: 25%; display: inline-block">
        <img class="pointer" src="../static/images/delivery.png" @click="mark_project('delivery_analysis')" data-bs-toggle="modal" data-bs-target="#modal" style="border-radius: 25px; height: 300px; width: 300px; margin-left: 40px; overflow: hidden;"></img>
      </div>
      <div style="width: 25%; display: inline-block">
        <img class="pointer" src="../static/images/cycle.png" @click="mark_project('bike')" data-bs-toggle="modal" data-bs-target="#modal" style="border-radius: 25px; height: 300px; width: 300px; margin-left: 40px; overflow: hidden;"></img>
      </div><br><br>
    </div>
  </body>
  </div>

  <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog mw-100 w-75">
    <div class="modal-content">
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style="margin-left: 97%; margin-top: 0.5%"></button>
      <div class="modal-body" style="width: 80%; display: block; margin-left: auto; margin-right: auto;">
        <div v-if="project=='harmonix'">
          <img src="../static/images/harmonix.png" style="height: 200px; width: 200px; display: block; margin-left: auto; margin-right: auto"></img><br>
          <h3>Harmonix - A music streaming website</h3>
          <p style="margin: 0">A dynamic music streaming platform with personalized playlists, seamless navigation, and robust content curation, and analytics tools.</p><br>
          <p>Visit Here - <a href="https://harmonix.pythonanywhere.com/#/">Harmonix</a></p><br>
          <p style="font-size: 20px">Description</p>
          <hr><br>
          <p>Harmonix is an innovative web-based music streaming application tailored for professional use, aiming to streamline music discovery, streaming, and management processes. With a focus on efficiency and functionality, Harmonix provides administrators with powerful tools to manage music content, user accounts, and system settings seamlessly. Leveraging a sophisticated tech stack including HTML, CSS, JavaScript, and Python with Flask framework, Harmonix ensures robust performance and reliability.</p>
          <p>Designed with the needs of creators and administrators in mind, Harmonix offers features such as artist registration, dashboard access to performance metrics, content moderation tools, and platform-wide analytics. This comprehensive suite of functionalities empowers professionals to manage artist profiles, music submissions, and platform operations with ease, making Harmonix a go-to solution for streamlined music management in professional settings.</p>
          <p>You can view the source code for this website here: <a href="https://github.com/avnishah13/music-streaming-application">Github</a></p>
        </div>
      </div>

      <div v-if="project=='ticketable'" class="mw-100 w-75" style="display: block; margin-left: auto; margin-right: auto;">
        <img src="../static/images/ticketable.png" style="height: 200px; width: 200px; display: block; margin-left: auto; margin-right: auto"></img><br>
        <h3>Ticketable - A ticket booking website</h3>
        <p style="margin: 0">A web-based ticketing application, 'Ticketable', facilitating easy show creation and management for various events.</p><br>
        <p>Visit Here - <a href="https://avnishah.pythonanywhere.com">Ticketable</a></p><br>
        <p style="font-size: 20px">Description</p>
        <hr><br>
        <p>Ticketable stands as a comprehensive solution in the realm of event management, offering a seamless web-based ticketing platform designed to simplify the process of creating and managing tickets across diverse events. Rooted in a technology stack comprising HTML, CSS, JavaScript, and Python (Flask), Ticketable boasts a user-centric approach, empowering both users and administrators with intuitive interfaces and robust functionalities. Users are granted access to features like registration, personalized home pages displaying available shows, and streamlined booking processes, while administrators benefit from tools for tracking sales, managing venues and shows, and ensuring seamless event coordination.</p>
        <p>At the core of Ticketable's architecture lie Flask extensions including Flask-CORS, Flask-RESTful, and Flask-SQLAlchemy, enriching its capabilities with seamless API development and efficient database integration. From validating show schedules to facilitating movie additions and offering a rich set of CRUD operations through an API, Ticketable excels in delivering a versatile platform that caters to the dynamic needs of event organizers and attendees alike. With its user-friendly design and robust functionality, Ticketable emerges as a go-to solution for modern event ticketing and management.</p>
        <p>You can view the source code for this website here: <a href="https://github.com/avnishah13/ticketing-application">Github</a></p>
      </div>

      <div v-if="project=='telegram'" class="mw-100 w-75" style="display: block; margin-left: auto; margin-right: auto;">
        <img src="../static/images/telegram.png" style="height: 200px; width: 200px; display: block; margin-left: auto; margin-right: auto"></img><br>
        <h3>Bitcoin Trading Telegram Bot</h3><br>
        <p style="margin: 0">Driving Cryptocurrency Trading Engagement: Python-Based Telegram Bot Development at Maskottchen Technology.</p><br>
        <p style="font-size: 20px">Description</p>
        <hr><br>
        <p>I spearheaded the development of a dynamic Telegram bot tailored for buying bitcoins at Maskottchen Technology, enriching user engagement within the Telegram ecosystem. Harnessing the Telegram Bot API and Python, the bot seamlessly integrated real-time market updates, streamlined trading strategies, and a user-friendly interface for enhanced trading experiences. Leveraging Python's versatility, I implemented automated responses, user input processing, and data retrieval from external sources, ensuring a smooth and efficient user interaction. Through intuitive conversation flows and clear instructions, the interface facilitated seamless navigation, empowering users to effortlessly execute trades and stay informed about market trends.</p>
        <p>This initiative significantly bolstered user engagement within Telegram, fostering a community of active traders and investors. By offering real-time market insights and convenient trading functionalities, the bot contributed to increased trading activity and user satisfaction.</p>
        <i><p>For privacy reasons, I cannot share more information or visuals on this project.</p></i>
      </div>

      <div v-if="project=='vaccine'" class="mw-100 w-75" style="display: block; margin-left: auto; margin-right: auto;">
        <img src="../static/images/vaccine.png" style="height: 200px; width: 200px; display: block; margin-left: auto; margin-right: auto"></img><br>
        <h3>COVID-19 Vaccination Analysis</h3><br>
        <p style="margin: 0">Analysis of a primary dataset on COVID-19 vaccinations to uncover demographic trends, perceptions of vaccine safety and effectiveness, and factors influencing vaccine uptake and distribution.</p><br>
        <p style="font-size: 20px">Description</p>
        <hr><br>
        <p>In this project, extensive analysis was conducted on a primary dataset concerning COVID-19 vaccinations, yielding significant insights into various aspects of vaccine perception and effectiveness. Notable findings include a substantial disparity in the number of reported cases before and after vaccination, indicating the vaccines' efficacy in mitigating infection rates. Gender-based analysis revealed no significant differences in COVID awareness, suggesting a relatively uniform level of knowledge across demographics. However, age emerged as a significant factor influencing perceptions of vaccine efficacy, with younger individuals favoring Pfizer while older cohorts preferred Covishield. Furthermore, a relationship was observed between the vaccine administered and the likelihood of contracting the virus post-vaccination, notably with Covaxin recipients exhibiting lower rates of infection within their families.</p>
        <img src="../static/images/vaccine_data.png" style="height: 200px; width: 300px; display: block; margin-left: auto; margin-right: auto"></img><br>
        <p>This project underscores the importance of data-driven insights in understanding vaccination trends and informing public health strategies. By discerning patterns in vaccine uptake, effectiveness, and perception, this analysis contributes to the broader discourse on COVID-19 mitigation efforts. While conducted as a personal endeavor, the implications of these findings hold relevance for public health officials and policymakers in refining vaccination campaigns and addressing concerns surrounding vaccine efficacy and distribution.</p>
        <p>You can view the source code for this project here: <a href="https://github.com/avnishah13/Covid-Vaccinations-Analysis">Github</a></p>
      </div>

      <div v-if="project=='delivery_analysis'" class="mw-100 w-75" style="display: block; margin-left: auto; margin-right: auto;">
        <img src="../static/images/delivery.png" style="height: 200px; width: 200px; display: block; margin-left: auto; margin-right: auto"></img><br>
        <h3>Delivery Duel: Swiggy Vs Zomato</h3><br>
        <p style="margin: 0">Comparative analysis of Swiggy and Zomato to unveil nuanced differences in subscription models, delivery efficiency, and user engagement, shaping India's dynamic food delivery landscape.</p><br>
        <p>Visit Here - <a href="https://medium.com/@avnishah.1304/delving-into-the-delivery-duel-a-comprehensive-comparison-of-swiggy-and-zomato-40d47a36c186">Link</a></p><br>
        <p style="font-size: 20px">Description</p>
        <hr><br>
        <p>This project entails a comprehensive comparative analysis between Swiggy and Zomato, delving into various aspects of their food delivery services. From subscription models to delivery efficiency, the study uncovers intricate differences shaping India's food delivery landscape. Additionally, the analysis includes a detailed investigation into delivery times, exploring factors like weather conditions, road traffic density, and delivery person performance, providing valuable insights for optimizing delivery operations. As an example, the maps below visually depict the extensive geographical reach of Zomato (Red) and Swiggy (Orange), showcasing the cities where both platforms have expanded their services, providing valuable insights into their market penetration across India.</p><br>
        <img src="../static/images/swiggy.png" style="height: 200px; width: 300px; display: inline-block; margin-left: 15%"></img>&nbsp;
        <img src="../static/images/zomato.png" style="height: 200px; width: 300px; display: inline-block;"></img><br><br>
        <i><p>For a detailed exploration of Swiggy and Zomato's delivery services, this project conducts an in-depth comparative analysis, examining subscription models, delivery efficiency, and user engagement. Furthermore, it scrutinizes delivery times, dissecting factors like weather conditions, multiple deliveries, and time trends, offering actionable insights for enhancing delivery operations which is only included in the link to the notebook uploaded on Github below.</p></i>
        <p>You can view the source code for this project here: <a href="https://github.com/avnishah13/Swiggy-vs-Zomato-EDA/blob/main/Swiggy%20Vs.%20Zomato%20EDA.ipynb">Github</a></p>
      </div>

      <div v-if="project=='maf'" class="mw-100 w-75" style="display: block; margin-left: auto; margin-right: auto;">
        <img src="../static/images/maf.png" style="height: 200px; width: 200px; display: block; margin-left: auto; margin-right: auto"></img><br>
        <h3>Partnership Deal Analysis and Dashboard Support</h3><br>
        <p style="margin: 0">Driving Strategic Partnerships and Data-Driven Insights for Business Growth at Majid Al Futtaim.</p><br>
        <p style="font-size: 20px">Description</p>
        <hr><br>
        <p>At Majid Al Futtaim, I played a crucial role in supporting strategic partnership deals with Mastercard and VISA by providing data analysis expertise and collaborating with cross-functional teams. While part of the team, I contributed to the development of comprehensive dashboards by supplying data and aiding in gap identification. This facilitated automated campaign reporting and improved understanding of user engagement and ROI. Additionally, I addressed data discrepancies, enhancing reporting accuracy by 95%. Through detailed performance analysis of campaigns, I assessed key parameters for success and optimized future strategies, underscoring the value of collaboration and data-driven decision-making in driving business growth.</p>
        <i><p>For privacy reasons, I cannot share more information or visuals on this project.</p></i>
      </div>

      <div v-if="project=='bike'" class="mw-100 w-75" style="display: block; margin-left: auto; margin-right: auto;">
        <img src="../static/images/cycle.png" style="height: 200px; width: 200px; display: block; margin-left: auto; margin-right: auto"></img><br>
        <h3>Data-Driven Insights: Empowering Bike Sales Analysis</h3>
        <p style="margin: 0">Unveiling Patterns and Trends through Robust Data Cleaning and Visualization</p><br>
        <p>Visit the Dashboard Here - <a href="https://app.powerbi.com/groups/me/reports/d6ede435-3450-416f-9b15-9b5b7004a71d/ReportSection96e198cb6e0ad7650e60?experience=power-bi">Link</a></p><br>
        <p style="font-size: 20px">Description</p>
        <hr><br>
        <p>Embarking on a journey of data exploration and analysis, I undertook a comprehensive project aimed at unraveling the intricate dynamics of bike sales through a meticulously crafted dashboard. Leveraging the formidable capabilities of Power Query Editor, I meticulously curated and cleansed the raw data, ensuring its integrity and reliability for subsequent analyses. Delving deep into the nuances of sales trends, I employed advanced modeling techniques to extract actionable insights, presenting a panoramic view of sales performance over time.</p><br>
        <img src="../static/images/pbi.png" style="height: 200px; width: 300px; display: block; margin-left: auto; margin-right: auto"></img><br>
        <p>The centerpiece of this endeavor was the development of a dynamic dashboard, meticulously engineered to showcase key metrics such as sales amount by month, Year-to-Date (YTD), Quarter-to-Date (QTD), Month-to-Date (MTD), and total sales numbers as shown in the dashboard excerpt above. Employing conditional formatting, I adeptly highlighted top-performing bike sellers based on sales performance, providing invaluable insights into the sales landscape. Through this project, I not only honed my skills in data wrangling and visualization but also gained a profound understanding of the underlying trends shaping bike sales dynamics.</p><br>
        <p>You can view the source files for this project here: <a href="https://github.com/avnishah13/Power-BI-Bike-Equipment-Sales-Data-Analysis">Github</a></p>
      </div>
    </div>
    </div>
  </div>
  </div>`,

  data() {
    return {
      project: null,
    }
  },

  methods: {
    mark_project(project) {
      this.project = project
    }
  },

  created() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/static/bootstrap/css/bootstrap.min.css';
    document.head.appendChild(link);

    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = '/static/css/portfolio.css';
    document.head.appendChild(stylesheet);
    },

  beforeUnmount() {
    const stylesheets = document.querySelectorAll('link[href="/static/css/portfolio.css"]');
    stylesheets.forEach(stylesheet => {
      document.head.removeChild(stylesheet);
    });
  },
}

export default portfolio