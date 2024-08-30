export const CURRENCY_BASE_URL =
  'https://v6.exchangerate-api.com/v6/1948c6f70defc30aaf884846/latest/';

// Currency options
export const currencies = [
  {label: 'USD', value: 'USD'},
  {label: 'EUR', value: 'EUR'},
  {label: 'GBP', value: 'GBP'},
  {label: 'CAD', value: 'CAD'},
  {label: 'NGN', value: 'NGN'},
  {label: 'JPY', value: 'JPY'},
  {label: 'AUD', value: 'AUD'},
  {label: 'CNY', value: 'CNY'},
  {label: 'INR', value: 'INR'},
  {label: 'ZAR', value: 'ZAR'},
];

export const currencySymbols: Record<string, string> = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  CAD: 'CA$',
  NGN: '₦',
  JPY: '¥',
  AUD: 'A$',
  CNY: '¥',
  INR: '₹',
  ZAR: 'R',
};
