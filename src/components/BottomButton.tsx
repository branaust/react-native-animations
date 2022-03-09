import * as React from "react";
import { SafeAreaView } from "react-native";
import styled from "styled-components/native";

interface ButtonProps {
  label: string;
  primary?: boolean;
  onPress: () => void;
}

const BottomButton = ({ label, primary, onPress }: ButtonProps) => {
  return (
    <StyledTouchable {...{ onPress }}>
      <SafeAreaView accessible>
        <TextWrap>
          <StyledText>{label}</StyledText>
        </TextWrap>
      </SafeAreaView>
    </StyledTouchable>
  );
};

const StyledTouchable = styled.TouchableOpacity`
  background-color: #513ff6;
  justify-content: center;
  align-items: center;
  height: 80px;
`;

const TextWrap = styled.View`
  padding-top: 10px;
`;

const StyledText = styled.Text`
  color: #fff;
  font-weight: 800;
`;

export default BottomButton;
