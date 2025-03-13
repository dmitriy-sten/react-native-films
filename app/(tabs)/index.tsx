import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import { SearchBar } from "@/components/search-bar";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0 " />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerClassName="min-h-full pb-10"
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto " />

        <View className="flex-1 mt-5">
          <SearchBar
            onPress={() => router.push("/search")}
            placeholder="Search for movie"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Index;
