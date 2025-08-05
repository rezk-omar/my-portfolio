<template>
  <div class="container py-3 navigation-bar">
    <h1 class="navigation-logo">Omar Rezk.</h1>

    <!-- <div class="navigation-box">
      <h2 class="navigation-text">About</h2>
      <h2 class="navigation-text">Projects</h2>
      <h2 class="navigation-text">Contacts</h2>
    </div> -->
  </div>

  <section class="container banner">
    <div class="banner-content">
      <h1 class="banner-header">Hello.</h1>

      <div class="banner-line-row">
        <div class="banner-line"></div>
        <h1 class="banner-header2">I'm Omar</h1>
      </div>

      <h1 class="banner-subheader">Web Developer</h1>

      <div class="banner-btn_box">
        <a href="your-resume-link.pdf" class="banner-btn">Resume</a>
        <a href="#contact" class="banner-btn">Let's Connect</a>
      </div>
    </div>
  </section>




  <div class="language-container">
    <div v-for="(skill, index) in skills" :key="index" class="language-item">
      <i :class="skill.icon"></i>
      <span class="language-text">{{ skill.name }}</span>
    </div>
  </div>
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
    }
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
  color: #fff;
}

.navigation-text {
  color: #fff;
}

.banner {
  color: #fff;
  position: relative;
  margin-top: 25px;
  margin-bottom: 25px;
}

.banner-header {
  font-size: 65px;
  margin: 0;
}

.banner-header2 {
  font-size: 55px;
  margin: 0;
  line-height: 1;
}

.banner-subheader {
  font-size: 65px;
  margin: 0;
}

.banner-line-row {
  position: relative;
  margin-left: calc(-50vw + 50%); 
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
  background-color: #fff;
  margin-bottom: 10px;
}

.banner-btn_box {
  display: flex;
  gap: 20px;
}

.banner-btn {
  font-size: 35px;
  padding: 12px 24px;
  background-color: #000f36;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background 0.3s ease;
}

.banner-btn:hover {
  background-color: #00abf0;
}


.language-container {
  background-color: #fff;
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
}



</style>