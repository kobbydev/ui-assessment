<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

interface Slide {
  id: number;
  title: string;
  description: string;
  mobileImage: string;
  desktopImage: string;
}

const slides: Slide[] = [
  {
    id: 0,
    title: "Multi-currency accounts for Africans",
    description:
      "Transact at home and abroad - create, send, hold, receive money in African currencies and foreign currencies while also sending money to and from Africa seamlessly",
    mobileImage: "../assets/images/mobile-hero.svg",
    desktopImage: "../assets/images/desktop-hero.svg",
  },
  {
    id: 1,
    title: "Choose from several payment methods",
    description:
      "With Bomba, you get to choose how you send and receive money; send at your own rate with '<span class='text-lime-green'>Swap</span>', send and receive instantly with '<span class='text-lime-green'>Express</span>',  or make free local transfers with '<span class='text-lime-green'>Withdraw Money</span>'",
    mobileImage: "../assets/images/mobile-hero.svg",
    desktopImage: "../assets/images/desktop-hero.svg",
  },
  {
    id: 2,
    title: "Accept and create offers with Swap",
    description:
      "You can send money internationally at your preferred rate on our <span class='text-lime-green'>Peer-to-peer Marketplace</span> by choosing or accepting an offer. Created offers get accepted within an average time of 30 minutes",
    mobileImage: "../assets/images/mobile-hero.svg",
    desktopImage: "../assets/images/desktop-hero.svg",
  },
  {
    id: 3,
    title: "Make instant transfers with Express",
    description:
      "When you send money using '<span class='text-lime-green'>Express</span>' - it’s sent at Bomba exchange rate and your transaction is completed instantly",
    mobileImage: "../assets/images/mobile-hero.svg",
    desktopImage: "../assets/images/desktop-hero.svg",
  },
  {
    id: 4,
    title: "Review and confirm your transaction ",
    description:
      "Review your transaction, ensure that the provided details are correct, then click the send button!  ",
    mobileImage: "../assets/images/mobile-hero.svg",
    desktopImage: "../assets/images/desktop-hero.svg",
  },
  {
    id: 5,
    title: "Completed! Fast, easy and secure ",
    description:
      "Money on its way! Send money today to your friends, family or make payment to a business. Get started <span class='text-lime-green'>→</span>",
    mobileImage: "../assets/images/mobile-hero.svg",
    desktopImage: "../assets/images/desktop-hero.svg",
  },
];

const currentSlide = ref(0);
const viewedSlides = ref<Set<number>>(new Set([0]));
const slideDirection = ref<"left" | "right">("right");
let autoSlideInterval: ReturnType<typeof setInterval> | null = null;

const goToSlide = (index: number) => {
  if (index === currentSlide.value) return;

  // Determine slide direction
  slideDirection.value = index > currentSlide.value ? "right" : "left";

  currentSlide.value = index;
  viewedSlides.value.add(index);

  // Reset auto-slide timer
  resetAutoSlide();
};

const nextSlide = () => {
  slideDirection.value = "right";
  const next = (currentSlide.value + 1) % slides.length;
  currentSlide.value = next;
  viewedSlides.value.add(next);
  resetAutoSlide();
};

const resetAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
  }
  autoSlideInterval = setInterval(() => {
    nextSlide();
  }, 5000);
};

const isIndicatorClickable = (index: number) => {
  return viewedSlides.value.has(index) && index !== currentSlide.value;
};

const isIndicatorActive = (index: number) => {
  return index <= currentSlide.value;
};

const scrollDown = () => {
  const missionSection = document.getElementById("mission-section");
  if (missionSection) {
    missionSection.scrollIntoView({ behavior: "smooth" });
  }
};

onMounted(() => {
  resetAutoSlide();
});

onUnmounted(() => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
  }
});
</script>

<template>
  <div class="h-max bg-grayish-blue pb-3 relative overflow-hidden">
    <Header />

    <!-- Slider Container -->
    <div class="px-8 lg:px-[68px] pt-[58px] md:pt-0">
      <div class="relative overflow-hidden">
        <div
          class="slider-wrapper"
          :class="{
            'slide-direction-right': slideDirection === 'right',
            'slide-direction-left': slideDirection === 'left',
          }"
          :style="{
            transform: `translateX(-${currentSlide * 100}%)`,
          }"
        >
          <div v-for="(slide, index) in slides" :key="slide.id" class="slide">
            <img
              src="../../assets/images/mobile-hero.svg"
              :alt="`hero image ${index + 1}`"
              class="w-[236px] h-[350px] mt-[58px] mx-auto lg:hidden"
            />
            <img
              src="../../assets/images/desktop-hero.svg"
              :alt="`hero image ${index + 1}`"
              class="w-[298px] h-[725px] mx-auto hidden lg:block"
            />

            <div
              class="flex flex-col lg:flex-row gap-5 lg:gap-12 text-dark-blue lg:items-end"
            >
              <h1 class="text-5xl font-medium">{{ slide.title }}</h1>
              <p v-html="slide.description"></p>
            </div>

            <div class="lg:hidden mt-6 flex items-center gap-4">
              <img src="../../assets/icons/play-icon.svg" alt="play icon" />
              <p class="text-lg text-dark-blue">See how it works</p>
            </div>

            <button class="mt-12 px-6 lg:hidden" @click="scrollDown">
              <img
                src="../../assets/icons/arrow-down.svg"
                alt="scroll down icon"
              />
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Indicators -->
    <div class="slider-track-container mt-8 lg:mt-12 hidden lg:block">
      <div class="slider-track">
        <button
          v-for="(slide, index) in slides"
          :key="slide.id"
          @click="goToSlide(index)"
          :class="[
            'indicator-segment',
            {
              'indicator-active': isIndicatorActive(index),
              'indicator-clickable': isIndicatorClickable(index),
            },
          ]"
          :disabled="!isIndicatorClickable(index) && index !== currentSlide"
          :aria-label="`Go to slide ${index + 1}`"
        />
      </div>
    </div>

    <div class="hidden lg:flex mt-8 px-[68px] justify-between mb-10">
      <div class="flex gap-[18px]">
        <p class="text-greyish-blue text-[15px] leading-[24px]">
          News & Release update
        </p>
        <div class="text-[17px] leading-[27px] text-greyish-blue">
          <p>
            June 20, 2022 —
            <span class="text-bright-blue"
              >Bomba now has a dollar wallet, activate your account</span
            >
          </p>
          <p>
            June 01, 2022 —
            <span class="text-bright-blue"
              >Top 10 Summer Vacation Places In 2022</span
            >
          </p>
        </div>
      </div>
      <div class="flex items-center gap-2 cursor-pointer" @click="scrollDown">
        <p class="text-dark-blue text-2xl leading-[32px]">Scroll down</p>
        <img src="../../assets/icons/arrow-down.svg" alt="scroll down icon" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.slider-wrapper {
  display: flex;
  width: 100%;
  will-change: transform;
}

.slide-direction-right {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-direction-left {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide {
  min-width: 100%;
  flex-shrink: 0;
  width: 100%;
}

.slider-track-container {
  width: 100%;
  padding: 0;
}

.slider-track {
  width: 100%;
  height: 2px;
  background-color: #d1d1d1;
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
}

.indicator-segment {
  height: 2px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
  background-color: #d1d1d1;
  flex: 1;
  min-width: 60px;
}

.indicator-active {
  background-color: #2668ec;
  height: 2px;
}

.indicator-clickable {
  cursor: pointer;
}

.indicator-clickable:hover {
  background-color: #1a4fc4;
  height: 3px;
  margin-top: -0.5px;
}
</style>
