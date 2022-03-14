import { StyleSheet } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";

import type { Cards } from "./Card";
import Card from "./Card";
import styled from "styled-components/native";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { mix } from "react-native-redash";

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
});

interface AnimatedCardProps {
  transition: any;
  idx: number;
  card: Cards;
}

const AnimatedCard = ({ card, transition, idx }: AnimatedCardProps) => {
  const { screenWidth } = useWindowDimensions();
  const origin = -(screenWidth / 2);

  const style = useAnimatedStyle(() => {
    const rotate = mix(transition.value, 0, ((idx - 1) * Math.PI) / 6);
    return {
      transform: [{ translateX: origin }, { rotate }, { translateX: -origin }],
    };
  });

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
