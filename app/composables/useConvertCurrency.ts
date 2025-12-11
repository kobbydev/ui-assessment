import { getPairConversionRate } from "~/services/conversion";

export default function useConvertCurrency() {
  async function convertCurrency(base: string, target: string, amount: number) {
    const response = await getPairConversionRate(base, target);
    const rate = response.conversion_rate;
    const convertedAmount = Number((amount * rate).toFixed(2));
    return { convertedAmount, rate };
  }

  return {
    convertCurrency,
  };
}
