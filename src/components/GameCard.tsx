import { Card, HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Game from "../entities/Game";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

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
