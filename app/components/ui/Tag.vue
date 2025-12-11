<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<template>
  <span class="tag-wrapper inline-flex relative">
    <span
      class="tag inline-flex items-center px-[6px] py-1 rounded-[3px] text-white text-[10px] leading-[18px] font-normal bg-lime-green relative z-10"
    >
      {{ text }}
    </span>
  </span>
</template>

<style scoped>
.tag-wrapper {
  z-index: 1000 !important;
}
.tag-wrapper::before {
  content: "";
  position: absolute;
  inset: 0;
  right: -1px;
  border-radius: 3px;
  background: repeating-linear-gradient(
    45deg,
    #0d2c65 0px,
    #0d2c65 1px,
    transparent 1px,
    transparent 1.5px
  );
  z-index: 0;
  transform: translate(2px, 2px);
}
</style>