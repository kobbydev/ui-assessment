<script setup lang="ts">
const services = [
  {
    title: "Swap",
    subtitle: "Peer to peer marketplace",
    description:
      "Do you worry about unfavourable exchange rates when sending money? Create or accept offers at your preferred rate on Bomba's Peer to peer marketplace.",
    image: "swap",
    buttonText: "Swap now",
    bgColor: "#6d48ff",
  },
  {
    title: "Express",
    subtitle: "Take the express lane",
    description:
      "Transact with light speed using Bomba Express. You can send funds at Bomba’s exchange rates to family and friends from the UK & US to 20 African countries.",
    image: "express",
    buttonText: "Send now",
    bgColor: "#04ce9d",
  },
  {
    title: "Refer & Earn",
    subtitle: "Make money while you refer",
    description:
      "Bomba allows you to earn passively through its platform. Refer your friends and family to use Bomba and earn up to £140",
    image: "refer",
    buttonText: "Share now",
    bgColor: "#6e80a3",
  },
  {
    title: "Bomba Connect",
    subtitle: "Deals from top brands ",
    description:
      "With Bomba Connect, you can pay for and access goods and services from some of the best and trusted brands - at the best rates and with minimal wait time - all within the Bomba App.  ",
    image: "connect",
    buttonText: "Explore now",
    bgColor: "#ef845c",
    comingSoon: true,
  },
];

const leftColumnServices = computed(() =>
  services.filter((_, index) => index % 2 === 0)
);

const rightColumnServices = computed(() =>
  services.filter((_, index) => index % 2 === 1)
);
</script>

<template>
  <div class="px-8 lg:px-[138px]">
    <div
      class="border-t border-greyish-blue pt-[57px] md:pt-12 max-w-[1047px] lg:text-center mx-auto"
    >
      <h1
        class="text-5xl leading-[56px] md:text-[40px] md:leading-[50px] text-dark-blue font-medium"
      >
        The Bomba app is all you need to send money both at home and abroad
      </h1>
      <p class="mt-8 text-lg leading-[26px] text-greyish-blue">
        We are customer centric and focused on offering values to you that
        enable you achieve your finacial needs.
      </p>
    </div>
    <!-- Mobile/tablet: normal flow -->
    <div class="mt-12 grid grid-cols-1 gap-[60px] lg:hidden">
      <UiServiceCard
        v-for="service in services"
        :key="service.title"
        :title="service.title"
        :subtitle="service.subtitle"
        :description="service.description"
        :image="service.image"
        :buttonText="service.buttonText"
        :bgColor="service.bgColor"
        :comingSoon="service.comingSoon"
      />
    </div>

    <!-- Desktop: 2-column (left-to-right order) -->
    <div class="mt-12 hidden lg:grid grid-cols-2 gap-[60px] items-start">
      <div class="flex h-full flex-col gap-[60px]">
        <UiServiceCard
          v-for="(service, index) in leftColumnServices"
          :key="service.title"
          :title="service.title"
          :subtitle="service.subtitle"
          :description="service.description"
          :image="service.image"
          :buttonText="service.buttonText"
          :bgColor="service.bgColor"
          :comingSoon="service.comingSoon"
          :class="index === 0 ? 'h-[700px]' : 'h-[800px]'"
        />
      </div>
      <div class="flex h-full flex-col gap-[60px]">
        <UiServiceCard
          v-for="(service, index) in rightColumnServices"
          :key="service.title"
          :title="service.title"
          :subtitle="service.subtitle"
          :description="service.description"
          :image="service.image"
          :buttonText="service.buttonText"
          :bgColor="service.bgColor"
          :comingSoon="service.comingSoon"
          :class="index === 0 ? 'h-[800px]' : 'h-[700px]'"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
