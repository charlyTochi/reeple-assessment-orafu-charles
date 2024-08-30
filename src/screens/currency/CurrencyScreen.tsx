import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {currencies, currencySymbols} from '../../utils/AppConstants';
import {balanceFormatter} from '../../utils/AmountFormatter';
import useExchangeRate from './hooks/useExchangeRate';
import useNetworkStatus from '../../utils/NetworkInfo';

export const CurrencyScreen = () => {
  const [sourceCurrency, setSourceCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [amount, setAmount] = useState('');
  const {exchangeRate, loading} = useExchangeRate(
    sourceCurrency,
    targetCurrency,
  );
  const [convertedAmount, setConvertedAmount] = useState('');
  const isConnected = useNetworkStatus();

  // Show alert only when network status changes to offline
  useEffect(() => {
    if (isConnected === false) {
      Alert.alert(
        'No Internet Connection',
        'You are currently offline. Exchange rates may not be updated.',
      );
    }
  }, [isConnected]); // Only run when isConnected changes

  // Convert amount in real-time
  const handleAmountChange = (input: string) => {
    setAmount(input);
  };

  // Update converted amount whenever amount, exchange rate, source or target currency changes
  useEffect(() => {
    if (exchangeRate && amount) {
      const result = (parseFloat(amount) * exchangeRate).toFixed(2);
      setConvertedAmount(result);
    } else {
      setConvertedAmount('');
    }
  }, [amount, exchangeRate, sourceCurrency, targetCurrency]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Currency Converter</Text>

      {/* Currency Selector Container */}
      <View style={styles.card}>
        <Text style={styles.label}>From Currency</Text>
        <Picker
          selectedValue={sourceCurrency}
          onValueChange={itemValue => setSourceCurrency(itemValue)}
          style={styles.picker}>
          {currencies.map(currency => (
            <Picker.Item
              label={currency.label}
              value={currency.value}
              key={currency.value}
            />
          ))}
        </Picker>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>To Currency</Text>
        <Picker
          selectedValue={targetCurrency}
          onValueChange={itemValue => setTargetCurrency(itemValue)}
          style={styles.picker}>
          {currencies.map(currency => (
            <Picker.Item
              label={currency.label}
              value={currency.value}
              key={currency.value}
            />
          ))}
        </Picker>
      </View>

      {/* Amount Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={handleAmountChange}
      />

      {/* Display Loading Spinner */}
      {loading ? (
        <ActivityIndicator size="large" color="#3498db" style={styles.loader} />
      ) : null}

      {/* Display Converted Amount */}
      <Text style={styles.convertedAmount}>
        {convertedAmount
          ? `${currencySymbols[sourceCurrency]} ${balanceFormatter(amount)} = ${
              currencySymbols[targetCurrency]
            } ${balanceFormatter(convertedAmount)}`
          : ''}
      </Text>

      {/* Custom Refresh Button */}
      <TouchableOpacity
        style={styles.refreshButton}
        onPress={() => {
          // Trigger re-fetching by updating the currencies
          setSourceCurrency(sourceCurrency);
          setTargetCurrency(targetCurrency);
        }}>
        <Text style={styles.refreshButtonText}>Refresh Rates</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f9',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 30,
    textAlign: 'center',
  },
  card: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#7f8c8d',
    marginBottom: 5,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#ffffff',
    borderColor: '#dfe6e9',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginVertical: 10,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  loader: {
    marginVertical: 20,
  },
  convertedAmount: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginVertical: 20,
    textAlign: 'center',
  },
  refreshButton: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    width: '100%',
    alignItems: 'center',
  },
  refreshButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
});
