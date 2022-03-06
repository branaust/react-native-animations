import React from "react";

import Card, { Cards } from "../components/Card";
import styled from "styled-components/native";

interface GestureProps {
  width: number;
  height: number;
}

const PanGesture = ({ width, height }: GestureProps) => {
  console.log({ width, height });
  return (
    <Wrap>
      <Card card={Cards.Card1} />
    </Wrap>
  );
};

const Wrap = styled.View`
  flex: 1;
`;

export default PanGesture;
