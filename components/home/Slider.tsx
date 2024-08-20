import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, Image, Text, View } from 'react-native';

import { getAllDocuments } from '~/config/api';

const Slider = () => {
  const [sliders, setSliders] = useState<any>([]);

  useEffect(() => {
    getSliders();
  }, []);

  const getSliders = async () => {
    const listSlider = await getAllDocuments('sliders');
    setSliders(listSlider);
  };

  return (
    <View className="mt-4">
      <FlatList
        data={sliders}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View className="">
            <Image
              source={{ uri: item?.imageUrl }}
              className="mr-4 h-[200px] rounded-2xl"
              style={{ width: Dimensions.get('screen').width * 0.9 }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default Slider;
