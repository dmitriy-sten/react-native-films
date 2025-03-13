import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View, ViewProps } from "react-native";

interface Props {
  className?: string;
  placeholder?: string;
  onPress: () => void;
}

export const SearchBar: React.FC<Props> = ({
  className,
  onPress,
  placeholder,
}) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor={"#ab8bff"}
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value=""
        onChangeText={() => {}}
        placeholderTextColor={"#a8b5db"}
        className="flex-1 ml-2 text-white  w-full "
      />
    </View>
  );
};
