import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";

const App = () => {
  const [seletedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSeletedPlatform] = useState<Platform | null>(
    null
  );
  return (
    <Grid
      templateAreas={{
        base: `"nav"  "main"`,
        lg: `"nav   nav"  "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem
        area="aside"
        padding={2}
        display={{ base: "none", lg: "block" }}
      >
        <GenreList
          onSelectedGenre={(genre) => setSelectedGenre(genre)}
          selectedGenre={seletedGenre}
        />
      </GridItem>

      <GridItem area="main">
        <PlatformSelector
          selectedPlatform={selectedPlatform}
          onSelectPlatform={(platform) => setSeletedPlatform(platform)}
        />
        <GameGrid
          selectedGenre={seletedGenre}
          selectedPlatform={selectedPlatform}
        />
      </GridItem>
    </Grid>
  );
};

export default App;
