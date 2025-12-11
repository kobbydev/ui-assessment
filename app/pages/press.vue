<script setup lang="ts">
const pressCards = [
  {
    title: "Combining AI, fintech to solve African problems – Ericsson",
    date: "December 06, 2021",
    image: "/images/face-recognition.png",
    tag: "Connecting Africa",
  },
  {
    title: "Ghana to Host the 14th Africa Fintech Summit on October 8th",
    date: "May 24, 2022",
    image: "/images/summit.png",
    tag: "Tech Labari",
  },
  {
    title: "Midterm Report: Techstars Toronto’s Second 2021 Class",
    date: "Dec 06, 2021",
    image: "/images/midterm-report.png",
    tag: "Techstars",
  },
  {
    title:
      "Wise granted approval to join Zengin, Japan’s domestic payment system",
    date: "December 06, 2021",
    image: "/images/wise.png",
    tag: "Medium",
  },
  {
    title:
      "African startups to participate at Techstars Toronto October 2021 cohort",
    date: "October 23, 2021",
    image: "/images/techstars.png",
    tag: "Further Africa",
  },
  {
    title: "More African startups get into Techstars Toronto",
    date: "October 18, 2021",
    image: "/images/techstars.png",
    tag: "TechCrunch",
  },
];
</script>

<template>
  <div>
    <Header />
    <PressHeroSection />
    <div class="mt-[125px] px-8 lg:px-[138px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-11 lg:gap-0">
      <UiPressCard v-for="card in pressCards" :key="card.title" v-bind="card" />
    </div>
  </div>
</template>
