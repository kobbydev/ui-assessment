<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from "vue";
import countriesData from "~/assets/data/countries.json";

export type Country = (typeof countriesData)[0];

const {
  label = "Label",
  labelFor,
  loading,
  currency,
} = defineProps<{
  label: string;
  labelFor?: string;
  loading?: boolean;
  currency: string;
}>();

const emit = defineEmits<{
  (e: "onSelectCountry", code: Country["currency"]["code"]): void;
  (e: "onInput", value: number | null): void;
}>();

const modelValue = defineModel<number | null>({ default: null });
const isFocused = ref(false);
const rawInputValue = ref<string>("");
const selectedCountry = ref<(typeof countriesData)[0]>(
  countriesData.find((country) => country.currency.code === currency) ||
    countriesData[0]!
);
const isDropdownOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);
const inputDebounceTimer = ref<NodeJS.Timeout | null>(null);

const formatWithCommas = (value: string): string => {
  if (!value) return "";

  // Remove any existing commas
  const cleaned = value.replace(/,/g, "");

  // Split by decimal point if present
  const parts = cleaned.split(".");
  const integerPart = parts[0] || "";
  const decimalPart = parts[1] || "";

  // Add commas to integer part
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Combine with decimal part if it exists
  if (decimalPart) {
    return `${formattedInteger}.${decimalPart}`;
  }
  return formattedInteger;
};

const formatCurrency = (value: number | null): string => {
  if (value === null || isNaN(value)) return "";

  // Format with thousands separator and 2 decimal places
  return value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

const displayValue = computed(() => {
  if (isFocused.value) {
    // While focused, show value with commas but without forced decimals
    return formatWithCommas(rawInputValue.value);
  } else {
    // When not focused, show formatted value with decimals
    return formatCurrency(modelValue.value);
  }
});

// Sync rawInputValue when modelValue changes externally
watch(
  () => modelValue.value,
  (newValue) => {
    if (!isFocused.value && newValue !== null) {
      rawInputValue.value = newValue.toString().replace(/\.00$/, "");
    }
  }
);

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const inputValue = target.value;

  // Clear existing debounce timer
  if (inputDebounceTimer.value) {
    clearTimeout(inputDebounceTimer.value);
  }

  // Update rawInputValue immediately for responsive UI
  const cleanedValue = inputValue.replace(/[^\d.]/g, "");
  if (!cleanedValue) {
    rawInputValue.value = "";
  } else {
    const parts = cleanedValue.split(".");
    let numericString = parts[0] || "";
    if (parts.length > 1) {
      numericString += "." + parts.slice(1).join("").substring(0, 2);
    }
    rawInputValue.value = numericString;
  }

  // Debounce the modelValue update
  inputDebounceTimer.value = setTimeout(() => {
    const cleanedValue = inputValue.replace(/[^\d.]/g, "");

    if (!cleanedValue) {
      modelValue.value = null;
      rawInputValue.value = "";
      return;
    }

    const parts = cleanedValue.split(".");
    let numericString = parts[0] || "";
    if (parts.length > 1) {
      numericString += "." + parts.slice(1).join("").substring(0, 2);
    }

    const num = parseFloat(numericString);
    if (!isNaN(num)) {
      modelValue.value = num;
      rawInputValue.value = numericString;
      emit("onInput", num);
    } else {
      rawInputValue.value = cleanedValue;
    }
  }, 500);
};

const handleFocus = () => {
  isFocused.value = true;
  if (modelValue.value !== null) {
    const valueStr = modelValue.value.toString();
    rawInputValue.value = valueStr.replace(/\.00$/, "");
  } else {
    rawInputValue.value = "";
  }
};

const handleBlur = () => {
  isFocused.value = false;
  if (rawInputValue.value) {
    const cleanedValue = rawInputValue.value.replace(/,/g, "");
    const num = parseFloat(cleanedValue);
    if (!isNaN(num)) {
      modelValue.value = num;
      emit("onInput", num);
    }
  }
};

const selectCountry = (country: (typeof countriesData)[0]) => {
  selectedCountry.value = country;
  isDropdownOpen.value = false;
  emit("onSelectCountry", country.currency.code);
};

// Close dropdown when clicking outside
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (dropdownRef.value && !dropdownRef.value.contains(target)) {
    isDropdownOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
  if (inputDebounceTimer.value) {
    clearTimeout(inputDebounceTimer.value);
  }
});
</script>

<template>
  <div class="flex max-w-[444px]">
    <div
      class="border border-gray-700 rounded-l-lg px-6 py-3 md:px-9 md:py-5 relative"
    >
      <label
        :for="labelFor || ''"
        class="bg-white text-[10px] text-gray-700 absolute top-[-15%] left-4 md:left-5 px-[6px] z-10"
        >{{ label }}</label
      >
      <input
        :id="labelFor || ''"
        type="text"
        :value="displayValue"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        class="w-full outline-none text-dark-blue text-2xl font-medium"
        :class="{ shimmer: loading }"
        inputmode="decimal"
        :disabled="loading"
      />
    </div>
    <div
      ref="dropdownRef"
      class="bg-dark-blue rounded-r-lg px-3 md:px-8 py-5 relative min-w-[98px] max-w-[98px] md:max-w-[138px] w-full"
    >
      <button
        type="button"
        @click="isDropdownOpen = !isDropdownOpen"
        class="flex items-center gap-1 h-full"
        :disabled="loading"
      >
        <img
          :src="selectedCountry.flag"
          :alt="selectedCountry.name"
          class="w-6 h-6 object-cover rounded"
        />
        <span class="text-white text-sm font-medium">
          {{ selectedCountry.currency.code }}
        </span>
        <img
          src="../../assets/icons/chevron-down.svg"
          alt="Dropdown"
          class="w-4 h-4 transition-transform"
          :class="{ 'rotate-180': isDropdownOpen }"
        />
      </button>

      <!-- Dropdown Menu -->
      <div
        v-if="isDropdownOpen"
        class="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50 min-w-[200px]"
      >
        <ul class="py-2">
          <li
            v-for="country in countriesData"
            :key="country.code"
            @click="selectCountry(country)"
            class="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer text-dark-blue"
            :class="{
              'bg-dark-blue text-white': selectedCountry.code === country.code,
            }"
          >
            <img
              :src="country.flag"
              :alt="country.name"
              class="w-6 h-6 object-cover rounded"
            />
            <span class="text-sm font-medium">
              {{ country.currency.code }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
