import React from "react";
import { Dimensions } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";

const useWindowDimensions = () => {
  const { width, height } = Dimensions.get("window");
  const headerHeight = useHeaderHeight();

  const screenWidth = width;
  const screenHeight = height - headerHeight

  return {screenWidth, screenHeight}
};

export default useWindowDimensions;
