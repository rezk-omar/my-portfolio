<template>
  <section :class="['navBar', scrolledPastBanner ? 'nav-scrolled' : '']">
    <div class="flex justify-between items-center py-4 relative">
      <div class="flex items-center gap-4">
        <img src="/img/profile-image.jpg" alt="profile image" class="w-[70px] h-auto rounded-full object-cover"/>
        <h1 :class="['text-[30px] md:text-[50px] leading-none font-bold', scrolledPastBanner ? 'text-[#00f36]' : 'text-[#ededed]']">Omar Rezk</h1>
      </div>
  
      <button
          class="lg:hidden flex flex-col justify-between items-center h-6 w-8"
          @click="toggleMenu"
          aria-label="Toggle Menu"
        >
          <span class="w-full h-1" :class="scrolledPastBanner ? 'bg-[#000f36]' : 'bg-white'" ></span>
          <span class="w-full h-1" :class="scrolledPastBanner ? 'bg-[#000f36]' : 'bg-white'" ></span>
          <span class="w-full h-1" :class="scrolledPastBanner ? 'bg-[#000f36]' : 'bg-white'" ></span>
      </button>
  
      <!-- Desktop Navbar -->
        <ul class="hidden lg:flex gap-6 rounded-0">
          <li v-for="(item, index) in navItems" :key="index" class="list-group-item rounded-0">
            <a :href="item.href" :class="[
              'font-bold text-[20px] md:text-[25px] hover:text-[#00abf0]',
              scrolledPastBanner ? 'text-[#000f36]' : 'text-[#ededed]'
              ]">
              {{ item.name }}
            </a>
          </li>
        </ul>
      </div>
  
        <!-- Mobile Navbar -->
        <ul
            v-if="isOpen"
            class="lg:hidden list-group absolute left-0 top-full w-full text-right rounded-0 transition duration-300"
          >
            <li
              v-for="(item, index) in navItems"
              :key="index"
              class="list-group-item font-bold px-4 py-3 text-[20px] md:text-[25px] transition duration-300"
            >
              <a
                :href="item.href"
                :class="[
                  'font-bold text-[#000f36] hover:text-[#00abf0]',
                  scrolledPastBanner ? 'text-[#000f36]' : ''
                ]"
              >
                {{ item.name }}
              </a>
            </li>
          </ul>


  
  </section>

  <section class="banner-container">
    <div class="banner-box">
      <h1 class="text-[30px] md:text-[60px] text-[#ededed] font-semibold">Hi, I'm Omar Rezk</h1>
        <div class="header-box">
          <p class="text-[15px] md:text-[30px] text-[#ededed] font-semibold">I'm an aspiring</p>
          <span class="text-[15px] md:text-[30px] text-[#00abf0] font-semibold">{{ currentHeader }}</span>
        </div>
        <div class="btn-box">
          <a href="/files/OmarRezk_FinalResume.docx.pdf" class="btn btnLink text-[15px] md:text-[25px] text-[#ededed]">Resume</a>
          <a href="mailto:omar.rizk6@gmail.com" class="btn btnLink text-[15px] md:text-[25px] text-[#ededed]">Let's Connect</a>
        </div>
    </div>
  </section>

  <section class="header-container mb-5 mt-5 md:mt-2 md:mb-2">
    <div class="header-content">

      <!-- Wrap both sections in flex container -->
      <div class="flex flex-col md:flex-row w-full gap-6">

        <!-- ABOUT ME section -->
        <div id="aboutme" class="flex flex-col items-center text-center w-full md:w-1/2">
          <h1 class="text-[50px] md:text-[60px] text-[#000f36] font-semibold mb-2">ABOUT ME</h1>
          <div class="h-[6px] w-20 bg-[#00abf0] rounded mb-5"></div>

          <div class="text-[20px] text-[#000f36] md:text-[25px] px-4 md: text-left">
            <p>
              I am a Web Developer with a passion for creating web applications and interaction design projects. My journey is constantly
              evolving through experience I have gained from working on impactful projects, developing efficient solutions and adding to my
              skill set through continuous education and learning and staying up-to-date with the latest industry technologies.
            </p>
          </div>
        </div>

        <!-- SKILLS section -->
        <div class="flex flex-col items-center text-left w-full md:w-1/2">
          <h1 class="text-[50px] md:text-[60px] text-[#000f36] font-semibold mb-2">SKILLS</h1>
          <div class="h-[6px] w-20 bg-[#00abf0] rounded mb-5"></div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 w-full px-4">
            <div
              v-for="(skill, index) in skills"
              :key="index"
              class="group flex flex-col justify-center items-center h-28 w-full bg-[#f5f5f5] rounded-md shadow-md gap-2 transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <i :class="skill.icon + ' text-[50px] text-[#000f36] group-hover:text-[#00abf0] transition-colors duration-300'"></i>
              <span class="text-[#000f36] text-[18px] md:text-[20px] group-hover:text-[#00abf0] transition-colors duration-300">
                {{ skill.name }}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <section class="header-container mb-5 mt-5 md:mt-2 md:mb-2">
    <div class="header-content">

      <div class="flex flex-col md:flex-row w-full gap-6">

        <!-- Projects Section -->
        <div id="projects" class="flex flex-col items-center text-center w-full">
          <h1 class="text-[50px] md:text-[60px] text-[#000f36] font-semibold mb-2">PROJECTS</h1>
          <div class="h-[6px] w-20 bg-[#00abf0] rounded mb-5"></div>

        </div>

      </div>
    </div>
  </section>


