<script setup lang="ts"></script>

<template>
  <div class="px-8 lg:px-[138px] pt-8 pb-[107px]" id="mission-section">
    <h1
      class="text-[34px] md:text-[40px] text-dark-blue font-medium leading-[37px] md:leading-[47px] w-full max-w-[943px] md:text-center md:mx-auto"
    >
      We are on a mission to reduce the cost of sending money to Africa at an
      average cost of 1%
    </h1>

    <div
      class="mt-12 flex flex-col xl:flex-row-reverse md:justify-between xl:gap-[136px] mx-auto"
    >
      <div>
        <p class="text-greyish-blue text-2xl mb-3 leading-[31px]">Why Bomba?</p>
        <h1
          class="text-[48px] xl:text-[64px] text-dark-blue font-medium leading-[56px] md:leading-[74px]"
        >
          Send & Receive money on your own terms
        </h1>
        <p
          class="hidden xl:block text-greyish-blue text-xl leading-[26px] mt-8"
        >
          Bomba provides you the luxury of sending money at rates that suit you.
          You can easily send and swap money between
          <span class="text-dark-blue">GBP, USD, NGN</span> and up to 20 other
          African countries using Bomba’s '<span class="text-lime-green"
            >Swap</span
          >' and '<span class="text-lime-green">Express</span>' services. Beat
          bank rates, save time and gain more.
        </p>
      </div>
      <div class="mt-8 xl:mt-0 w-full">
        <HomeMoneyTransferWidget />

        <p
          class="xl:hidden block text-greyish-blue text-lg leading-[26px] mt-[42px]"
        >
          Bomba provides you the luxury of sending money at rates that suit you.
          You can easily send and swap money between
          <span class="text-dark-blue">GBP, USD, NGN</span> and up to 20 other
          African countries using Bomba’s '<span class="text-lime-green"
            >Swap</span
          >' and '<span class="text-lime-green">Express</span>' services. Beat
          bank rates, save time and gain more.
        </p>
      </div>
    </div>
  </div>
</template>
