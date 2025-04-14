import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav"  "main"`,
        lg: `"nav   nav"  "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem area="aside" display={{ base: "none", lg: "block" }}>
        Aside
      </GridItem>

      <GridItem area="main">Main</GridItem>
    </Grid>
  );
};

export default App;
