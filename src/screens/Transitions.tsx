import React, { useEffect, useState } from "react";
import styled from "styled-components/native";

import AnimatedCard from "../components/AnimatedCard";

import { cards } from "../components/Card";
import BottomButton from "../components/BottomButton";
import {
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const Transitions = () => {
  const [buttonLabel, setButtonLabel] = useState("Start");
  const toggled = useSharedValue(false);
  const transition = useDerivedValue(() => {
    return withSpring(toggled.value);
  });

  const handleButtonPress = () => {
    toggled.value = !toggled.value;
    toggled.value ? setButtonLabel("Start") : setButtonLabel("Reset");
  };

  return (
    <Container style={{ flex: 1 }}>
      {cards.slice(0, 3).map((card, idx) => (
        <AnimatedCard key={card} {...{ idx, card, transition }} />
      ))}
      <BottomButton label={buttonLabel} primary onPress={handleButtonPress} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #f9f9f9;
  justify-content: flex-end;
`;

export default Transitions;
