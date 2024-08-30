import {useState, useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';

const useNetworkStatus = () => {
  // Initially, set the network status to null until the real value is determined
  const [isConnected, setIsConnected] = useState<boolean | null>(null);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      // Safely handle potential null values from NetInfo
      const connectionStatus = state.isConnected ?? false;
      setIsConnected(connectionStatus);

      if (connectionStatus) {
        console.log('no connection');
      }
    });

    // Cleanup the NetInfo listener on unmount
    return () => {
      unsubscribe();
    };
  }, []);

  return isConnected;
};

export default useNetworkStatus;
