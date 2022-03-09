import { StyleSheet, Dimensions } from "react-native";
import Animated from "react-native-reanimated";

import type { Cards } from "./Card";
import Card from "./Card";
import styled from "styled-components/native";
import useWindowDimensions from "../hooks/useWindowDimensions";

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
});

interface AnimatedCardProps {
  toggled: boolean;
  idx: number;
  card: Cards;
}

const AnimatedCard = ({ card, toggled, idx }: AnimatedCardProps) => {
  const { screenWidth } = useWindowDimensions();
  const origin = -(screenWidth / 2);
  const alpha = toggled ? ((idx - 1) * Math.PI) / 6 : 0;
  const style = {
    transform: [
      { translateX: origin },
      { rotate: `${alpha}rad` },
      { translateX: -origin },
    ],
  };
  return (
    <Container style={[styles.overlay, style]}>
      <Card {...{ card }} />
    </Container>
  );
};

const Container = styled(Animated.View)`
  justify-content: center;
  align-items: center;
`;

export default AnimatedCard;
