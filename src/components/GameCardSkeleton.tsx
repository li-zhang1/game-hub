import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root width="300px" marginY="10px" overflow="hidden" borderRadius={10}>
      <Card.Body>
        <Skeleton height="200px"></Skeleton>
        <SkeletonText></SkeletonText>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
