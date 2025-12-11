<script setup lang="ts"></script>

<template>
  <footer
    class="bg-[url('/images/footer-bg.svg')] px-8 lg:px-[70px] pt-11 pb-[180px] mt-[219px] lg:mt-[299px]"
  >
    <div class="pb-[73px] border-b border-greyish-blue lg:px-[68px]">
      <h1
        class="text-5xl lg:text-[64px] text-deep-blue font-medium leading-[56px] lg:leading-[74px]"
      >
        Sign up for free
      </h1>
      <h1
        class="text-5xl lg:text-[64px] text-deep-blue font-medium leading-[56px] lg:leading-[74px]"
      >
        Join thousands of users
      </h1>
    </div>
    <div
      class="xl:px-[68px] pt-[52px] flex flex-col xl:flex-row gap-[67px] xl:gap-0 justify-between"
    >
      <div class="flex justify-between xl:justify-start xl:gap-[103px]">
        <div>
          <p class="font-medium text-deep-blue">Company</p>
          <ul
            class="mt-3 text-2xl leading-[29px] text-greyish-blue flex flex-col gap-2"
          >
            <li>About Us</li>
            <li>Features</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Legal</li>
          </ul>
        </div>
        <div>
          <p class="font-medium text-deep-blue">Support</p>
          <ul
            class="mt-3 text-2xl leading-[29px] text-greyish-blue flex flex-col gap-2"
          >
            <li>hello@bomba.co</li>
            <li>WhatsApp</li>
            <li>Help Center</li>
          </ul>
        </div>
      </div>
      <div>
        <p class="text-lg leading-[26px] text-deep-blue">
          The neo bank for Africans globally
        </p>
        <p class="text-lg leading-[26px] text-greyish-blue mt-[18px] lg:mt-6">
          Bomba Ltd is a UK-incorporated Company with Registration Number (RC.
          12551277)
        </p>
      </div>
    </div>
    <div
      class="xl:px-[68px] pt-[62px] xl:pt-[208px] flex flex-col xl:flex-row-reverse gap-[67px] xl:gap-0 justify-between xl:items-center w-full"
    >
      <div>
        <p class="hidden xl:block text-deep-blue text-[15px] leading-[18px]">
          Stay updated on our newsletters
        </p>
        <p class="xl:hidden text-deep-blue text-[15px] leading-[18px]">
          Stay updated by subscribing to our newsletters
        </p>

        <div class="flex flex-col xl:flex-row xl:gap-6">
          <div class="mt-[18px] bg-dark-blue py-[17px] px-[68px] rounded-r-lg">
            <input
              type="text"
              placeholder="Enter your email address"
              class="text-white text-[15px] leading-[24px] outline-none"
            />
          </div>
          <button
            class="border-b border-bright-blue text-bright-blue py-4 flex items-center gap-6 w-max xl:hidden"
          >
            Call to action
            <img src="../assets/icons/chevron-right.svg" alt="arrow right" />
          </button>
          <button
            class="border-b border-bright-blue text-bright-blue py-4 xl:flex items-center gap-6 w-max hidden"
          >
            Subscribe
            <img src="../assets/icons/chevron-right.svg" alt="arrow right" />
          </button>
        </div>

        <div class="mt-10 hidden xl:block">
          <ul
            class="hidden text-[15px] leading-[24px] text-greyish-blue xl:flex justify-between"
          >
            <li>Instagram</li>
            <li>Facebook</li>
            <li>LinkedIn</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
      <div>
        <div class="flex flex-row justify-between gap-6">
          <ul
            class="xl:hidden text-[15px] leading-[24px] text-greyish-blue flex flex-col gap-[15px]"
          >
            <li>Instagram</li>
            <li>Facebook</li>
            <li>LinkedIn</li>
            <li>Twitter</li>
          </ul>
          <div class="flex flex-col xl:flex-row gap-6 text-dark-blue">
            <button class="py-3 px-5 border border-greyish-blue rounded-lg flex gap-2">
              <img src="../assets/icons/playstore-icon.svg" alt="playstore icon" />
              <img src="../assets/icons/get-it-icon.svg" alt="google play text" />
            </button>
            <button class="py-3 px-5 border border-greyish-blue rounded-lg flex gap-2">
              <img src="../assets/icons/apple-icon.svg" alt="appstore icon" />
              <img src="../assets/icons/download-icon.svg" alt="google play text" />
            </button>
          </div>
        </div>
        <div
          class="text-[15px] leading-[24px] xl:mt-[18px] border-t border-greyish-blue xl:border-t-0 mt-[53px] pt-2"
        >
          <p class="text-deep-blue">
            © 2022 Bomba Limited. All rights reserved.
          </p>
          <p class="text-greyish-blue">
            Terms of Service <span class="text-lime-green">|</span> Privacy
            Policy <span class="text-lime-green">|</span> T&C UK
            <span class="text-lime-green">|</span> Cookie Policy
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
