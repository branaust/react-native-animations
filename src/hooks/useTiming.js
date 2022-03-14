import React, { useEffect } from "react";

import {
  useSharedValue,
  useDerivedValue,
  withSpring,
} from "react-native-reanimated";

const useTiming = (state, config) => {
  const value = useSharedValue(0);
  useEffect(() => {
    value.value = typeof state === "number" ? state : state ? 1 : 0;
  }, [state, value]);
  return useDerivedValue(() => {
    return withSpring(value.value, config);
  });
};

export default useTiming;