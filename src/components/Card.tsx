import { Dimensions } from "react-native";
import styled from "styled-components/native";
import Card1 from "../../assets/card1.png";
import Card2 from "../../assets/card2.png";
import Card3 from "../../assets/card3.png";
import Card4 from "../../assets/card4.png";
import Card5 from "../../assets/card5.png";
import Card6 from "../../assets/card6.png";

const { width } = Dimensions.get("window");
const ratio = 228 / 362;
export const CARD_WIDTH = width * 0.8;
export const CARD_HEIGHT = CARD_WIDTH * ratio;
export const assets = [Card1, Card2, Card3, Card4, Card5, Card6];

export enum Cards {
  Card1 = 0,
  Card2 = 1,
  Card3 = 2,
  Card4 = 3,
  Card5 = 4,
  Card6 = 5,
}

export const cards = [
  Cards.Card1,
  Cards.Card2,
  Cards.Card3,
  Cards.Card4,
  Cards.Card5,
  Cards.Card6,
];

interface CardProps {
  card: Cards;
}

const Card = ({ card }: CardProps) => {
  return <StyledCard source={assets[card]} />;
};

const StyledCard = styled.Image`
  width: ${CARD_WIDTH}px;
  height: ${CARD_HEIGHT}px;
  border-radius: 16px;
`;

export default Card;
