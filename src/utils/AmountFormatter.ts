export const balanceFormatter = (balance: string | number) => {
  let bal = balance;
  if (balance === 'undefined' || !balance) bal = '';
  bal = Number(bal)?.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return bal;
};

export const balanceWithKobo = (balance: string) => {
  const balanceSplit = balance?.split(',');
  return Number(balanceSplit?.join(''))?.toFixed(2);
};

export const balanceFormatToNumber = (balance: string) => {
  const balanceSplit = balance?.split(',');
  const bal = balanceSplit?.join('');
  return Number(bal);
};

export const koboToNaira = (amount?: number) => {
  if (!amount) return 0;
  return amount / 100;
};

export const nairaToKobo = (amount?: number) => {
  if (!amount) return 0;
  return amount * 100;
};
