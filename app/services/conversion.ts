export async function getConversionRate(base: string) {
  const config = useRuntimeConfig();
  const appId = config.public.openExchangeAppId;

  const response = await fetch(
    `https://openexchangerates.org/api/latest.json?app_id=${appId}&base=${base}`
  );
  const data = await response.json();
  return data;
}

export async function getPairConversionRate(base: string, target: string) {
    const config = useRuntimeConfig();
    const apiKey = config.public.exchangerateApiKey;

    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${base}/${target}`
    );
    const data = await response.json();
    return data;
}