</template>

<script>

export default {
  data() {
    return {
      isOpen: false,
      scrolledPastBanner: false,
      navItems: [
        { name: "About", href: "#aboutme" },
        { name: "Experience", href: "#" },
        { name: "Projects", href: "#" }
      ],
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
      headerText: [
        'Web Developer...',
        'Graphic Designer...',
        'Creative Thinker...'
      ],
      currentHeader: '',
      headerIndex: 0,
      charIndex: 0,
      isDeleting: false
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    typeWriter() {
      const fullText = this.headerText[this.headerIndex];

      if (this.isDeleting) {
        this.charIndex--;
      } else {
        this.charIndex++;
      }

      this.currentHeader = fullText.substring(0, this.charIndex);

      let delay = this.isDeleting ? 50 : 100;

      if (!this.isDeleting && this.charIndex === fullText.length) {
        delay = 1500;
        this.isDeleting = true;
      } else if (this.isDeleting && this.charIndex === 0) {
        this.isDeleting = false;
        this.headerIndex = (this.headerIndex + 1) % this.headerText.length;
        delay = 300;
      }

        setTimeout(this.typeWriter, delay);
    },
      handleScroll() {
        const banner = document.querySelector('.banner-container');
        if (banner) {
          const scrollTop = window.scrollY;
          const bannerBottom = banner.offsetTop + banner.offsetHeight;
          this.scrolledPastBanner = scrollTop > bannerBottom - 50;
        }
    }
  },
  mounted() {
      this.typeWriter();
      window.addEventListener('scroll', this.handleScroll);

  },
  beforeUnmount() {
  window.removeEventListener('scroll', this.handleScroll);
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
  background-color: #fff;
}

.navBar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 5%;
  z-index: 999;
  background: transparent;

}

.nav-scrolled {
  background-color: #fff;
  transition: background-color 0.3s ease;
}

.banner-container {
  background-image: url("/img/circle-background.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 90vh;
  display: flex;
  justify-content: center;   
  align-items: center;       
  padding: 0 5%;            
}


.banner-box {
  display: flex;
  flex-direction: column;
  align-items: left;        
  text-align: left;         
}

.header-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5%;
  text-align: center;
}

.header-content {
  max-width: 1200px;
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-from {
  transform: translateY(10px);
}

.fade-leave-to {
  transform: translateY(-10px);
}

.header-box {
  display: flex;
  align-items: baseline;
  gap: 10px;
}

.custom-icon:hover {
  color: #00abf0;
}


.header-box span {
  display: inline-block;
  width: 220px;
  white-space: nowrap;
}

.header-box span::after {
  content: '|';
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.btn-box {
  display: flex;
  margin-top: 30px;
  gap: 10px;
}

.btn-box .btnLink {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #00abf0;
  border: 2px solid #00abf0;
  border-radius: 8px;
  color: #000f36;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;    
  z-index: 1; 
  overflow: hidden;
  transition: .5s;
}

.btn-box .btnLink:hover {
  color: #00abf0;
}

.btn-box a:nth-child(2) {
  background: transparent;
  color: #00abf0;
}

.btn-box a:nth-child(2):hover {
  color: #000f36;
}

.btn-box a:nth-child(2)::before {
  background: #00abf0;
}

.btn-box a::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: #000f36;
  z-index: -1;
  transition: .5s;
}

.btn-box a:hover::before {
  width: 100%;

}


</style>
