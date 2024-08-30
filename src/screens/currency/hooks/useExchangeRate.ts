import {useState, useEffect} from 'react';
import axios from 'axios';
import {CURRENCY_BASE_URL} from '../../../utils/AppConstants';

const useExchangeRate = (sourceCurrency: string, targetCurrency: string) => {
  const [exchangeRate, setExchangeRate] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${CURRENCY_BASE_URL}${sourceCurrency}`,
        );
        const rate = response.data.conversion_rates[targetCurrency];
        setExchangeRate(rate);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchExchangeRate();
  }, [sourceCurrency, targetCurrency]);

  return {exchangeRate, loading};
};

export default useExchangeRate;
