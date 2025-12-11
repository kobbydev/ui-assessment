<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const isMobileMenuOpen = ref(false);
const menuButtonEl = ref<HTMLElement | null>(null);
const menuEl = ref<HTMLElement | null>(null);

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const onDocumentClick = (e: MouseEvent) => {
  if (!isMobileMenuOpen.value) return;
  const target = e.target as Node | null;
  if (!target) return;

  // Close only if click is outside both the button and the menu.
  if (menuEl.value?.contains(target)) return;
  if (menuButtonEl.value?.contains(target)) return;

  closeMobileMenu();
};

onMounted(() => {
  document.addEventListener("click", onDocumentClick, true);
});

onUnmounted(() => {
  document.removeEventListener("click", onDocumentClick, true);
});
</script>

<template>
  <div class="relative">
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
      <button
        type="button"
        class="inline-flex items-center justify-center"
        aria-label="Open menu"
        aria-controls="mobile-menu"
        :aria-expanded="isMobileMenuOpen"
        @click="toggleMobileMenu"
        ref="menuButtonEl"
      >
        <img
          src="../assets/icons/hamburger.svg"
          alt=""
          class="w-11 h-3 self-end"
          v-if="!isMobileMenuOpen"
        />
        <p class="text-2xl text-dark-blue" v-else>x</p>
      </button>

      <div
        v-if="isMobileMenuOpen"
        id="mobile-menu"
        ref="menuEl"
        class="absolute right-0 mt-4 w-[220px] rounded-xl bg-white shadow-lg ring-1 ring-black/5 p-4 z-10"
        role="menu"
        aria-label="Mobile navigation"
      >
        <ul class="flex flex-col gap-3 text-deep-blue">
          <li class="px-3 py-2 text-greyish-blue flex items-center gap-2">
            <span>Features</span>
            <img
              src="../assets/icons/chevron-down.svg"
              alt=""
              class="h-4 w-4"
            />
          </li>
          <li role="none">
            <NuxtLink
              to="/press"
              class="block rounded-md px-3 py-2 hover:bg-grayish-blue"
              role="menuitem"
              @click="closeMobileMenu"
              >Press</NuxtLink
            >
          </li>
          <li class="px-3 py-2 text-greyish-blue flex items-center gap-2">
            <span>Company</span>
            <img
              src="../assets/icons/chevron-down.svg"
              alt=""
              class="h-4 w-4"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
