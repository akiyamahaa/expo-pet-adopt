import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';

import { getAllDocuments } from '~/config/api';

const Category = () => {
  const [categoryList, setCategoryList] = useState<any>([]);
  const [selectedCategory, setSelectedCategory] = useState('Dog');
  useEffect(() => {
    getCategories();
  }, []);
  const getCategories = async () => {
    const list = await getAllDocuments('categories');
    setCategoryList(list);
  };
  return (
    <View className="mt-5">
      <Text className="text-[20px] font-medium">Category</Text>
      <FlatList
        numColumns={4}
        data={categoryList}
        renderItem={({ item, index }) => (
          <TouchableOpacity className="flex-1" onPress={() => setSelectedCategory(item.name)}>
            <View
              className={`bg-light_primary border-primary m-1 items-center rounded-2xl border p-4 
              ${selectedCategory === item.name && 'bg-secondary border-secondary'}`}>
              <Image source={{ uri: item?.imageUrl }} className="h-10 w-10" />
            </View>
            <Text className="text-center">{item?.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Category;
