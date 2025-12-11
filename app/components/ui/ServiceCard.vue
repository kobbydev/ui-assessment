<script setup lang="ts">
defineProps<{
  subtitle: string;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  bgColor?: string;
  comingSoon?: boolean;
}>();
</script>

<template>
  <div
    class="text-white px-9 pt-[63px] md:pt-[100px] md:px-[55px] rounded-lg relative h-max max-h-[800px] min-h-[700px]"
    :style="{ backgroundColor: bgColor ? `${bgColor}1a` : '#04ce9d1a' }"
  >
    <div v-if="comingSoon">
      <img
        src="../../assets/icons/coming-soon-icon.svg"
        alt="coming soon icon"
        class="object-contain absolute top-3 md:top-5 left-8 md:left-[55px] w-11 md:w-[74px]"
      />
    </div>
    <p class="text-2xl leading-[31px] text-greyish-blue">
      {{ title }}
    </p>
    <h2 class="text-3xl leading-[42px] text-dark-blue">
      {{ subtitle }}
    </h2>
    <p class="mt-4 text-lg leading-[26px] text-greyish-blue">
      {{ description }}
    </p>
    <button
      class="mt-9 md:mt-10 text-bright-blue border-b border-bright-blue pb-4 flex items-center gap-6"
    >
      {{ buttonText }}
      <img src="../../assets/icons/arrow-right.svg" alt="arrow right" />
    </button>

    <div
      class="relative right-[-36px] md:right-[-55px] top-[-16px] md:top-[-10px] pointer-events-none flex justify-end w-full"
    >
      <img
        :src="`/images/${image}.svg`"
        :alt="`${image} service`"
        class="object-contain h-full"
      />
    </div>
  </div>
</template>
