import { useUser } from '@clerk/clerk-expo';
import React from 'react';
import { Image, Text, View } from 'react-native';

const Header = () => {
  const { user } = useUser();
  return (
    <View className="flex-row items-center justify-between">
      <View>
        <Text className="text-lg">Welcome,</Text>
        <Text className="text-2xl font-medium">{user?.fullName}</Text>
      </View>
      <Image source={{ uri: user?.imageUrl }} className="h-10 w-10 rounded-full" />
    </View>
  );
};

export default Header;
