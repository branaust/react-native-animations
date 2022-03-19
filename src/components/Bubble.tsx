import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";
import styled from "styled-components/native";

const size = 32;

interface BubbleProps {
  progress: Animated.SharedValue<number>;
  start: number;
  end: number;
}

type SBubbleProps = {
  size: number;
};

const Bubble = ({ progress, start, end }: BubbleProps) => {
  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      progress.value,
      [start, end],
      [0.5, 1],
      Extrapolate.CLAMP
    );
    const scale = interpolate(
      progress.value,
      [start, end],
      [1, 1.5],
      Extrapolate.CLAMP
    );
    return { opacity, transform: [{ scale }] };
  });
  return <StyledBubble style={[animatedStyle ]} size={size} />;
};

const StyledBubble = styled(Animated.View)<SBubbleProps>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border-radius: ${({ size }) => `${size / 2}px`};
  background-color: #513ff6;
`;

export default Bubble;
