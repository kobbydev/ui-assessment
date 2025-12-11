<script setup lang="ts"></script>

<template>
  <div>
    <div
      class="py-10 md:flex justify-center items-center w-full border-b border-greyish-blue hidden"
    >
      <ul class="flex items-center gap-10">
        <li class="flex items-center gap-2">
          Features
          <img src="../assets/icons/chevron-down.svg" alt="chevron down" />
        </li>
        <li class="flex items-center gap-2">
          <NuxtLink to="/press">Press</NuxtLink>
        </li>
        <li class="flex items-center gap-2">
          Company
          <img src="../assets/icons/chevron-down.svg" alt="chevron down" />
        </li>
      </ul>
    </div>
    <div class="absolute top-10 right-8 justify-end md:hidden">
      <img
        src="../assets/icons/hamburger.svg"
        alt="menu icon"
        class="w-11 h-3 self-end"
      />
    </div>
  </div>
</template>
