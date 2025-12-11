<script setup lang="ts">
const partners: string[] = [
  "/images/partners/vfd.svg",
  "/images/partners/thunes.svg",
  "/images/partners/truelayer.svg",
  "/images/partners/access.svg",
  "/images/partners/railsr.svg",
  "/images/partners/trunarrative.svg",
  "/images/partners/paga.svg",
  "/images/partners/solid.svg",
  "/images/partners/identitypass.svg",
];
</script>

<template>
  <div
    class="mt-[218px] md:mt-[271px] px-8 lg:px-[138px] flex flex-col xl:flex-row gap-6 xl:gap-[57px]"
  >
    <div>
      <h1
        class="text-5xl md:text-[64px] text-deep-blue font-medium leading-[56px] md:leading-[74px]"
      >
        Trusted partners worldwide
      </h1>
      <p class="mt-2 md:mt-8 text-greyish-blue text-lg leading-[26px]">
        We're partners with countless major organisations around the globe
      </p>
    </div>
    <div class="flex-1">
      <div
        class="flex flex-wrap xl:grid xl:grid-cols-3 gap-6 xl:gap-12 items-center justify-items-center"
      >
        <div
          v-for="partner in partners"
          :key="partner"
          class="partner-logo-container group relative w-full max-w-[120px] max-h-[46px] aspect-[3/2] flex items-center justify-center"
        >
          <img
            :src="partner"
            :alt="`${partner} logo`"
            class="partner-logo-default w-full h-full max-h-[46px] object-contain transition duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.partner-logo-container {
  cursor: pointer;
}

.partner-logo-default {
  filter: brightness(0) saturate(100%) invert(52%) sepia(8%) saturate(980%)
    hue-rotate(185deg) brightness(92%) contrast(90%);
  transition: filter 0.01s ease, opacity 0.01s ease;
}

.partner-logo-container:hover .partner-logo-default {
  filter: none;
}
</style>
