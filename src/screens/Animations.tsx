import React, { useEffect, useState } from "react";
import { View } from "react-native";
import BottomButton from "../components/BottomButton";
import styled from "styled-components/native";
import { ChatBubble } from "../components/ChatBubble";
import {
  useSharedValue,
  withTiming,
  withRepeat,
  Easing,
} from "react-native-reanimated";
import { withPause } from "react-native-redash";

const Animations = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const paused = useSharedValue(!isPlaying);
  const progress = useSharedValue(0);
  const easing = Easing.inOut(Easing.ease);

  useEffect(() => {
    progress.value = withPause(
      withRepeat(withTiming(1, { duration: 1000, easing }), -1, true),
      paused
    );
  }, [paused, progress]);

  return (
    <Wrapper>
      <ChatBubble progress={progress} />
      <BottomButton
        label={isPlaying ? "Pause" : "Play"}
        primary
        onPress={() => {
          setIsPlaying((prev) => !prev);
          paused.value = !paused.value;
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export default Animations;
