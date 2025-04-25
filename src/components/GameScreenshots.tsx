import React from "react";
import useScreenshots from "../hooks/useScreenshots";
import { Image, SimpleGrid } from "@chakra-ui/react";
interface Props {
  gameId: number;
}
const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);
  if (isLoading) return null;
  if (error) throw error;
  if (!data) return null;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spaceX={2}>
      {data.map((d) => (
        <Image key={d.id} src={d.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
