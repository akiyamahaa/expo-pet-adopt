import { useUser } from '@clerk/clerk-expo';
import { Redirect, useRootNavigationState } from 'expo-router';
import React, { useEffect } from 'react';
import { View } from 'react-native';

const Index = () => {
  const { user } = useUser();
  console.log('🚀 ~ Index ~ user:', user);

  const rootNavigationState = useRootNavigationState();

  useEffect(() => {
    CheckNavLoaded();
  }, []);

  const CheckNavLoaded = () => {
    if (!rootNavigationState.key) {
      return null;
    }
  };
  return (
    // user && (
    <View className="flex-1">
      {user ? <Redirect href="/(tabs)/home" /> : <Redirect href="/login" />}
    </View>
    // )
  );
};

export default Index;
