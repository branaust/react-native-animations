import React, { useState } from "react";
import styled from "styled-components/native";

import AnimatedCard from "../components/AnimatedCard";

import { cards } from "../components/Card";
import BottomButton from "../components/BottomButton";
const Transitions = () => {
  const [toggled, setToggled] = useState(false);
  return (
    <Container style={{ flex: 1 }}>
      {cards.slice(0, 3).map((card, idx) => (
        <AnimatedCard key={card} {...{ idx, card, toggled }} />
      ))}
      <BottomButton
        label={toggled ? "Reset" : "Start"}
        primary
        onPress={() => setToggled((prev) => !prev)}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #f9f9f9;
  justify-content: flex-end;
`;

export default Transitions;
