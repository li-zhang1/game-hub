import React from "react";
import { Game } from "../hooks/useGames";
import { Card, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card.Root>
      <Card.Body>
        <Image src={getCroppedImageUrl(game.background_image)}></Image>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Card.Title fontSize="2xl">
          <Link to={"/games/" + game.slug}> {game.name} </Link>
          <Emoji rating={game.rating_top} />
        </Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
