<template>
  <div class="flex justify-between items-center px-4 py-4 border-b-4 border-b-[#ce3662] relative">
    <div class="flex items-center gap-4">
      <img src="/img/profile-image.jpg" alt="profile image" class="w-[70px] h-auto rounded-full object-cover"/>
      <h1 class="text-[30px] md:text-[50px] leading-none font-bold text-[#332872]">Omar Rezk</h1>
    </div>
    <!-- <div class="flex items-center">
      <ul class="flex gap-4">
        <a href="#"><li class="text-[10px] leading-none font-bold">About</li></a>
        <a href="#"><li class="text-[10px] leading-none font-bold">Experiences</li></a>
        <a href="#"><li class="text-[10px] leading-none font-bold">Projects</li></a>
      </ul>
    </div> -->

    <button
        class="md:hidden flex flex-col justify-between items-center h-6 w-8"
        @click="toggleMenu"
        aria-label="Toggle Menu"
      >
        <span class="w-full h-1 bg-black rounded"></span>
        <span class="w-full h-1 bg-black rounded"></span>
        <span class="w-full h-1 bg-black rounded"></span>
    </button>

    <!-- Desktop Navbar -->
      <ul class="hidden md:flex gap-6">
        <li v-for="(item, index) in navItems" :key="index" class="list-group-item">
          <a :href="item.href" class="hover:text-[#ce3662] font-bold text-[#332872] text-[20px] md:text-[35px]">
            {{ item.name }}
          </a>
        </li>
      </ul>

      <!-- Mobile Navbar -->
      <ul v-if="isOpen" class="md:hidden list-group absolute left-0 top-full w-full bg-white text-right">
        <li v-for="(item, index) in navItems" :key="index" class="list-group-item font-bold text-[#332872]">
          <a :href="item.href" class="hover:text-[#ce3662] font-bold text-[#332872] text-[20px] md:text-[35px]">
            {{ item.name }}
          </a>
        </li>
      </ul>

  </div>
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
    ]
    }
  },
  methods: {
    toggleMenu() {
    this.isOpen = !this.isOpen;
    console.log("isOpen:", this.isOpen);
    }
  }
}


</script>

<style scoped>

/* $primary-red: #ce3662;
$primary-purple: #332872; */

</style>
