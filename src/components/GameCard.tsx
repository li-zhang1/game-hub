import React from "react";
import { Game } from "../hooks/useGames";
import { Card, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Card.Body>
        <Image src={game.background_image}></Image>
        <Card.Title fontSize="2xl">{game.name}</Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
