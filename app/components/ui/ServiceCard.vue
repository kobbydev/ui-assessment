<script setup lang="ts">
defineProps<{
  subtitle: string;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  bgColor?: string;
}>();


</script>

<template>
  <div
    class="text-white px-9 pt-[55px] md:pt-[100px] md:px-[55px] rounded-lg relative h-max max-h-[800px]"
    :style="{ backgroundColor: bgColor ? `${bgColor}1a` : '#04ce9d1a' }"
  >
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
      class="relative right-[-36px] md:right-[-55px] top-[-7px] md:top-[-20px] pointer-events-none flex justify-end w-full"
    >
      <img
        :src="`/images/${image}.svg`"
        :alt="`${image} service`"
        class="object-contain"
      />
    </div>
  </div>
</template>
