import React from "react";

import Card, { Cards, CARD_HEIGHT, CARD_WIDTH } from "../components/Card";
import styled from "styled-components/native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
} from "react-native-reanimated";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { clamp, withBouncing } from "react-native-redash";

const PanGesture = () => {
  const { screenWidth, screenHeight } = useWindowDimensions();
  const boundY = screenHeight - CARD_HEIGHT;
  const boundX = screenWidth - CARD_WIDTH;
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  type AnimatedGHContext = {
    offsetX: number;
    offsetY: number;
  };

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    AnimatedGHContext
  >({
    onStart: (e, ctx) => {
      ctx.offsetX = translateX.value;
      ctx.offsetY = translateY.value;
    },
    onActive: (e, ctx) => {
      translateX.value = clamp(ctx.offsetX + e.translationX, 0, boundX);
      translateY.value = clamp(ctx.offsetY + e.translationY, 0, boundY);
    },
    onEnd: (e) => {
      translateX.value = withBouncing(
        withDecay({
          velocity: e.velocityX,
        }),
        0,
        boundX
      );
      translateY.value = withBouncing(
        withDecay({
          velocity: e.velocityY,
        }),
        0,
        boundY
      );
    },
  });

  const style = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });

  return (
    <Container>
      <PanGestureHandler {...{ onGestureEvent }}>
        <Animated.View {...{ style }}>
          <Card card={Cards.Card1} />
        </Animated.View>
      </PanGestureHandler>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

export default PanGesture;
