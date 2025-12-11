<script setup lang="ts">
defineProps<{
  title: string;
  date: string;
  image: string;
  tag: string;
}>();
</script>

<template>
  <div
    class="max-w-[358px] w-full max-h-[334px] bg-grayish-blue rounded-b-lg z-[-2px] mx-auto"
  >
    <div class="px-7 pt-6">
      <UiTag :text="tag" />
      <div class="pt-1">
        <h3 class="text-deep-blue text-[17px] leading-[19px] font-medium">
          {{ title }}
        </h3>
        <p class="text-greyish-blue text-[10px] leading-[18px] mt-3">
          {{ date }}
        </p>
      </div>
    </div>
    <img :src="image" alt="" class="mt-1 h-[200px] w-full object-cover rounded-b-lg" />
  </div>
</template>
