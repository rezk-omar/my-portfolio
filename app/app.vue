<template>
  <div class="custom-cursor"></div>
  <div class="container py-3 navigation-bar">
    <h1 class="navigation-logo">Omar Rezk.</h1>
  </div>

  <section class="main-section container">
    <!-- LEFT SECTION -->
    <div class="left-section">
      <!-- Banner -->
      <div class="banner">
        <div class="container banner-wrapper">
          <div class="banner-content">
            <h1 class="banner-header">Hello.</h1>
            <div class="banner-line-row">
              <div class="banner-line"></div>
              <h1 class="banner-header2">I'm Omar</h1>
            </div>
            <h1 class="banner-subheader">Web Developer</h1>
            <div class="banner-btn_box">
              <a href="/files/OmarRezk_FinalResume.docx.pdf" class="banner-btn filled">Resume</a>
              <a href="https://www.linkedin.com/in/omarrezk/" class="banner-btn outlined">Let's Connect</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation below banner -->
      <div class="left-box">
        <div class="about-box" @click="scrollToSection('about')">
          <div class="line"></div>
          <h1 class="content-text">About</h1>
        </div>
        <div class="about-box" @click="scrollToSection('experience')">
          <div class="line"></div>
          <h1 class="content-text">Experience</h1>
        </div>
      </div>
    </div>

    <!-- RIGHT SECTION -->
    <div class="content-container">
      <div class="right-box">
        <!-- About Section -->
        <div id="about" class=" description-box fade-in-section section-block mb-5">
          <p class="description-text">
            I am a Software Developer with a passion for creating web applications and interactive design projects.
            My journey is constantly evolving through experience I have gained from working on impactful projects,
            developing efficient solutions and adding to my skill set through continuous education and learning and
            staying up-to-date with the latest industry technologies.
            <br/><br/>
            I am always looking for impactful projects and to work with like minded people and organizations so let's connect!
          </p>
        </div>

        <!-- Experience Section -->
        <div id="experience" class="fade-in-section section-block mb-5">
          <div 
            v-for="(exp, index) in experiences" 
            :key="index" 
            class="experience-container"
          >
            <div class="leftbox-experience">
              <p class="experience-date">{{ exp.date }}</p>
            </div>
            <div class="rightbox-experience">
              <h1 class="experience-header mb-1">{{ exp.title }}</h1>
              <ul class="no-bullets">
                <li v-for="(item, i) in exp.details" :key="i">{{ item }}</li>
              </ul>
              <div class="language-experience_box">
                <div 
                  class="language" 
                  v-for="(icon, j) in exp.tools" 
                  :key="j"
                >
                  <i :class="icon" class="icon-img"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>


<script>
export default {
  data() {
    return {
            skills: [
              { name: 'HTML5', icon: 'devicon-html5-plain' },
              { name: 'JavaScript', icon: 'devicon-javascript-plain' },
              { name: 'Nuxt.js', icon: 'devicon-nuxtjs-plain' },
              { name: 'React', icon: 'devicon-react-original-wordmark' },
              { name: 'Figma', icon: 'devicon-figma-plain' },
              { name: 'Photoshop', icon: 'devicon-photoshop-plain' },
              { name: 'Illustrator', icon: 'devicon-illustrator-plain' },
              { name: 'Angular', icon: 'devicon-angular-plain'}
            ],
            experiences: [
              {
                date: 'Aug 2020 - Aug 2024',
                title: 'Technical Specialist — Ghost Kitchens Brands',
                details: [
                  'Served as the point of contact for partners, customers and internal/external stakeholders ensuring issue management, quality control and omnichannel goals are communicated and met.',
                  'Generated an analysis model for sales and performance of all store locations to produce data visualization for operational strategies, revenue goals/KPIs and forecasting and reported to the management team.',
                  'In charge of optimizing and updating web content and overall user experience to increase traffic and sales on delivery platforms such as UberEats, DoorDash, Grubhub and SkiptheDishes.',
                  'Created marketing material in collaboration with the delivery platforms creative team which included brochures, catalogs, photoshoots, campaigns and production assets.',
                  'In charge of planning and supporting new store openings through briefing and onboarding for staff at the locations, providing materials and resources leading to successful grand openings of various locations.'
                ],
                tools: [
                  'devicon-photoshop-plain',
                  'devicon-illustrator-plain',
                  'devicon-figma-plain',
                  'devicon-canva-original'
                ]
              },
              {
                date: 'Oct 2023 - Oct 2024',
                title: 'Junior Frontend Developer - Glamic',
                details: [
                  'Developed and maintained responsive web applications using React, HTML, CSS, and JavaScript, resulting in an increase in user engagement and profile completion rates.',
                  'Designed and implemented reusable components, including a dynamic alert system, improving user experience and reducing transactional errors.',
                  'Collaborated with back-end developers to integrate front-end applications with server-side logic and RESTful APIs.',
                  'Applied responsive design principles to create interfaces that enhance user accessibility and functionality across devices.',
                  'Created a toggle feature for portfolio and bio options, utilizing the useState hook for state management and enhancing profile personalization and presentation. Improved user profile customization.'
                ],
                tools: [
                  'devicon-reactnative-original',
                  'devicon-adonisjs-original',
                  'devicon-html5-plain',
                  'devicon-sass-original'
                ]
              },
              {
                date: 'Sept 2019 - Jan 2023',
                title: 'Graphic Designer - CreativeToo Incorporated',
                details: [
                  'Managed a portfolio of small and medium sized businesses such as NHL, Ghost Kitchens, PBS, Globalhire, Ace Law Group and others.',
                  'Collaborated with marketing to design & produce graphics using content management systems for various digital & print materials, including brochures, flyers, postcards and social media posts & graphics.',
                  'Designed digital and direct marketing campaigns as well as created brand identities and strategies that resulted in an increase of ROI for multiple clients.',
                  'Managed all social media channels increasing the online presence, which led in the development and execution of demand generation campaigns including ads, email and social media.',
                  'Designed and outlined brand identity, including the logo, typography, color palettes, shapes and social media graphics.'
                ],
                tools: [
                  'devicon-photoshop-plain',
                  'devicon-illustrator-plain',
                  'devicon-figma-plain',
                  'devicon-canva-original'
                ]
              }
            ]
    }
  },
   methods: {
    scrollToSection(id) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  },
  mounted() {
  const cursor = document.querySelector('.custom-cursor');

  window.addEventListener('mousemove', (e) => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
  });
}

}

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  background-color: #000f36;
  cursor: none;
}

.custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  background: radial-gradient(
    circle,
    rgba(225, 225, 225, 0.25) 0%,
    transparent 100%  
  );
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  mix-blend-mode: screen;
  transition: transform 0.05s ease;
}

.navigation-bar {
  display: flex;
  justify-content: space-between;
}

.navigation-box {
  display: flex;
  gap: 10px;
}

.navigation-logo {
  font-size: 55px;
  color: #f5f7fa;
}

.navigation-text {
  color: #f5f7fa;
}

.main-section {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
}

.left-section {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.banner {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  padding: 20px 0;
}

.banner-content {
    text-align: left;
}

.banner-wrapper {
  display: flex;
  align-items: center;
  gap: 40px; 
}

.banner-img {
  width: 350px;
  max-width: 100%;
  height: auto;
  border-radius: 10px;

}

.banner-header {
  font-size: 65px;
  margin: 0;
  color: #f5f7fa;
}

.banner-header2 {
  font-size: 55px;
  margin: 0;
  line-height: 1;
  color: #f5f7fa;
}

.banner-subheader {
  font-size: 65px;
  margin: 0;
  color: #f5f7fa;
}

.banner-line-row {
  position: relative;
  margin-left: calc(-41vw + 50%); 
  width: 100vw;
  max-width: 100vw;
  display: flex;
  align-items: flex-end;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}


.banner-line {
  width: 250px;
  height: 7px;
  background-color: #f5f7fa;
  margin-bottom: 10px;
}

.banner-btn_box {
  display: flex;
  gap: 20px;
}

.banner-btn {
  font-size: 32px;
  padding: 12px 24px;
  text-decoration: none;
  border-radius: 10px;
  font-weight: bold;
  transition: opacity 0.3s ease, box-shadow 0.3s ease;
  background-color: #1a1f3c;
  color: #f5f7fa;
  opacity: 0.2;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  border: none;
  cursor: none;
}

.banner-btn:hover {
  opacity: 1;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
  cursor: none;
}

.banner-btn.outlined {
  background-color: transparent;
  color: #f5f7fa;
  border: 2px solid #1a1f3c;
  opacity: 0.2;
  border-radius: 10px;
  padding: 12px 24px;
  font-size: 32px;
  transition: opacity 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  cursor: none;
}

.banner-btn.outlined:hover {
  opacity: 1;
  background-color: #1a1f3c;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
  cursor: none;
}

.content-container {
  width: 50%;
  padding: 20px;
}

.left-box {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.about-box {
  width: 25%;
  display: flex;
  align-items: flex-end;
  gap: 10px;
  transition: transform 0.3s ease;
  opacity: .2;
}

.right-box {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.content-header {
  font-size: 25px;
  color: #f5f7fa;
}

.description-box {
  background-color: #1a1f3c;
  opacity: .2;
  display: flex;
  align-items: baseline;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  transition: opacity 0.3s ease, box-shadow 0.3s ease;
  color: #f5f7fa;
}

.content-text {
  font-size: 25px;
  color: #f5f7fa;
}

.description-text {
  font-size: 20px;
  color: #f5f7fa;
}

.line {
  width: 150px;
  height: 3px;
  background-color: #f5f7fa;
  margin-bottom: 10px;
}

.about-box:hover {
  transform: translateX(10px);
}

/* .language-container {
  background-color: #f5f7fa;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
}

.language-item {
  color: #000f36;
  font-size: 35px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease;
}

.language-item:hover {
  transform: scale(1.1);
  color: #00abf0;
}

.language-text {
  color: #000f36;
  font-size: 25px;
  transition: color 0.3s ease;
}

.language-item:hover .language-text {
  color: #00abf0;
} */

.language-experience_box {
  margin-top: 15px;
  display: flex;
  gap: 10px;
}

.icon-img {
  font-size: 30px;
  color: #f5f7fa;
}

.experience-container {
  background-color: #1a1f3c;
  opacity: .2;
  display: flex;
  align-items: baseline;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  transition: opacity 0.3s ease, box-shadow 0.3s ease;
}

.leftbox-experience {
  width: 30%;
  color: #f5f7fa;
}

.rightbox-experience {
  width: 70%;
  color: #f5f7fa;
}

.experience-header {
  font-size: 18px;
}

.experience-date {
  font-size: 18px;
}

.no-bullets {
  list-style: none;
  padding-left: 0;
  color: #f5f7fa;
  font-size: 12px;
}

.leftbox-experience:hover, .rightbox-experience:hover {
  opacity: 1;
}

.experience-container:hover, .description-box:hover {
  opacity: 1;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
}


</style>