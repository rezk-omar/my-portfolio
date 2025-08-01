<template>
  <section class="navBar">
    <div class="flex justify-between items-center px-4 py-4 relative">
      <div class="flex items-center gap-4">
        <img src="/img/profile-image.jpg" alt="profile image" class="w-[70px] h-auto rounded-full object-cover"/>
        <h1 class="text-[30px] md:text-[50px] leading-none font-bold text-[#ededed]">Omar Rezk</h1>
      </div>
  
      <button
          class="lg:hidden flex flex-col justify-between items-center h-6 w-8"
          @click="toggleMenu"
          aria-label="Toggle Menu"
        >
          <span class="w-full h-1 bg-white"></span>
          <span class="w-full h-1 bg-white"></span>
          <span class="w-full h-1 bg-white"></span>
      </button>
  
      <!-- Desktop Navbar -->
        <ul class="hidden lg:flex gap-6 rounded-0">
          <li v-for="(item, index) in navItems" :key="index" class="list-group-item rounded-0">
            <a :href="item.href" class="hover:text-[#ce3662] font-bold text-[#ededed] text-[20px] md:text-[25px]">
              {{ item.name }}
            </a>
          </li>
        </ul>
  
        <!-- Mobile Navbar -->
        <ul v-if="isOpen" class="lg:hidden list-group absolute left-0 top-full w-full bg-white text-right rounded-0">
          <li v-for="(item, index) in navItems" :key="index" class="list-group-item font-bold text-[#332872] rounded-0">
            <a :href="item.href" class="hover:text-[#ce3662] font-bold text-[#081b29] text-[20px] md:text-[25px]">
              {{ item.name }}
            </a>
          </li>
        </ul>
  
    </div>
  </section>

  <section class="header-container">
    <div class="header-content">
      <h1 class="text-[20px] md:text-[30px] text-[#ededed] font-semibold">Hi, I'm Omar Rezk</h1>
      <div class="header-box">
        <p class="text-[20px] md:text-[30px] text-[#ededed] font-semibold">I'm an aspiring</p>
        <span class="text-[20px] md:text-[30px] text-[#00abf0] font-semibold">{{ currentHeader }}</span>
      </div>
      <div class="btn-box">
        <a href="/files/OmarRezk_FinalResume.docx.pdf" class="btn text-[15px] md:text-[25px] text-[#ededed]">Resume</a>
        <a href="mailto:omar.rizk6@gmail.com" class="btn text-[15px] md:text-[25px] text-[#ededed]">Let's Talk</a>
      </div>
    </div>
  </section>

</template>

<script>

export default {
  data() {
    return {
      isOpen: false,
      navItems: [
        { name: "About", href: "#" },
        { name: "Experience", href: "#" },
        { name: "Projects", href: "#" }
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
}
  },
  mounted() {
      this.typeWriter();
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
  background-color: #081b29;
}

.navBar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 5%;
  background-color: red;
}

.header-container {
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 5%;
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
  gap: 10px;
}

.header-box span {
  display: inline-block;
  min-width: 220px;
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

.header-content .btn-box {
  display: flex;
  justify-content: space-between;
  width: 210px;
  height: 65px;
}

.btn-box {
  margin-top: 30px;
}

.btn-box a {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #00abf0;
  border: 2px solid #00abf0;
  border-radius: 8px;
  color: #081b29;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 1px;
}

@media screen and (min-width: 768px) {
  .navBar {
    padding: 0 10%;
  }

  .header-container {
    padding: 0 10%;
  }

  .header-content .btn-box {
    width: 300px;
  }
}




/* $primary-red: #ce3662;
$primary-purple: #332872; */

</style>
