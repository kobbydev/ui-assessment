<script setup lang="ts">
import type { Country } from "../ui/CurrencyInput.vue";
import countriesData from "~/assets/data/countries.json";

const sendAmount = ref<number>(1000);
const receiveAmount = ref<number>(0);
const sendCurrency = ref("GBP");
const receiveCurrency = ref("GHS");
const isLoadingSendCurrency = ref(false);
const isLoadingReceiveCurrency = ref(false);
const rate = ref<number>(0);

const fee = computed(() => sendAmount.value * 0.1);
const totalToPay = computed(() => sendAmount.value + fee.value);
const sendCountrySymbol = computed(
  () =>
    countriesData.find(
      (country) => country.currency.code === sendCurrency.value
    )?.currency.symbol
);

const { convertCurrency } = useConvertCurrency();

async function selectSendCountry(
  countryCurrencyCode: Country["currency"]["code"]
) {
  isLoadingReceiveCurrency.value = true;
  sendCurrency.value = countryCurrencyCode;
  const { convertedAmount, rate: newRate } = await convertCurrency(
    sendCurrency.value,
    receiveCurrency.value,
    sendAmount.value
  );
  receiveAmount.value = convertedAmount;
  rate.value = newRate;
  isLoadingReceiveCurrency.value = false;
}

async function selectReceiveCountry(
  countryCurrencyCode: Country["currency"]["code"]
) {
  isLoadingSendCurrency.value = true;
  receiveCurrency.value = countryCurrencyCode;
  const { convertedAmount } = await convertCurrency(
    receiveCurrency.value,
    sendCurrency.value,
    receiveAmount.value
  );
  sendAmount.value = Math.round(convertedAmount);
  isLoadingSendCurrency.value = false;
}

onMounted(async () => {
  isLoadingReceiveCurrency.value = true;
  const { convertedAmount, rate: newRate } = await convertCurrency(
    sendCurrency.value,
    receiveCurrency.value,
    sendAmount.value
  );
  receiveAmount.value = convertedAmount;
  rate.value = newRate;
  isLoadingReceiveCurrency.value = false;
});
</script>

<template>
  <div class="max-w-[444px] mx-auto">
    <UiCurrencyInput
      label="You send"
      labelFor="send-amount"
      v-model="sendAmount"
      @onSelectCountry="selectSendCountry"
      :currency="sendCurrency"
      :loading="isLoadingSendCurrency"
      @onInput="selectSendCountry(sendCurrency)"
    />
    <div class="flex items-center gap-2 relative left-6">
      <img
        src="../../assets/icons/line.svg"
        alt="line"
        class="hidden lg:block"
      />
      <img
        src="../../assets/icons/line-blue.svg"
        alt="line"
        class="block lg:hidden"
      />
      <div>
        <div
          class="text-gray-900 text-[10px] md:text-sm flex items-center gap-2"
        >
          {{ fee.toFixed(2) }}

          {{ sendCurrency }}
          <span
            class="lg:hidden flex gap-2 items-center py-[6px] px-4 bg-gray-400 rounded-[2px]"
          >
            <span>Express</span>
            <img
              src="../../assets/icons/chevron-down.svg"
              alt="chevron down icon"
            />
          </span>
          Fee
        </div>
      </div>
    </div>
    <UiCurrencyInput
      label="Receiver gets"
      labelFor="receive-amount"
      v-model="receiveAmount"
      :currency="receiveCurrency"
      :loading="isLoadingReceiveCurrency"
      @onInput="selectReceiveCountry(receiveCurrency)"
      @onSelectCountry="selectSendCountry"
    />

    <div class="mt-[18px] md:mt-7 grid grid-cols-2 space-y-2">
      <div>
        <p
          class="text-gray-900 md:text-sm text-xs leading-[18px] md:leading-[22px]"
        >
          Amount we'll convert
        </p>
        <p class="text-deep-blue text-sm md:text-lg">
          {{ sendAmount.toFixed(2) }}
        </p>
      </div>
      <div>
        <p
          class="text-gray-900 md:text-sm text-xs leading-[18px] md:leading-[22px] text-end"
        >
          Guaranteed rate (1hrs)
        </p>
        <p class="text-deep-blue text-sm md:text-lg text-end">
          {{ sendCountrySymbol }}1 / {{ receiveCurrency }}{{ rate.toFixed(2) }}
        </p>
      </div>
      <div>
        <p
          class="text-gray-900 md:text-sm text-xs leading-[18px] md:leading-[22px]"
        >
          Total to Pay
        </p>
        <p class="text-deep-blue text-sm md:text-lg">
          {{ totalToPay.toFixed(2) }}
        </p>
      </div>
      <div>
        <p
          class="text-gray-900 md:text-sm text-xs leading-[18px] md:leading-[22px] text-end"
        >
          Average duration
        </p>
        <p class="text-deep-blue text-sm md:text-lg text-end">Instant</p>
      </div>
    </div>

    <button
      class="mt-7 hidden md:block bg-dark-blue text-white px-6 py-[15px] rounded-[5px] w-full"
    >
      Get started for free
    </button>
  </div>
</template>
