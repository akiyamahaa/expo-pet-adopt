import React from 'react';
import { View } from 'react-native';

import Header from '~/components/home/Header';
import PetListByCategory from '~/components/home/PetListByCategory';
import Slider from '~/components/home/Slider';

const HomePage = () => {
  return (
    <View className="px-5">
      {/* header */}
      <Header />
      {/* Slider */}
      <Slider />
      {/* Category */}
      <PetListByCategory />
      {/* List of Pets */}
      {/* Add New Pet Option */}
    </View>
  );
};

export default HomePage;
