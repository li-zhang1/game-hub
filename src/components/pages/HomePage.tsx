import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import GenreList from "../GenreList";
import GameHeading from "../GameHeading";
import PlatformSelector from "../PlatformSelector";
import SortSelector from "../SortSelector";
import GameGrid from "../GameGrid";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem
        area="aside"
        padding={2}
        display={{ base: "none", lg: "block" }}
      >
        <GenreList />
      </GridItem>

      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading />
          <HStack borderSpacing={5} marginBottom={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
