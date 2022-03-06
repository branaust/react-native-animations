import React, { FC } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../Navigation";

const ListOptions = [
  "PanGesture",
  "TESTING1",
  "TESTING2",
  "TESTING3",
  "Testing4",
  "Ay",
  "Yeas",
];

interface ListItemProps {
  item: string;
  index: number;
}

interface StyledListItemProps {
  index: number;
}

const Home: FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const ListItem = ({ item, index }: ListItemProps) => (
    <StyledListItem
      index={index}
      onPress={() => navigation.navigate(item as never)}
    >
      <StyledListTitle>{item}</StyledListTitle>
    </StyledListItem>
  );

  return (
    <FlatList
      data={ListOptions}
      renderItem={ListItem}
      keyExtractor={(item, index) => `key-${index}`}
    />
  );
};

const StyledListItem = styled.TouchableOpacity<StyledListItemProps>`
  height: 50px;
  justify-content: center;
  border-bottom-width: ${({ index }) =>
    index !== ListOptions.length - 1 ? ".2px" : 0};
`;

const StyledListTitle = styled.Text`
  padding-left: 10px;
`;

export default Home;
